import type { RestaurantWithFiles } from "./restaurant";
import type { Prisma } from "@prisma/client";

export type MealType = keyof Prisma.ItemsCreateInput & string;

export type Meal = Prisma.MealCreateWithoutRestaurantInput;

export type MealWithRestaurant = Prisma.MealCreateWithoutRestaurantInput & {
    restaurant: RestaurantWithFiles;
};
