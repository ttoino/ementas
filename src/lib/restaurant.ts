import type { Prisma, Language } from "@prisma/client";
import type { Meal } from "./meal";

export type RestaurantLanguage = Language;

export type MenuFile = Prisma.MenuFileUncheckedCreateInput;

export type Restaurant = Omit<
    Prisma.RestaurantUncheckedCreateInput,
    "meals" | "files"
>;

export type RestaurantWithMeals = Restaurant & {
    meals: Meal[];
};

export type RestaurantWithFiles = Restaurant & {
    files: Prisma.MenuFileCreateWithoutRestaurantInput[];
};

export type RestaurantFull = RestaurantWithMeals & RestaurantWithFiles;
