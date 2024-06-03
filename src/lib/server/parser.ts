import { __, messages } from "$lib/i18n";
import { dateRange, toISO8601 } from "../dates";
import type { MealType, MealWithRestaurant } from "../meal";
import type { RestaurantWithFiles } from "../restaurant";
import { createCanvas } from "canvas";
import jimp from "jimp";
import { type PDFPageProxy } from "pdfjs-dist";
import type {
    PDFDocumentProxy,
    TextItem,
} from "pdfjs-dist/types/src/display/api";
import { Temporal } from "temporal-polyfill";
import {
    type Worker,
    createWorker,
    type RecognizeResult,
    type Word,
} from "tesseract.js";

/**
 * Used to convert meal types from the PDF to their internal representation.
 */
const mealTypeMap: Record<string, MealType> = {
    Sopa: "soup",
    Soup: "soup",
    "Prato de Carne": "meat",
    "Meat dish": "meat",
    Carne: "meat",
    Meat: "meat",
    "Prato de Peixe": "fish",
    "Prato de Pescado": "fish",
    "Fish dish": "fish",
    Peixe: "fish",
    Pescado: "fish",
    Fish: "fish",
    Dieta: "diet",
    Diet: "diet",
    "Prato Vegetariano": "vegetarian",
    "Vegetarian dish": "vegetarian",
    Vegetariano: "vegetarian",
    Vegetariana: "vegetarian",
    Vegetarian: "vegetarian",
    Vegan: "vegetarian",
    Hortícola: "salad",
    Vegetable: "salad",
};

/**
 * Used to convert month names from the PDF to their internal representation.
 */
const monthMap: Record<string, number> = {
    janeiro: 1,
    january: 1,
    jan: 1,
    fevereiro: 2,
    february: 2,
    fev: 2,
    feb: 2,
    março: 3,
    march: 3,
    mar: 3,
    abril: 4,
    april: 4,
    abr: 4,
    apr: 4,
    maio: 5,
    may: 5,
    mai: 5,
    junho: 6,
    june: 6,
    jun: 6,
    julho: 7,
    july: 7,
    jul: 7,
    agosto: 8,
    august: 8,
    ago: 8,
    aug: 8,
    setembro: 9,
    september: 9,
    set: 9,
    sep: 9,
    outubro: 10,
    october: 10,
    // They typoed once so now we must typo forever
    octobor: 10,
    out: 10,
    oct: 10,
    novembro: 11,
    november: 11,
    nov: 11,
    dezembro: 12,
    december: 12,
    dez: 12,
    dec: 12,
};

/**
 * Used to match meals in the PDF.
 */
const dishPattern = new RegExp(
    `^(${Object.keys(mealTypeMap).join("|")})\\s+([\\p{L}\\p{P}\\p{Zs}]+)\\s*(\\d|$)`,
    "u",
);

const ignorePattern = new RegExp(
    `^(${Object.keys(mealTypeMap).join("|")}|Segunda|Terça|Quarta|Quinta|Sexta|Sábado|Domingo|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Dinner|Jantar|Almoço|Lunch|NOTA|NOTE|Nota|Note)`,
    "u",
);

const closedPattern = /ENCERRADO|CLOSED|Carnaval|Feriado|Holiday/u;

/**
 * Used to match dates in the PDF.
 */
const datePattern =
    /(\d{1,2})(?:st|nd|rd|th)?\s+(?:(?:de\s+)?(\p{L}+)\s+)?(?:(?:a|to)\s+)(\d{1,2})(?:st|nd|rd|th)?\s+(?:de\s+)?(\p{L}+)(?:\s+(?:de\s+)?(\d{4}))?/iu;

/**
 * Used to match dinner menus in the PDF.
 */
const dinnerPattern = /jantar|dinner/iu;

/**
 * Parses a PDF to extract the meals.
 *
 * @param pdf The PDF to parse.
 * @returns The meals parsed from the PDF.
 */
export const parsePdf = async (
    pdf: PDFDocumentProxy,
    restaurant: RestaurantWithFiles,
): Promise<MealWithRestaurant[]> => {
    console.log("Parsing PDF");

    const items: MealWithRestaurant[] = [];

    const restaurantDinner = {
        ...restaurant,
        name: `${restaurant.name} - ${__(restaurant.lang, messages.dinner)}`,
        slug: `${restaurant.slug}-${__(restaurant.lang, messages.dinner).toLowerCase()}`,
    };

    let worker: Worker | undefined = undefined;

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);

        const content = await page.getTextContent();

        let lines = getLines(content.items as TextItem[]);

        if (lines.length == 0) {
            const image = await getImage(page);

            if (!worker)
                worker = await createWorker(
                    __(restaurant.lang, messages.threeLetter) + "_ementas",
                );

            const result = await worker.recognize(image);
            lines = await parseTextFromImage(result);
        }

        items.push(...parseContent(lines, restaurant, restaurantDinner));
    }

    worker?.terminate();

    return items;
};

const getImage = async (page: PDFPageProxy) => {
    const viewport = page.getViewport({ scale: 2 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const canvasContext = canvas.getContext(
        "2d",
    ) as unknown as CanvasRenderingContext2D;
    await page.render({
        canvasContext,
        viewport,
    }).promise;
    canvasContext.filter = "grayscale(100%) contrast(50%)";
    return await (await jimp.read(canvas.toBuffer()))
        .scale(4)
        .grayscale()
        .contrast(0.5)
        .getBufferAsync("image/png");
};

const parseTextFromImage = async (result: RecognizeResult) => {
    let lines = result.data.blocks?.flatMap((block) =>
        block.paragraphs.flatMap((paragraph) => paragraph.lines),
    );

    const words = lines?.flatMap((line) => line.words);

    if (!words || !lines) return [];

    const VEs = words.filter(
        (word) => word.text === "VE" || word.text === "(kJ)",
    );
    // Remove last VE, it's in the footer legend
    VEs.pop();
    const startWords = words.filter(
        (word) =>
            word.text === "Segunda" ||
            word.text === "Monday" ||
            word.text === "Almoço",
    );
    const startY = startWords
        ? Math.min(...startWords.map((w) => w.bbox.y0)) - 20
        : 0;
    const endX = VEs ? Math.min(...VEs.map((w) => w.bbox.x0)) : Infinity;

    lines = lines
        .map((line) =>
            line.bbox.y0 >= startY
                ? {
                      ...line,
                      words: line.words.filter((word) => word.bbox.x1 <= endX),
                  }
                : line,
        )
        .filter((line) => line.words.length > 0);

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const mealType: Word[] = [];

        for (const word of line.words) {
            if ([...mealType, word].map((w) => w.text).join(" ") in mealTypeMap)
                mealType.push(word);
            else break;
        }

        if (mealType.length == 0) continue;

        lines[i] = {
            ...line,
            words: line.words.slice(mealType.length),
        };

        const startY = Math.min(...mealType.map((w) => w.bbox.y0));
        const endY = Math.max(...mealType.map((w) => w.bbox.y1));

        const mealTypeLine = lines.find(
            (l) =>
                (l.bbox.y0 >= startY && l.bbox.y0 <= endY) ||
                (l.bbox.y1 >= startY && l.bbox.y1 <= endY) ||
                (l.bbox.y0 <= startY && l.bbox.y1 >= endY),
        );
        mealTypeLine?.words.unshift(...mealType);
    }

    return lines.map((line) => line.words.map((word) => word.text).join(" "));
};

/**
 * Converts the text items from a PDF page to the respective lines of text.
 *
 * @param content The text items from a PDF page.
 * @returns The lines of text in the page.
 */
const getLines = (content: TextItem[]) => {
    const lines: string[] = [];

    let line = "";

    for (const item of content) {
        line += item.str;

        if (item.hasEOL) {
            lines.push(line);
            line = "";
        }
    }

    if (line) lines.push(line);

    return lines;
};

/**
 * Parses the text from a PDF page to extract the meals.
 *
 * @param lines The lines of text from a PDF page.
 * @returns The meals parsed from the text.
 */
const parseContent = (
    lines: string[],
    restaurant: RestaurantWithFiles,
    restaurantDinner: RestaurantWithFiles,
): MealWithRestaurant[] => {
    const dates: Temporal.PlainDate[] = [];
    let isDinner = false;

    for (const line of lines) {
        isDinner ||= dinnerPattern.test(line);

        const m = datePattern.exec(line.toLowerCase());

        if (!m) continue;

        const startDay = parseInt(m[1]);
        const startMonth = monthMap[m[2]];
        const endDay = parseInt(m[3]);
        const endMonth = monthMap[m[4]];
        const year = parseInt(m[5] ?? new Date().getFullYear().toString());

        const startDate = Temporal.PlainDate.from({
            year,
            month: startMonth ?? endMonth,
            day: startDay,
        });
        const endDate = Temporal.PlainDate.from({
            year,
            month: endMonth,
            day: endDay,
        });

        dates.push(...dateRange(startDate, endDate));
    }

    dates.sort((a, b) => -Temporal.PlainDate.compare(a, b));

    if (dates.length !== 0)
        restaurant.files?.push({
            content: lines.join("\n"),
            start: toISO8601(dates[0]),
            end: toISO8601(dates.at(-1)!),
        });

    const days: MealWithRestaurant[] = [];
    let day: MealWithRestaurant;

    const newDay = (push = true) => {
        if (push) days.push(day);

        const date = dates.pop();

        day = {
            date: date ? new Date(toISO8601(date)) : new Date(),
            items: {},
            restaurant: isDinner ? restaurantDinner : restaurant,
        };
    };
    newDay(false);

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        if (i + 1 < lines.length && !ignorePattern.test(lines[i + 1]))
            line += " " + lines[i + 1];
        line = line.replace(/\s+/g, " ").trim();
        const m = dishPattern.exec(line);

        if (!m) continue;

        const type = m[1] in mealTypeMap ? mealTypeMap[m[1]] : "other";

        if (type in day!.items) newDay();

        day!.items[type] = m[2].trim();

        if (closedPattern.test(line)) newDay(false);
    }

    if (Object.keys(day!.items).length > 0) newDay();

    return days;
};
