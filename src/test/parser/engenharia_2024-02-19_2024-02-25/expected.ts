import { expect } from "vitest";

export default [
    {
        date: new Date("2024-02-19Z"),
        items: {
            diet: "Frango cozido com batata e brócolos",
            fish: "Tintureira estufada com molho de legumes e batata",
            meat: "Frango no churrasco com arroz de ervilhas",
            salad: "Salada de alface e tomate",
            soup: "Sopa de feijão-frade",
            vegetarian:
                "Tortilha vegetariana no forno (soja, pimento, macedónia, batata)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-20Z"),
        items: {
            diet: "Solha grelhada com arroz alegre",
            fish: "Solha no forno com ananás e arroz alegre",
            meat: "Carne de porco à portuguesa (porco, batata, pickles)",
            salad: "Salada de couve roxa, pimento e tomate",
            soup: "Sopa de saboia",
            vegetarian: "Seitan à gomes de sá",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-21Z"),
        items: {
            diet: "Perna de peru corada com arroz branco",
            fish: "Massada de tamboril com manjericão",
            meat: "Peru estufado em tomate com esparguete",
            salad: "Salada de alface e pimentos",
            soup: "Creme de abóbora",
            vegetarian: "Croquetes de soja no forno com arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-22Z"),
        items: {
            diet: "Pescada estufada ao natural com batata cozida e repolho",
            fish: "Pescada à poveira (pescada, batata e ovo com molho de cebolada)",
            meat: "Bifanas com batata frita",
            salad: "Salada de alface, milho e pepino",
            soup: "Sopa de cenoura",
            vegetarian:
                "Beringela e pimentos grelhados com feijão preto e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-23Z"),
        items: {
            diet: "Carne de vaca cozida com arroz branco",
            fish: "Salmão gratinado no forno com batata assada",
            meat: "Strogonoff de peru com arroz branco",
            salad: "Feijão-verde salteado",
            soup: "Sopa de grão-de-bico e legumes",
            vegetarian: "Estufadinho de grão com cogumelos e arroz de cenoura",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-24Z"),
        items: {
            diet: "Corvina grelhada com batata cozida e repolho",
            fish: "Corvina à rosa do adro com puré",
            meat: "Omelete mista no forno com arroz de grelos",
            salad: "Salada de cebola e couve roxa",
            soup: "Sopa de couve-flor",
            vegetarian:
                "Tofu salteado com salada de batata, cenoura, ervilhas e feijão-verde",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-25Z"),
        items: {
            diet: "Coxa de frango grelhada com esparguete",
            fish: "Filete de alabote dourado com arroz de legumes",
            meat: "Espetada de aves grelhada com esparguete",
            salad: "Salada de alface e milho",
            soup: "Sopa de brócolos e lentilhas",
            vegetarian:
                "Legumada (feijão catarino, cogumelos, tomate e couve branca) e arroz de legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-19Z"),
        items: {
            diet: "Red fish cozido com batata e brócolos",
            fish: "Red fish no forno com alecrim e arroz",
            meat: "Lasanha de carne de vaca",
            salad: "Salada de alface e cenoura raspada",
            soup: "Creme de alface com lentilhas",
            vegetarian:
                "Grão guisado com legumes (couve branca, cenoura e curgete) com massa fusilli",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-20Z"),
        items: {
            diet: "Bife de peru grelhado com massa fusilli",
            fish: "Massa farfalle de frutos-do-mar, cogumelos, cenoura e pimento",
            meat: "Peru assado com laranja e puré de batata",
            salad: "Salada de alface e beterraba",
            soup: "Sopa de nabiças",
            vegetarian: "Paella vegetariana (com tofu)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-21Z"),
        items: {
            diet: "Abrótea ao vapor com batata cozida e penca",
            fish: "Abrótea grelhada com molho de alho e limão e arroz de cenoura",
            meat: "Panadinhos de porco com arroz de cenoura",
            salad: "Salada de cebola, milho e pepino",
            soup: "Sopa de abóbora e repolho",
            vegetarian: "Hambúrguer de feijão com esparguete",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-22Z"),
        items: {
            diet: "Carne de vaca cozida com batata e repolho",
            fish: "Carapau assado com batata a murro",
            meat: "Goulash de vaca à húngara com puré de batata",
            salad: "Cenoura, couve-lombarda e penca cozidos",
            soup: "Sopa de feijão catarino e couve-galega",
            vegetarian:
                "Bife de seitan grelhado com ananás e batatas salteadas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-23Z"),
        items: {
            diet: "Bacalhau fresco grelhado com arroz branco e legumes",
            fish: "Pataniscas de bacalhau com feijão-frade e molho verde",
            meat: "Frango corado laminado com macarronete",
            salad: "Salada de couve roxa e tomate",
            soup: "Sopa de legumes",
            vegetarian: "Lentilhas estufadas com caril, legumes e arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-24Z"),
        items: {
            diet: "Fêveras grelhadas com batata cozida",
            fish: "Peixe-espada grelhado com molho de alho e ervas e batata cozida",
            meat: "Mini cozido (frango, vaca, couve branca, cenoura e batata)",
            salad: "Salada de alface, beterraba e milho",
            soup: "Sopa de alho-francês e nabo",
            vegetarian:
                "Lasanha de soja e legumes (cenoura, curgete e espinafres)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-02-25Z"),
        items: {
            diet: "Arinca cozida com salada de batata e legumes",
            fish: "Arinca estufada em tomate com arroz branco",
            meat: "Carne de porco à alentejana com batata salteada",
            salad: "Salada de cenoura, pimento e pepino",
            soup: "Sopa de ervilhas",
            vegetarian: "Jardineira de seitan (batata, macedónia e seitan)",
        },
        restaurant: expect.anything(),
    },
];
