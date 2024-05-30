import { __, messages } from "$lib/i18n";
import { dateRange, toISO8601 } from "../dates";
import type { MealType, MealWithRestaurant } from "../meal";
import type { RestaurantWithFiles } from "../restaurant";
import type {
    PDFDocumentProxy,
    TextItem,
} from "pdfjs-dist/types/src/display/api";
import { Temporal } from "temporal-polyfill";

/**
 * Used to convert meal types from the PDF to their internal representation.
 */
const mealTypeMap: Record<string, MealType> = {
    Sopa: "soup",
    Soup: "soup",
    Carne: "meat",
    Meat: "meat",
    "Prato de Carne": "meat",
    Peixe: "fish",
    Pescado: "fish",
    Fish: "fish",
    "Prato de Peixe": "fish",
    "Prato de Pescado": "fish",
    Dieta: "diet",
    Diet: "diet",
    Vegetariano: "vegetarian",
    Vegetariana: "vegetarian",
    Vegetarian: "vegetarian",
    Vegan: "vegetarian",
    "Prato Vegetariano": "vegetarian",
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

const closedPattern = /ENCERRADO|CLOSED|Carnaval/u;

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

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);

        const content = await page.getTextContent();

        const lines = getLines(content.items as TextItem[]);

        items.push(...parseContent(lines, restaurant, restaurantDinner));
    }

    return items;
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
