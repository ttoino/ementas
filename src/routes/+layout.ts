import type { Restaurant } from "$lib/restaurant";
import type { LayoutLoad } from "./$types";

export const trailingSlash = "always";

export const load: LayoutLoad = async ({ fetch }) => {
    const req = await fetch("/api?end=0000-01-01");

    const { restaurants } = (await req.json()) as { restaurants: Restaurant[] };

    return {
        restaurants,
    };
};
