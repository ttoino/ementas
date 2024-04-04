import { expect } from "vitest";

export default [
    {
        date: new Date("2024-03-18Z"),
        items: {
            soup: "Creme de alface com lentilhas",
            meat: "Lasanha de carne de vaca",
            fish: "Red fish no forno com alecrim e arroz",
            diet: "Red fish cozido com batata e brócolos",
            vegetarian:
                "Grão guisado com legumes (couve branca, cenoura e curgete) com massa fusilli",
            salad: "Salada de alface e cenoura raspada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-19Z"),
        items: {
            soup: "Sopa de nabiças",
            meat: "Peru assado com laranja e puré de batata",
            fish: "Massa farfalle de frutos-do-mar, cogumelos, cenoura e pimento",
            diet: "Bife de peru grelhado com massa fusilli",
            vegetarian: "Paella vegetariana (com tofu)",
            salad: "Salada de alface e beterraba",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-20Z"),
        items: {
            soup: "Sopa de abóbora e repolho",
            meat: "Panadinhos de porco com arroz de cenoura",
            fish: "Abrótea grelhada com molho de alho e limão e arroz de cenoura",
            diet: "Abrótea ao vapor com batata cozida e penca",
            vegetarian: "Hambúrguer de feijão com esparguete",
            salad: "Salada de cebola, milho e pepino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-21Z"),
        items: {
            soup: "Sopa de feijão catarino e couve-galega",
            meat: "Goulash de vaca à húngara com puré de batata",
            fish: "Carapau assado com batata a murro",
            diet: "Carne de vaca cozida com batata e repolho",
            vegetarian:
                "Bife de seitan grelhado com ananás e batatas salteadas",
            salad: "Cenoura, couve-lombarda e penca cozidos",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-22Z"),
        items: {
            soup: "Sopa de legumes",
            meat: "Frango corado laminado com macarronete",
            fish: "Pataniscas de bacalhau com feijão-frade e molho verde",
            diet: "Bacalhau fresco grelhado com arroz branco e legumes",
            vegetarian: "Lentilhas estufadas com caril, legumes e arroz branco",
            salad: "Salada de couve roxa e tomate",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-23Z"),
        items: {
            soup: "Sopa de alho-francês e nabo",
            meat: "Mini cozido (frango, vaca, couve branca, cenoura e batata)",
            fish: "Peixe-espada grelhado com molho de alho e ervas e batata cozida",
            diet: "Fêveras grelhadas com batata cozida",
            vegetarian:
                "Lasanha de soja e legumes (cenoura, curgete e espinafres)",
            salad: "Salada de alface, beterraba e milho",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-24Z"),
        items: {
            soup: "Sopa de ervilhas",
            meat: "Carne de porco à alentejana com batata salteada",
            fish: "Arinca estufada em tomate com arroz branco",
            diet: "Arinca cozida com salada de batata e legumes",
            vegetarian: "Jardineira de seitan (batata, macedónia e seitan)",
            salad: "Salada de cenoura, pimento e pepino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-18Z"),
        items: {
            soup: "Sopa de feijão-frade",
            meat: "Frango no churrasco com arroz de ervilhas",
            fish: "Tintureira estufada com molho de legumes e batata",
            diet: "Frango cozido com batata e brócolos",
            vegetarian:
                "Tortilha vegetariana no forno (soja, pimento, macedónia, batata)",
            salad: "Salada de alface e tomate",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-19Z"),
        items: {
            soup: "Sopa de saboia",
            meat: "Carne de porco à portuguesa (porco, batata, pickles)",
            fish: "Solha no forno com ananás e arroz alegre",
            diet: "Solha grelhada com arroz alegre",
            vegetarian: "Seitan à gomes de sá",
            salad: "Salada de couve roxa, pimento e tomate",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-20Z"),
        items: {
            soup: "Creme de abóbora",
            meat: "Peru estufado em tomate com esparguete",
            fish: "Massada de tamboril com manjericão",
            diet: "Perna de peru corada com arroz branco",
            vegetarian: "Croquetes de soja no forno com arroz branco",
            salad: "Salada de alface e pimentos",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-21Z"),
        items: {
            soup: "Sopa de cenoura",
            meat: "Bifanas com batata frita",
            fish: "Pescada à poveira (pescada, batata e ovo com molho de cebolada)",
            diet: "Pescada estufada ao natural com batata cozida e repolho",
            vegetarian:
                "Beringela e pimentos grelhados com feijão preto e arroz",
            salad: "Salada de alface, milho e pepino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-22Z"),
        items: {
            soup: "Sopa de grão-de-bico e legumes",
            meat: "Strogonoff de peru com arroz branco",
            fish: "Salmão gratinado no forno com batata assada",
            diet: "Carne de vaca cozida com arroz branco",
            vegetarian: "Estufadinho de grão com cogumelos e arroz de cenoura",
            salad: "Feijão-verde salteado",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-23Z"),
        items: {
            soup: "Sopa de couve-flor",
            meat: "Omelete mista no forno com arroz de grelos",
            fish: "Corvina à rosa do adro com puré",
            diet: "Corvina grelhada com batata cozida e repolho",
            vegetarian:
                "Tofu salteado com salada de batata, cenoura, ervilhas e feijão-verde",
            salad: "Salada de cebola e couve roxa",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-24Z"),
        items: {
            soup: "Sopa de brócolos e lentilhas",
            meat: "Espetada de aves grelhada com esparguete",
            fish: "Filete de alabote dourado com arroz de legumes",
            diet: "Coxa de frango grelhada com esparguete",
            vegetarian:
                "Legumada (feijão catarino, cogumelos, tomate e couve branca) e arroz de legumes",
            salad: "Salada de alface e milho",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-25Z"),
        items: {
            soup: "Creme de espinafres e grão",
            meat: "Feijoada à brasileira (porco, frango, feijão preto e arroz branco)",
            fish: "Fogonero estufado à primaveril (ervilhas e cenoura) com arroz branco",
            diet: "Costeletas grelhadas com arroz branco",
            vegetarian: "Bifanas seitan com esparguete de cenoura",
            salad: "Feijão-verde salteado",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-26Z"),
        items: {
            soup: "Sopa de brócolos",
            meat: "Bife de frango grelhado com molho de natas e cogumelos e batatas salteadas",
            fish: "Filetes de pescada grelhados com arroz de tomate",
            diet: "Pescada ao vapor com batata cozida e couve-de-bruxelas",
            vegetarian: "Jardineira de soja",
            salad: "Salada de alface e tomate",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-27Z"),
        items: {
            soup: "Sopa de feijão branco e penca",
            meat: "Lombo de porco assado com massa espiral salteada",
            fish: "Tintureira à rosa do adro com puré",
            diet: "Coxinhas de frango grelhadas com massa espiral cozida",
            vegetarian: "Empadão de arroz de lentilhas e legumes",
            salad: "Salada de cenoura raspada e milho",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-28Z"),
        items: {
            soup: "Sopa de legumes (batata, cenoura, curgete e couve branca)",
            meat: "Borrego assado com batata assada",
            fish: "Massa com atum gratinada com queijo e ervas aromáticas",
            diet: "Fogonero cozido com batata cozida e couve branca",
            vegetarian: "Rancho vegan",
            salad: "Macedónia salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-29Z"),
        items: {
            soup: "Caldo verde",
            meat: "Grelhada mista de carnes (entremeada, coto frango e toscana) com arroz e feijão preto",
            fish: "Sardinhas assadas com batata a murro",
            diet: "Coxa de peru corada com arroz de cenoura",
            vegetarian:
                "Tofu grelhado com ervas aromáticas e batatas salteadas",
            salad: "Cebola e pimentos assados",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-30Z"),
        items: {
            soup: "Creme de ervilhas",
            meat: "Frango assado com molho de limão e batata assada",
            fish: "Peixe-espada grelhado com batata cozida e molho de salsa",
            diet: "Arinca grelhada com batata cozida",
            vegetarian: "Cuscuz salteado com legumes e grão",
            salad: "Couve-flor e couve-de-bruxelas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-31Z"),
        items: {
            soup: "Sopa de alho-francês e couve-flor",
            meat: "Arroz à valenciana (carnes, marisco, calamares, legumes e arroz)",
            fish: "Bacalhau fresco gratinado com crosta de broa, espinafres e ervas aromáticas, acompanha com batata",
            diet: "Pargo na chapa com batata cozida",
            vegetarian:
                "Salada de tofu, cogumelos, pimento vermelho, milho e batata",
            salad: "Salada de pepino, pimento verde e tomate",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-25Z"),
        items: {
            soup: "Sopa de ervilhas e curgete",
            meat: "Fêveras de porco grelhadas com molho de limão e arroz",
            fish: "Saladinha de peixe (grão, ovo, abrótea desfiada e salsa)",
            diet: "Abrótea escalfada com arroz branco e couve-de-bruxelas",
            vegetarian:
                "Empadão de legumes (batata, cenoura, repolho, pimento e soja)",
            salad: "Salada de cebola, cenoura e pimento vermelho",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-26Z"),
        items: {
            soup: "Sopa de couve-lombarda",
            meat: "Perna de peru estufada com cenoura aos cubos e esparguete",
            fish: "Carapau assado com arroz de tomate e pimentos",
            diet: "Perna de peru cozida com cenoura e esparguete cozida",
            vegetarian: "Esparguete à bolonhesa de lentilhas",
            salad: "Brócolos, cenoura e curgete cozidos",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-27Z"),
        items: {
            soup: "Sopa de cebola com juliana de couve",
            meat: "Arroz de pato",
            fish: "Raia assada com batata cozida e molho verde",
            diet: "Raia ao vapor com batata cozida e feijão-verde",
            vegetarian: "Fritatta de legumes com seitan e arroz",
            salad: "Salada de alface, cenoura e pepino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-28Z"),
        items: {
            soup: "Sopa de feijão-verde",
            meat: "Cubinhos de peru estufados com molho de tomate e macarronete",
            fish: "Cavala grelhada com molho de alho e arroz branco",
            diet: "Escalopes de porco grelhados com macarronete cozido",
            vegetarian: "Feijão fradinho com migas de broa e arroz branco",
            salad: "Salada de couve roxa, milho e pepino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-29Z"),
        items: {
            soup: "Creme de legumes e lentilhas",
            meat: "Empadão de carne de vaca com cenoura",
            fish: "Potas estufadas com arroz branco",
            diet: "Potas grelhadas com arroz branco",
            vegetarian:
                "Ratattouille de soja (legumes, cogumelos) e batata salteada",
            salad: "Salada de cenoura e pepino",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-30Z"),
        items: {
            soup: "Sopa de hortaliça (couve-lombarda, batata, cenoura, cebola e curgete)",
            meat: "Almôndegas de aves estufadas com esparguete",
            fish: "Bacalhau cozido com todos",
            diet: "Bife de vaca grelhado com esparguete",
            vegetarian:
                "Feijoada de legumes (feijão catarino, cogumelos, tomate) e massa fusilli",
            salad: "Salada de couve roxa",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2024-03-31Z"),
        items: {
            soup: "Sopa de brócolos e feijão catarino",
            meat: "Coelho à caçador com puré",
            fish: "Pargo assado com arroz de alecrim",
            diet: "Pargo na chapa com batata cozida",
            vegetarian:
                "Beringela recheada com soja, couve ralada e puré de cenoura",
            salad: "Cenoura baby salteada",
        },
        restaurant: expect.anything(),
    },
];
