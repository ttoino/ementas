import type { Meal } from "./meal";
import type { Prisma } from "@prisma/client";

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
