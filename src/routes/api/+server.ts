import prisma from "$lib/server/prisma";
import type { RequestHandler } from "./$types";
import { includeMealsBetween } from "./util";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
    const query = url.searchParams;

    const restaurants = await prisma.restaurant.findMany({
        include: includeMealsBetween(query),
        orderBy: {
            name: "asc",
        },
    });

    return json({ restaurants });
};
