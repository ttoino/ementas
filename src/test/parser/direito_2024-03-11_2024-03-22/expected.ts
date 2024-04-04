import { expect } from "vitest";

export default [
    {
        date: new Date("2024-03-11Z"),
        items: {
            fish: "Solha no forno com batata a murro",
            meat: "Fêveras panadas com arroz de cenoura",
            salad: "Salada de alface e tomate",
            soup: "Creme de brócolos",
            vegetarian: "Migas de broa com feijão frade e espinafres",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-12Z"),
        items: {
            fish: "Bacalhau com natas",
            meat: "Jardineira de carne de vaca",
            salad: "Salada de alface e cebola",
            soup: "Sopa de couve-lombarda e lentilhas",
            vegetarian:
                "Almôndegas de feijão vermelho com molho de tomate e fusilli salteado",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-13Z"),
        items: {
            fish: "Badejo de escabeche com puré de batata",
            meat: "Feijoada à Transmontana com arroz aromático",
            salad: "Feijão-verde cozido",
            soup: "Sopa de cenoura",
            vegetarian: "Strogonoff de tofu com arroz aromático",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-14Z"),
        items: {
            fish: "Macarronete salteado com atum e tomate",
            meat: "Arroz de frango no forno",
            salad: "Salada de cenoura raspada",
            soup: "Sopa de nabos e feijão vermelho",
            vegetarian: "Alho francês salteado com soja e batata",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-15Z"),
        items: {
            fish: "Pescada à Bulhão Pato com batata salteada",
            meat: "Pá de porco assada com batata salteada",
            salad: "Chucrute cozida",
            soup: "Creme de alho francês",
            vegetarian:
                "Guisado de feijão preto com legumes com arroz de brócolos",
        },
        restaurant: expect.anything(),
    },
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
                "Bifes de tofu com molho de pimentos e coco com massa fusilli salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-21Z"),
        items: {
            fish: "Arroz seco de potas",
            meat: "Carne de vaca estufada com arroz de cenoura",
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
            meat: "Carne de porco à Alentejana (com amêijoa e batata) e arroz branco",
            salad: "Salada de alface e beterraba",
            soup: "Creme de couve-flor e favas",
            vegetarian: "Bolonhesa de lentilhas com esparguete salteado",
        },
        restaurant: expect.anything(),
    },
];
