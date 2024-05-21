import prisma from "$lib/server/prisma";
import { includeMealsBetween } from "../util";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params, url }) => {
    const query = url.searchParams;

    const restaurant = await prisma.restaurant.findUnique({
        where: {
            id: params.restaurantId,
        },
        include: includeMealsBetween(query),
    });

    if (!restaurant) throw error(404);

    return json({ restaurant });
};
