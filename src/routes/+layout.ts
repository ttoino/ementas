import { __, type Language, messages } from "$lib/i18n";
import type { Restaurant } from "$lib/restaurant";
import type { LayoutLoad } from "./$types";

export const trailingSlash = "always";

export const load: LayoutLoad = async ({ fetch }) => {
    const req = await fetch("/api?end=0000-01-01");

    const { restaurants } = (await req.json()) as { restaurants: Restaurant[] };

    const restaurantsByLanguage = Object.groupBy(
        restaurants,
        (r) => r.lang,
    ) as Record<Language, Restaurant[]>;

    const restaurantsByLanguageAndCampus = Object.fromEntries(
        Object.entries(restaurantsByLanguage).map(([lang, restaurants]) => [
            lang,
            Object.groupBy(
                restaurants,
                (r) => r.campus ?? __(r.lang, messages.other),
            ) as Record<string, Restaurant[]>,
        ]),
    ) as Record<Language, Record<string, Restaurant[]>>;

    const restaurantsByCampus = Object.values(
        restaurantsByLanguageAndCampus,
    ).reduce((acc, lang) => ({ ...acc, ...lang }), {});

    return {
        restaurants,
        restaurantsByCampus,
        restaurantsByLanguage,
        restaurantsByLanguageAndCampus,
    };
};
