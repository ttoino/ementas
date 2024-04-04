import type { LayoutLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutLoad = async ({ params, parent }) => {
    const { lang, restaurantId } = params;
    const { restaurants } = await parent();

    const restaurant = restaurants.find((r) => r.id === restaurantId);

    if (restaurant && restaurant?.lang !== lang)
        throw redirect(307, `/${restaurant.lang}/${restaurant.id}/`);
};
