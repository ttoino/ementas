import type { Language } from "$lib/i18n";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, setHeaders }) => {
    setHeaders({
        "Content-Language": params.lang,
    });

    return {
        lang: params.lang as Language,
    };
};
