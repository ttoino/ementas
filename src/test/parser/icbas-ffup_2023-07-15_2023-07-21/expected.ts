import { expect } from "vitest";

export default [
    {
        date: new Date("2023-07-17Z"),
        items: {
            fish: "Badejo grelhado com arroz de milho",
            meat: "Novilho estufado com cenoura e ervilhas com puré de batata",
            salad: "Salada de alface e beterraba",
            soup: "Caldo verde",
            vegetarian: "Lasanha de lentilhas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-18Z"),
        items: {
            fish: "Salmão assado com batata a murro",
            meat: "Bife de peru grelhado com esparguete salteado à Primavera",
            salad: "Salada de pimentos e cebola",
            soup: "Sopa de couve lombarda e lentilhas",
            vegetarian:
                "Hambúrguer de feijão vermelho no forno com molho de tomate com esparguete salteado à Primavera",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-19Z"),
        items: {
            fish: "Massada de pescada e frutos do mar",
            meat: "Frango assado com arroz branco",
            salad: "Salada de alface e milho",
            soup: "Sopa de espinafres",
            vegetarian: "Feijoada de cogumelos com arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-20Z"),
        items: {
            fish: "Solha assada com maionese e batata cozida",
            meat: "Costeleta de porco grelhada com arroz de cenoura",
            salad: "Salada de alface e tomate",
            soup: "Sopa de couve-flor",
            vegetarian:
                "Falafel com molho de pimentos e coco e esparguete salteado",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-21Z"),
        items: {
            fish: "Salada de feijão frade com atum e batata",
            meat: "Coelho à caçador com arroz de cogumelos",
            salad: "Salada de pepino, maçã e cebola",
            soup: "Creme de abóbora e feijão-verde",
            vegetarian: "Paella vegetariana",
        },
        restaurant: expect.anything(),
    },
];
