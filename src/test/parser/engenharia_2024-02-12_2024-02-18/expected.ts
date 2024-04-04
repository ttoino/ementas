import { expect } from "vitest";

export default [
    {
        date: new Date("2024-02-12Z"),
        items: {
            diet: "Carapau grelhado com arroz branco",
            fish: "Carapau no forno com batata assada",
            meat: "Entrecosto assado com arroz de ervilhas",
            salad: "Salada de tomate e pimento",
            soup: "Sopa de alho-francês e couve-flor",
            vegetarian: "Estufado de lentilhas com esparguete",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-13Z"),
        items: {
            diet: "Coxa de frango grelhada com espirais",
            fish: "Cavala grelhada com arroz de milho",
            meat: "Tirinhas de vaca estufadas com cenoura, ervilhas e puré de batata",
            salad: "Salada de couve roxa, pepino e cebola",
            soup: "Sopa de feijão catarino e repolho",
            vegetarian: "Rolo de soja com arroz de milho",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-14Z"),
        items: {
            diet: "Abrótea cozida com batata cozida e brócolos",
            fish: "Abrótea à João do grão",
            meat: "Bifinhos de peru grelhados com molho de cenoura e massa fusilli",
            salad: "Salada de couve roxa, pepino e cebola",
            soup: "Sopa de couve-lombarda",
            vegetarian:
                "Massa salteada com cogumelos, beringela, cenoura e feijão catarino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-15Z"),
        items: {
            diet: "Bife de frango grelhado com massa talharim",
            fish: "Petingas fritas com arroz de feijão",
            meat: "Carne de vaca corada com batata assada aos cubos",
            salad: "Abóbora e couve-flor salteadas",
            soup: "Creme de feijão vermelho e cenoura",
            vegetarian: "Seitan assado com banana e batata corada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-16Z"),
        items: {
            diet: "Corvina cozida com batata cozida e legumes",
            fish: "Corvina grelhada com limão e batata ensalsada",
            meat: "Frango à passarinho com esparguete",
            salad: "Salada de alface, cebola e tomate",
            soup: "Sopa de couve-galega",
            vegetarian: "Almôndegas de grão com molho de tomate e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-17Z"),
        items: {
            diet: "Costeletas grelhadas com arroz branco",
            fish: "Bolonhesa de atum",
            meat: "Costeletas à salsicheiro com batata frita e arroz",
            salad: "Milho e pepino",
            soup: "Sopa de grão-de-bico e brócolos",
            vegetarian:
                "Legumes salteados com soja (cenoura, curgete, espinafres e pimento vermelho) e massa fusilli",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-18Z"),
        items: {
            diet: "Perca na chapa com arroz de legumes",
            fish: "Tranches de perca no forno com molho de pimentos e arroz de legumes",
            meat: "Chanfana de borrego com batata",
            salad: "Salada de cebola e couve roxa",
            soup: "Sopa de hortaliça",
            vegetarian:
                "Empadão de lentilhas e legumes (cenoura, cogumelos e brócolos)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-12Z"),
        items: {
            diet: "Bife de peru grelhado com esparguete",
            fish: "Maruca com amêijoa na frigideira e arroz branco",
            meat: "Roti de peru no forno com batata assada e ervas aromáticas",
            salad: "Salada de alface e cenoura",
            soup: "Creme de juliana de legumes",
            vegetarian: "Bolonhesa de soja",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-13Z"),
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
        date: new Date("2024-02-14Z"),
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
        date: new Date("2024-02-15Z"),
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
        date: new Date("2024-02-16Z"),
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
    {
        date: new Date("2024-02-17Z"),
        items: {
            diet: "Solha grelhada com arroz branco e feijão-verde cozido",
            fish: "Solha assada com molho de cenoura e arroz branco",
            meat: "Carne de vaca guisada com cogumelos e puré",
            salad: "Salada de alface e tomate",
            soup: "Sopa de feijão-verde",
            vegetarian: "Ensopado de favas com alho-francês e arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-18Z"),
        items: {
            diet: "Perna de peru assada ao natural com batata corada",
            fish: "Salmão grelhado em cama de legumes com grão e batata cozida aos cubos",
            meat: "Perna de peru assada com molho de mostarda e mel e arroz de cenoura",
            salad: "Cebola, cenoura e pimento vermelho",
            soup: "Sopa de feijão vermelho com grelos",
            vegetarian:
                "Ervilhas estufadas com soja, repolho, cenoura e massa fusilli",
        },
        restaurant: expect.anything(),
    },
];
