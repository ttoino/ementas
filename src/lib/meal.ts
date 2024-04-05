import type { RestaurantWithFiles } from "./restaurant";
import type { Prisma } from "@prisma/client";

export type MealItems = Prisma.ItemsCreateInput;

export type MealType = keyof MealItems & string;

export type Meal = Omit<Prisma.MealCreateWithoutRestaurantInput, "items"> & {
    items: MealItems;
};

export type MealWithRestaurant = Meal & {
    restaurant: RestaurantWithFiles;
};
