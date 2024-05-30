import type { MealWithRestaurant } from "../meal";
import type { RestaurantLanguage, RestaurantWithFiles } from "../restaurant";
import { parsePdf } from "./parser";
import { url as workerSrc } from "./pdfjsworker";
import { parseHTML } from "linkedom";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import slugify from "slugify";

GlobalWorkerOptions.workerSrc = workerSrc;

export const scrape = (): Promise<MealWithRestaurant[]> =>
    Promise.allSettled([
        scrapeRestaurants(
            "https://www.up.pt/portal/pt/sasup/alimentacao/ementas/",
            "pt",
        ),
        scrapeRestaurants(
            "https://www.up.pt/portal/en/sasup/food/menus/",
            "en",
        ),
    ]).then((results) =>
        results.flatMap((result) =>
            result.status === "fulfilled" ? result.value : [],
        ),
    );

const scrapeRestaurants = async (
    baseUrl: string,
    lang: RestaurantLanguage,
): Promise<MealWithRestaurant[]> => {
    console.log("Scraping", baseUrl);
    const res = await fetch(baseUrl);
    const html = await res.text();
    const { document } = parseHTML(html);
    console.log("Scraped", baseUrl, document.title);

    let campus: string | null = null;

    const meals: MealWithRestaurant[] = await Promise.allSettled(
        [
            ...document.querySelectorAll<
                HTMLAnchorElement | HTMLHeadingElement
            >(".row :is(a[download], h2)"),
        ]
            .map((e) => {
                if (e.nodeName == "H2") campus = e.textContent;

                return { e, campus };
            })
            .filter(
                (({ e }) => e.nodeName == "A") as (a: {
                    e: HTMLElement;
                    campus: string | null;
                }) => a is { e: HTMLAnchorElement; campus: string | null },
            )
            .map(async ({ e, campus }) => {
                const url = new URL(e.href.replace(/^%20/, ""), baseUrl).href;
                console.log("Parsing", url);

                const name =
                    e.textContent?.replace("Menu", "")?.trim() ?? "Unknown";

                const slug = slugify(name, { lower: true, strict: true });

                const restaurant: RestaurantWithFiles = {
                    name,
                    slug,
                    campus,
                    lang,
                    files: [],
                };

                const r = parsePdf(await getDocument(url).promise, restaurant);

                console.log("Parsed", url);

                return r;
            }),
    ).then((results) =>
        results.flatMap((result) => {
            if (result.status === "rejected") {
                console.error(result.reason);
                return [];
            }

            return result.value;
        }),
    );

    return meals;
};
