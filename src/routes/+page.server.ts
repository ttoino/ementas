import { match } from "../params/lang";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request }) => {
    const accept = request.headers.get("Accept-Language");

    if (accept) {
        const langs = accept.split(",");

        langs.forEach((lang) => {
            lang = lang.split("-")[0];

            if (match(lang)) throw redirect(307, `/${lang}/`);
        });
    }

    throw redirect(307, "/en/");
};
