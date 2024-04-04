import { expect } from "vitest";

export default [
    {
        date: new Date("2024-03-11Z"),
        items: {
            diet: "Tirinhas de vaca cozidas com arroz de legumes",
            fish: "Filetes de solha assados com batata assada",
            meat: "Strogonoff de porco com arroz branco",
            salad: "Salada de alface e milho",
            soup: "Sopa de cenoura com juliana de couve",
            vegetarian: "Empadão de soja e legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-12Z"),
        items: {
            diet: "Carapau grelhado com batata cozida",
            fish: "Calamares no forno com arroz de tomate",
            meat: "Perna de frango corada com massa espiral",
            salad: "Salada de couve roxa e pepino",
            soup: "Sopa de couve portuguesa",
            vegetarian:
                "Feijão preto estufado com cogumelos, arroz de tomate e couve-galega",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-13Z"),
        items: {
            diet: "Costeletas grelhadas com arroz branco",
            fish: "Lasanha de atum",
            meat: "Tortilha de carnes (porco, aves) e salada",
            salad: "Salada de alface, cebola e milho",
            soup: "Sopa de abóbora e favas",
            vegetarian:
                "Seitan estufado com ervilhas, cenoura e batata salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-14Z"),
        items: {
            diet: "Red fish cozido com batata cozida e penca",
            fish: "Red fish assado com tomilho e arroz branco",
            meat: "Esparguete à bolonhesa",
            salad: "Salada de tomate e pimento",
            soup: "Sopa de couve-de-bruxelas com lentilhas",
            vegetarian:
                "Caçarola vegetariana (batata, soja grossa, cenoura, curgete, ervilhas, brócolos e pimento vermelho)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-15Z"),
        items: {
            diet: "Perna de peru grelhada com massa espiral",
            fish: "Sardinhas assadas com batata cozida e pimentos",
            meat: "Perna de peru assada com arroz de legumes (couve branca e cenoura)",
            salad: "Salada de alface e beterraba",
            soup: "Creme de grão-de-bico e legumes",
            vegetarian:
                "Massa tricolor com feijão branco estufado, cogumelos, ananás e macedónia",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-18Z"),
        items: {
            diet: "Bife de peru grelhado com esparguete",
            fish: "Maruca com amêijoa na frigideira e arroz branco",
            meat: "Roti de peru no forno com batata assada e ervas aromáticas",
            salad: "Salada de alface e cenoura",
            soup: "Sopa de feijão vermelho com grelos",
            vegetarian: "Bolonhesa de soja",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-19Z"),
        items: {
            diet: "Pescada cozida com batata cozida e feijão-verde e repolho",
            fish: "Pescada assada com batata salteada",
            meat: "Fêvera grelhada com molho de mostarda e esparguete",
            salad: "Milho e pepino",
            soup: "Sopa de abóbora e repolho",
            vegetarian:
                "Salada de feijão-frade com arroz e mistura chinesa salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-20Z"),
        items: {
            diet: "Hambúrguer de vaca grelhado com arroz branco",
            fish: "Potas estufadas com arroz branco",
            meat: "Hambúrguer de vaca no forno com ovo estrelado e batata frita",
            salad: "Salada de alface e tomate",
            soup: "Sopa de couve branca e grão-de-bico",
            vegetarian: "Tofu à gomes de sá",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-21Z"),
        items: {
            diet: "Filete de paloco cozido com salada de batata (batata cozida e macedónia)",
            fish: "Cavala no forno com molho de tomate e batata cozida",
            meat: "Caril de frango com arroz branco",
            salad: "Salada de cenoura, milho e tomate",
            soup: "Sopa de couve portuguesa",
            vegetarian:
                "Chili vegetariano (feijão encarnado, milho, beringela, pimento e curgete) com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-22Z"),
        items: {
            diet: "Fêvera de porco grelhada com tagliatelle cozido",
            fish: "Tarte de paloco no forno com espinafres",
            meat: "Tranches de porco à primaveril com massa tagliatelle",
            salad: "Brócolos salteados",
            soup: "Sopa de cenoura e favas",
            vegetarian: "Seitan à lagareiro",
        },
        restaurant: expect.anything(),
    },
];
