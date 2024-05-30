import { match } from "../params/lang";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request }) => {
    const accept = request.headers.get("Accept-Language");

    console.log(`Accept-Language: ${accept}`);

    if (accept) {
        const langs = accept.split(",");

        langs.forEach((lang) => {
            lang = lang.split("-")[0];
            console.log(lang);

            if (match(lang)) throw redirect(308, `/${lang}/`);
        });
    }

    throw redirect(308, "/en/");
};
