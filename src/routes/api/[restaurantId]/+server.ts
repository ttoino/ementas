import prisma from "$lib/server/prisma";
import { isMongoId } from "$lib/util";
import { includeMealsBetween } from "../util";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params, url }) => {
    const query = url.searchParams;

    const where = isMongoId(params.restaurantId)
        ? { id: params.restaurantId }
        : { slug: params.restaurantId };

    const restaurant = await prisma.restaurant.findUnique({
        where,
        include: includeMealsBetween(query),
    });

    if (!restaurant) throw error(404);

    return json({ restaurant });
};
