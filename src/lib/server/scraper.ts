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

    const meals: MealWithRestaurant[] = await Promise.allSettled(
        [...document.querySelectorAll<HTMLAnchorElement>("a[download]")].map(
            async (a) => {
                const url = new URL(a.href.replace(/^%20/, ""), baseUrl).href;
                console.log("Parsing", url);

                const name =
                    a.textContent?.replace("Menu", "")?.trim() ?? "Unknown";

                const slug = slugify(name, { lower: true, strict: true });

                const restaurant: RestaurantWithFiles = {
                    name,
                    slug,
                    lang,
                    files: [],
                };

                const r = parsePdf(await getDocument(url).promise, restaurant);

                console.log("Parsed", url);

                return r;
            },
        ),
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
