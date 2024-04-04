import { parseOrDefault, toISO8601 } from "$lib/dates";
import type { Prisma } from "@prisma/client";
import { Temporal } from "temporal-polyfill";

export const includeMealsBetween = (
    query: URLSearchParams,
): Prisma.RestaurantInclude => {
    const startDate = parseOrDefault(
        Temporal.PlainDate,
        query.get("start"),
        Temporal.Now.plainDateISO().subtract({ days: 7 }),
    );
    const endDate = parseOrDefault(
        Temporal.PlainDate,
        query.get("end"),
        Temporal.Now.plainDateISO().add({ days: 7 }),
    );

    return {
        meals: {
            where: {
                date: {
                    gte: toISO8601(startDate),
                    lte: toISO8601(endDate),
                },
            },
        },
    };
};
