import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => ["en", "pt"].includes(param);
