import type { PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { Temporal } from "temporal-polyfill";

export const load: PageLoad = async ({ url }) => {
    const date = Temporal.Now.plainDateISO();

    throw redirect(307, new URL(`./${date.toString()}`, url));
};
