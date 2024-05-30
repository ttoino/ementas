import type { AtLeastOne } from "$lib/util";
import type { $Enums } from "@prisma/client";

export type Language = $Enums.Language;

export type Message = string | AtLeastOne<Record<Language, string>>;

type _Messages<T> = Record<string, Message | T>;
export interface Messages extends _Messages<Messages> {}

export * from "./messages";
export * from "./store";
