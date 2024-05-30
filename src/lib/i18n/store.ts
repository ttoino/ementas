import { page } from "$app/stores";
import type { Language, Message } from ".";
import { derived } from "svelte/store";

export const __ = (lang: Language, m: Message) =>
    typeof m == "string" ? m : m[lang] ?? Object.values(m)[0];

export const _ = derived(page, ({ data }) => {
    const lang = (data.lang ?? "en") as Language;
    return (m: Message) => __(lang, m);
});
