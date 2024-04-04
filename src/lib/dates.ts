import { Temporal } from "temporal-polyfill";

export const parseOrDefault = <
    S,
    D,
    T extends {
        from: (s: S | D) => R;
    },
    R = ReturnType<T["from"]>,
>(
    t: T,
    s: S | undefined | null,
    d: D,
): R => {
    if (s === undefined || s === null) return t.from(d);

    try {
        return t.from(s);
    } catch {
        console.warn("Invalid date:", s);

        return t.from(d);
    }
};

export const dateRange = function* (
    startDate: Temporal.PlainDate,
    endDate: Temporal.PlainDate,
) {
    for (
        let date = startDate;
        Temporal.PlainDate.compare(date, endDate) < 1;
        date = date.add({ days: 1 })
    ) {
        yield date;
    }
};

export const toISO8601 = (
    date: Temporal.ZonedDateTime | Temporal.PlainDateTime | Temporal.PlainDate,
) => {
    const d =
        date instanceof Temporal.ZonedDateTime
            ? date
            : date.toZonedDateTime("UTC");

    return d.toString({
        calendarName: "never",
        timeZoneName: "never",
    });
};
