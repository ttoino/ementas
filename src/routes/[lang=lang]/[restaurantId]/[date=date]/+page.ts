import type { RestaurantWithMeals } from "$lib/restaurant";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch, params }) => {
    const req = await fetch(
        `/api/${params.restaurantId}?start=${params.date}&end=${params.date}`,
    );

    if (!req.ok) throw error(req.status);

    const { restaurant } = (await req.json()) as {
        restaurant?: RestaurantWithMeals;
    };

    return {
        restaurant,
        date: params.date,
    };
};
