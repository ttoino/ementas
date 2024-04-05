import type { RestaurantLanguage } from "$lib/restaurant";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, setHeaders }) => {
    setHeaders({
        "Content-Language": params.lang,
    });

    return {
        lang: params.lang as RestaurantLanguage,
    };
};
