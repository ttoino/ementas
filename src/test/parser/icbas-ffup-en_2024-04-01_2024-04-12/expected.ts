import { expect } from "vitest";

export default [
    {
        date: new Date("2024-04-02Z"),
        items: {
            soup: "Leek and cauliflower soup",
            meat: "Beef stew with vegetables and sautéed fusilli",
            fish: 'Scabbardfish "à Madeirense" (fried with banana) with white cabbage rice',
            vegetarian: "Seitan steaks with mushroom sauce and sautéed fusilli",
            salad: "Lettuce and carrot salad",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-03Z"),
        items: {
            soup: "Broccoli soup",
            meat: "Turkey stroganoff with boiled rice",
            fish: "Roasted sardine “à Portuguesa” (with peppers) with boiled potatoes",
            vegetarian: "Lentils and vegetables curry with boiled rice",
            salad: "Boiled carrots and white cabbage",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-04Z"),
        items: {
            soup: "Red kidney bean and pointed cabbage soup",
            meat: 'Pork "à Alentejana" (with potatoes and clams) and boiled rice',
            fish: "Grilled redfish with seafood sauce and boiled rice",
            vegetarian: "Red kidney bean, vegetable and potatoes tortilla",
            salad: "Lettuce and corn salad",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-05Z"),
        items: {
            soup: "Carrot and lentil creamy soup",
            meat: "Roasted chicken leg with sautéed spaghetti",
            fish: "Grilled flying squids with boiled potatoes",
            vegetarian:
                "Roasted red kidney bean burger with tomato sauce and sautéed spaghetti",
            salad: "Tomato and oregano salad",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-08Z"),
        items: {
            soup: "Mixed vegetables soup",
            meat: "Stewed pasta with beef",
            fish: "Seafood rice",
            vegetarian: "Lentil stew with sauteed fusilli",
            salad: "Lettuce and carrot salad",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-09Z"),
        items: {
            soup: "Lentil and savoy cabbage soup",
            meat: "Grilled chicken steak with peas rice",
            fish: "Roasted whiting with roasted potatoes",
            vegetarian: 'Tofu "à Gomes de Sá"',
            salad: "Sautéed vegetables",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-10Z"),
        items: {
            soup: "Spinach and chickpea soup",
            meat: "Roasted pork belly with roasted potatoes",
            fish: 'Hake and seafood "Moqueca" Brazilian style (with coconut) and boiled rice',
            vegetarian:
                'Vegetarian "feijoada à Transmontana" (with red bean and greens) with seitan sausage and mushrooms with boiled rice',
            salad: "Carrot and corn salad",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-11Z"),
        items: {
            soup: "Creamy pumpkin soup",
            meat: "Veal pie",
            fish: "Roasted sole with mayonnaise and boiled potatoes",
            vegetarian:
                "Falafel (fried chickpea cakes) with peppers and coconut sauce and sautéed maccheroni",
            salad: "Lettuce and tomato salad",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-04-12Z"),
        items: {
            soup: "Cauliflower and haricot bean soup",
            meat: "Portuguese duck rice",
            fish: "Black-eyed bean salad with tuna and potatoes",
            vegetarian: "Vegetarian paella with soy meat",
            salad: "Tomato and carrot salad",
        },
        restaurant: expect.anything(),
    },
];
