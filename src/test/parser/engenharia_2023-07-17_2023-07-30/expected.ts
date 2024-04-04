import { expect } from "vitest";

export default [
    {
        date: new Date("2023-07-17Z"),
        items: {
            diet: "Abrótea escalfada com arroz branco e couve-de-bruxelas",
            fish: "Saladinha de peixe (grão, ovo, abrótea desfiada e salsa)",
            meat: "Fêveras de porco grelhadas com molho de limão e arroz",
            salad: "Salada de cebola, cenoura e pimento vermelho",
            soup: "Sopa de ervilhas e curgete",
            vegetarian:
                "Empadão de legumes (batata, cenoura, repolho, pimento e soja)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-18Z"),
        items: {
            diet: "Perna de peru cozida com cenoura e esparguete cozida",
            fish: "Carapau assado com arroz de tomate e pimentos",
            meat: "Perna de peru estufada com cenoura aos cubos e esparguete",
            salad: "Brócolos, cenoura e curgete cozidos",
            soup: "Sopa de couve-lombarda",
            vegetarian: "Esparguete à bolonhesa de lentilhas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-19Z"),
        items: {
            diet: "Raia ao vapor com batata cozida e feijão-verde",
            fish: "Raia assada com batata cozida e molho verde",
            meat: "Arroz de pato",
            salad: "Salada de alface, cenoura e pepino",
            soup: "Sopa de cebola com juliana de couve",
            vegetarian: "Fritatta de legumes com seitan e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-20Z"),
        items: {
            diet: "Escalopes de porco grelhados com macarronete cozido",
            fish: "Cavala grelhada com molho de alho e arroz branco",
            meat: "Cubinhos de peru estufados com molho de tomate e macarronete",
            salad: "Salada de couve roxa, milho e pepino",
            soup: "Sopa de feijão-verde",
            vegetarian: "Feijão fradinho com migas de broa e arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-21Z"),
        items: {
            diet: "Potas grelhadas com arroz branco",
            fish: "Potas estufadas com arroz branco",
            meat: "Empadão de carne de vaca com cenoura",
            salad: "Salada de cenoura e pepino",
            soup: "Creme de legumes e lentilhas",
            vegetarian:
                "Ratattouille de soja (legumes, cogumelos) e batata salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-22Z"),
        items: {
            diet: "Bife de vaca grelhado com esparguete",
            fish: "Bacalhau cozido com todos",
            meat: "Almôndegas de aves estufadas com esparguete",
            salad: "Salada de couve roxa",
            soup: "Sopa de hortaliça (couve-lombarda, batata, cenoura, cebola e curgete)",
            vegetarian:
                "Feijoada de legumes (feijão catarino, cogumelos, tomate) e massa fusilli",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-23Z"),
        items: {
            diet: "Pargo na chapa com batata cozida",
            fish: "Pargo assado com arroz de alecrim",
            meat: "Coelho à caçador com puré",
            salad: "Cenoura baby salteada",
            soup: "Sopa de brócolos e feijão catarino",
            vegetarian:
                "Beringela recheada com soja, couve ralada e puré de cenoura",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-17Z"),
        items: {
            diet: "Costeletas grelhadas com arroz branco",
            fish: "Fogonero estufado à primaveril (ervilhas e cenoura) com arroz branco",
            meat: "Feijoada à brasileira (porco, frango, feijão preto e arroz branco)",
            salad: "Feijão-verde salteado",
            soup: "Creme de espinafres e grão",
            vegetarian: "Bifanas seitan com esparguete de cenoura",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-18Z"),
        items: {
            diet: "Pescada ao vapor com batata cozida e couve-de-bruxelas",
            fish: "Filetes de pescada grelhados com arroz de tomate",
            meat: "Bife de frango grelhado com molho de natas e cogumelos e batatas salteadas",
            salad: "Salada de alface e tomate",
            soup: "Sopa de brócolos",
            vegetarian: "Jardineira de soja",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-19Z"),
        items: {
            diet: "Coxinhas de frango grelhadas com massa espiral cozida",
            fish: "Tintureira à rosa do adro com puré",
            meat: "Lombo de porco assado com massa espiral salteada",
            salad: "Salada de cenoura raspada e milho",
            soup: "Sopa de feijão branco e penca",
            vegetarian: "Empadão de arroz de lentilhas e legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-20Z"),
        items: {
            diet: "Fogonero cozido com batata cozida e couve branca",
            fish: "Massa com atum gratinada com queijo e ervas aromáticas",
            meat: "Frango assado com molho de limão e batata assada",
            salad: "Macedónia salteada",
            soup: "Sopa de legumes (batata, cenoura, curgete e couve branca)",
            vegetarian: "Rancho vegan",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-21Z"),
        items: {
            diet: "Coxa de peru corada com arroz de cenoura",
            fish: "Sardinhas assadas com batata a murro",
            meat: "Grelhada mista de carnes (entremeada, coto frango e toscana) com arroz e feijão preto",
            salad: "Cebola e pimentos assados",
            soup: "Caldo verde",
            vegetarian:
                "Tofu grelhado com ervas aromáticas e batatas salteadas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-22Z"),
        items: {
            diet: "Arinca grelhada com batata cozida",
            fish: "Peixe-espada grelhado com batata cozida e molho de salsa",
            meat: "Borrego assado com arroz",
            salad: "Couve-flor e couve-de-bruxelas",
            soup: "Creme de ervilhas",
            vegetarian: "Cuscuz salteado com legumes e grão",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-23Z"),
        items: {
            diet: "Tirinhas de frango ao vapor com arroz de legumes",
            fish: "Bacalhau fresco gratinado com crosta de broa, espinafres e ervas aromáticas, acompanha com batata",
            meat: "Arroz à valenciana (carnes, marisco, calamares, legumes e arroz)",
            salad: "Salada de pepino, pimento verde e tomate",
            soup: "Sopa de alho-francês e couve-flor",
            vegetarian:
                "Salada de tofu, cogumelos, pimento vermelho, milho e batata",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-24Z"),
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
        date: new Date("2023-07-25Z"),
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
        date: new Date("2023-07-26Z"),
        items: {
            diet: "Costeletas grelhadas com arroz branco",
            fish: "Lasanha de atum",
            meat: "Tortilha de carnes (porco, aves) e salada",
            salad: "Salada de alface, cebola e milho",
            soup: "Sopa de abóbora e repolho",
            vegetarian:
                "Seitan estufado com ervilhas, cenoura e batata salteada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-27Z"),
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
        date: new Date("2023-07-28Z"),
        items: {
            diet: "Perna de peru grelhada com massa espiral",
            fish: "Sardinhas assadas com batata cozida e pimentos",
            meat: "Perna de peru assada com arroz de legumes (couve branca e cenoura)",
            salad: "Salada de alface e beterraba",
            soup: "Creme de grão-de-bico e legumes",
            vegetarian:
                "Massa tricolor com branco estufado, cogumelos, ananás e macedónia",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-29Z"),
        items: {
            diet: "Bacalhau fresco cozido com batata cozida e couve branca",
            fish: "Bacalhau à gomes de sá",
            meat: "Costeletas grelhadas com molho de tomate e puré",
            salad: "Salada de tomate e pimento",
            soup: "Sopa de cebola com brócolos",
            vegetarian:
                "Caril de seitan, alho-francês, cogumelos e ervilhas com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-30Z"),
        items: {
            diet: "Costeletas grelhadas com tagliatelle",
            fish: "Carapau assado com molho de escabeche e batata assada",
            meat: "Caril de peru com arroz branco",
            salad: "Repolho salteado",
            soup: "Sopa de abóbora e favas",
            vegetarian:
                "Tortilha vegetariana de cogumelos, tofu e legumes no forno",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-24Z"),
        items: {
            diet: "Filetes de solha ao vapor com arroz branco e macedónia",
            fish: "Red fish assado com batata assada",
            meat: "Alheira no forno com batatas salteadas",
            salad: "Salada de cenoura, maçã e tomate",
            soup: "Sopa de couve-galega e abóbora",
            vegetarian: "Ensopado de lentilhas com legumes e batatas salteadas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-25Z"),
        items: {
            diet: "Bife de peru grelhado com esparguete cozido",
            fish: "Escamudo estufado com molho de cenoura e arroz branco",
            meat: "Rolo de carne de vaca picada com molho de cenoura e arroz branco",
            salad: "Grelos salteados",
            soup: "Sopa de feijão branco e nabiças",
            vegetarian: "Strogonoff de seitan com arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-26Z"),
        items: {
            diet: "Solha grelhada com batata cozida",
            fish: "Massada de marisco (ameijoa, camarão, delícias-do-mar)",
            meat: "Peito de frango grelhado com batata assada",
            salad: "Salada de alface, cebola e tomate",
            soup: "Sopa de cenoura e couve-lombarda",
            vegetarian:
                "Macarronada vegetariana (brócolos, ervilhas, tomate e soja)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-27Z"),
        items: {
            diet: "Cozido simples (frango e vaca) com arroz branco e repolho cozido",
            fish: "Pargo grelhado com arroz à primavera",
            meat: "Cubinhos de peru salteados com pickles e arroz primavera (cenoura, ervilhas )",
            salad: "Salada de alface e couve roxa",
            soup: "Sopa de feijão-verde e lentilhas",
            vegetarian:
                "Empadão de arroz com feijão vermelho e legumes (alho-francês, ervilhas e curgete)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-28Z"),
        items: {
            diet: "Filetes de pescada ao vapor com batata cozida",
            fish: "Bolinhos de bacalhau no forno com salada de feijão-frade, arroz e salsa",
            meat: "Rojões à portuguesa (batata frita e arroz)",
            salad: "Mistura chinesa salteada",
            soup: "Sopa de alho-francês e abóbora",
            vegetarian:
                "Falafel (bolinho de grão) com molho de cenoura e arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-29Z"),
        items: {
            diet: "Perna de frango assada ao natural com arroz branco",
            fish: "Raia dourada com batata cozida aos cubos e macedónia",
            meat: "Perna de frango crocante com corn flakes, feijão preto e arroz",
            salad: "Salada de cebola, milho e pepino",
            soup: "Sopa de couve branca",
            vegetarian:
                "Salada de batata aos cubos com feijão catarino, cenoura e ervilhas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2023-07-30Z"),
        items: {
            diet: "Corvina na chapa com arroz de legumes",
            fish: "Corvina assada com tomilho e arroz de legumes",
            meat: "Pá de porco assada com batata assada",
            salad: "Salada de alface e cenoura",
            soup: "Sopa de couve-flor e feijão catarino",
            vegetarian: "Feijoada de cogumelos com batata assada",
        },
        restaurant: expect.anything(),
    },
];
