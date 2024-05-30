import type { Restaurant } from "$lib/restaurant";
import prisma from "$lib/server/prisma";
import { scrape } from "$lib/server/scraper";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ getClientAddress }) => {
    const clientAddress = getClientAddress();

    console.log(`Client address: ${clientAddress}`);

    if (!["::1", "127.0.0.1"].includes(clientAddress)) throw error(403);

    const meals = await scrape();

    const restaurantMap = new Map<string, Restaurant>();

    try {
        prisma.$transaction(async (prisma) => {
            for (const meal of meals) {
                if (!restaurantMap.has(meal.restaurant.name)) {
                    const restaurant = await prisma.restaurant.upsert({
                        where: { name: meal.restaurant.name },
                        update: {
                            ...meal.restaurant,
                            files: undefined,
                        },
                        create: {
                            ...meal.restaurant,
                            files: undefined,
                        },
                    });
                    restaurantMap.set(restaurant.name, {
                        ...restaurant,
                    });

                    for (const file of meal.restaurant.files) {
                        await prisma.menuFile.upsert({
                            where: {
                                start_end_restaurantId: {
                                    start: file.start,
                                    end: file.end,
                                    restaurantId: restaurant.id!,
                                },
                            },
                            update: {
                                ...file,
                                restaurantId: restaurant.id!,
                            },
                            create: {
                                ...file,
                                restaurantId: restaurant.id!,
                            },
                        });
                    }
                }

                const mealObj = {
                    date: meal.date,
                    items: meal.items,
                    restaurantId: restaurantMap.get(meal.restaurant.name)!.id!,
                };

                await prisma.meal.upsert({
                    where: {
                        date_restaurantId: {
                            date: meal.date,
                            restaurantId: restaurantMap.get(
                                meal.restaurant.name,
                            )!.id!,
                        },
                    },
                    update: mealObj,
                    create: mealObj,
                });
            }
        });
    } catch (e) {
        console.error(e);
        throw error(500);
    }

    return json({});
};
