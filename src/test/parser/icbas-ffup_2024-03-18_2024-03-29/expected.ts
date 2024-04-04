import { expect } from "vitest";

export default [
    {
        date: new Date("2024-03-18Z"),
        items: {
            fish: "Red-fish à Zé do Pipo com puré de batata",
            meat: "Macarronada de carne de vaca gratinada",
            salad: "Couve-lombarda cozida",
            soup: "Sopa de couve coração e cenoura",
            vegetarian: "Jardineira de soja",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-19Z"),
        items: {
            fish: "Massa à Marinheiro (pescada, mexilhão e delícias do mar)",
            meat: "Coxa de frango assada com arroz de couve branca",
            salad: "Salada de tomate e cenoura",
            soup: "Caldo verde",
            vegetarian: "Seitan assado com pera com arroz de couve branca",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-20Z"),
        items: {
            fish: "Badejo assado com batata assada com tomilho",
            meat: "Bife de peru à Salsicheiro com massa fusilli salteada",
            salad: "Salada de alface e milho",
            soup: "Creme de espinafres e feijão branco",
            vegetarian:
                "Bifes de tofu com molho de pimentos e coco e massa fusilli salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-21Z"),
        items: {
            fish: "Arroz seco de potas",
            meat: "Carne de porco à Alentejana (com amêijoa e batata) e arroz branco",
            salad: "Couve à mineira vegetariana",
            soup: "Sopa de grelos e lentilhas",
            vegetarian: "Tortilha de batata com feijão vermelho e legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-22Z"),
        items: {
            fish: "Salada russa com atum",
            meat: "Carne de vaca estufada com arroz de cenoura",
            salad: "Salada de alface",
            soup: "Creme de couve-flor e favas",
            vegetarian: "Bolonhesa de lentilhas com esparguete salteado",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-25Z"),
        items: {
            fish: "Massada de atum, tomate e azeitona",
            meat: "Espetada de peru no forno com arroz de grelos",
            salad: "Salada de cenoura",
            soup: "Creme de abóbora e feijão-verde",
            vegetarian: "Soja à camponesa com arroz de grelos",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-26Z"),
        items: {
            fish: "Cação no forno com macedónia e arroz branco",
            meat: "Bolonhesa de carne com esparguete salteado",
            salad: "Salada de alface e tomate",
            soup: "Sopa à Lavrador",
            vegetarian:
                "Pataniscas de grão-de-bico, brócolos e cenoura com molho de cogumelos e arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-27Z"),
        items: {
            fish: "Empadão de pescada com espinafres",
            meat: "Frango assado com molho à Bairrada e arroz de salsa",
            salad: "Esparregado de grelos",
            soup: "Creme de legumes",
            vegetarian: "Lasanha de lentilhas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-28Z"),
        items: {
            fish: "Peixe-espada à madeirense (frito com banana) e arroz de cenoura",
            meat: "Borrego assado com batata assada e arroz",
            salad: "Salada de alface, cenoura e tomate",
            soup: "Sopa de nabos e ervilhas",
            vegetarian: "Caldeirada de seitan com legumes e batata",
        },
        restaurant: expect.anything(),
    },
];
