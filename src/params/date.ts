import type { ParamMatcher } from "@sveltejs/kit";
import { Temporal } from "temporal-polyfill";

export const match: ParamMatcher = (date) => {
    try {
        Temporal.PlainDate.from(date);
        return true;
    } catch {
        return false;
    }
};
