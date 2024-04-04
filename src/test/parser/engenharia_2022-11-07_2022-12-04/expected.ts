import { expect } from "vitest";

export default [
    {
        date: new Date("2022-11-07Z"),
        items: {
            diet: "Filete de paloco ao vapor com batata cozida e molho verde",
            fish: "Red fish à Narcisa (cebolada e pimentos) com batata salteada em azeite",
            meat: "Panadinhos de porco com esparguete e de tomate",
            soup: "Juliana de legumes",
            vegetarian: "Arroz xau-xau com feijão manteiga",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-08Z"),
        items: {
            diet: "Peru corado com arroz",
            fish: "Tirinhas de pota panadas no forno com massa farfalle",
            meat: "Tirinhas de vaca estufadas com cenoura e puré de batata",
            soup: "Sopa de feijão vermelho e couve branca",
            vegetarian:
                "Bife de tofu assado com farinha de milho e batata assada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-09Z"),
        items: {
            diet: "Abrótea cozida com batata cozida e repolho",
            fish: "Arroz de marisco",
            meat: "Coxas de frango assada com arroz de penca",
            soup: "Sopa de alho-francês",
            vegetarian: "Beringela recheada com soja, legumes e massa",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-10Z"),
        items: {
            diet: "Perna de frango grelhada com macarrão",
            fish: "Pescada à rosa do adro com puré de batata",
            meat: "Bifanas com arroz alegre (ervilha e cenoura)",
            soup: "Sopa de couve saboia e abóbora",
            vegetarian: "Feijoada de legumes (feijão catarino) com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-11Z"),
        items: {
            diet: "Pargo grelhado com arroz de legumes",
            fish: "Pargo assado com arroz de legumes",
            meat: "Rancho à moda de Viseu",
            soup: "Sopa de espinafres e feijão-frade",
            vegetarian: "Seitan assado de cebolada com batata assada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-12Z"),
        items: {
            diet: "Costeletas grelhadas com arroz alegre",
            fish: "Peixe-espada grelhado com batata cozida e molho verde",
            meat: "Pá de porco assada com molho de laranja e batata salteada em azeite",
            soup: "Sopa de abóbora com massinhas",
            vegetarian: "Guisado de grão com curgete, couve branca e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-13Z"),
        items: {
            diet: "Perca escalfada com batata cozida polvilhada com salsa",
            fish: "Perca assada à lagareiro com batata a murro",
            meat: "Borrego assado com batata assada e grelos",
            soup: "Creme de legumes e feijão branco",
            vegetarian:
                "Ensopado de lentilhas com legumes e esmagada de batata",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-14Z"),
        items: {
            diet: "Tirinhas de peru ao vapor com massa cotovelos e legumes cozidos",
            fish: "Corvina à rosa do adro com puré de cenoura",
            meat: "Esparguete à bolonhesa com gratinado com queijo e e salada de alface",
            soup: "Creme de cenoura",
            vegetarian:
                "Grão vegetariano à algarvia (grão, soja, batata e repolho)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-15Z"),
        items: {
            diet: "Red fish grelhado com arroz e couve branca",
            fish: "Pataniscas de paloco com arroz de feijão vermelho",
            meat: "Grelhada mista de carnes (entremeada, coto frango e toscana) com batata areada",
            soup: "Sopa de couve-lombarda",
            vegetarian:
                "Ratattouille de legumes (beringela, tomate, curgete, cogumelos e soja) com batatas salteadas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-16Z"),
        items: {
            diet: "Cozido simples (perna de frango, cenoura, batata e repolho)",
            fish: "Feijoada de potas",
            meat: "Peito de frango alourado com esparguete de cenour",
            soup: "Sopa de abóbora e repolho",
            vegetarian: "Massa farfalle salteada com seitan e brócolos",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-17Z"),
        items: {
            diet: "Potas grelhadas com arroz e hortaliça",
            fish: "Sardinhas grelhadas com arroz branco e molho de salsa",
            meat: "Carne de vaca assada fatiada com arroz de ervas aromáticas",
            soup: "Sopa de brócolos e feijão catarino",
            vegetarian:
                "Beringela e pimentos grelhados com feijão preto e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-18Z"),
        items: {
            diet: "Fêveras de porco estufadas ao natural com massa cotovelos e feijão verde cozido",
            fish: "Carapauzinhos fritos com arroz de feijão",
            meat: "Pica pau de tabuleiro no forno (porco, salsicha) com molho de tomate e batata frita",
            soup: "Sopa de juliana de legumes",
            vegetarian: "Lentilhas no forno com arroz de cenoura",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-19Z"),
        items: {
            diet: "Cavala cozida com arroz de coentros",
            fish: "Filete de pangasius no forno com tomatada e esmagada de batata",
            meat: "Cubinhos de peru estufados com molho tomate e puré de batata",
            soup: "Sopa de curgete",
            vegetarian: "Rolo de soja com arroz e couve-de-bruxelas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-20Z"),
        items: {
            diet: "Peru na chapa com arroz e feijão-verde",
            fish: "Abrótea assada com arroz de feijão verde",
            meat: "Cozido à portuguesa",
            soup: "Sopa de feijão-verde, cenoura e ervilhas",
            vegetarian: "Tofu à gomes de sá",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-21Z"),
        items: {
            diet: "Sardinhas grelhadas com batata cozida",
            fish: "Sonhos de salmão com arroz de cenoura",
            meat: "Rolo de carne de vaca picada com molho de cenoura e esparguete",
            soup: "Sopa de feijão catarino e repolho",
            vegetarian: "Empadão de lentilhas e legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-22Z"),
        items: {
            diet: "Peru grelhado com macarrão",
            fish: "Perca escalfada com salada de batata",
            meat: "Perna de porco assada com maçã e arroz",
            soup: "Sopa de alho-francês e couve-flor",
            vegetarian: "Massa salteada vegetariana (soja, milho e brócolos)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-23Z"),
        items: {
            diet: "Potas grelhadas com arroz branco",
            fish: "Potas estufadas com puré de batata e tostinhas",
            meat: "Perna de frango no churrasco com puré de batata e brócolos",
            soup: "Sopa de couve-lombarda",
            vegetarian: "Caril de tofu com saladinha de batata",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-24Z"),
        items: {
            diet: "Tirinhas de frango cozidas com farfalle",
            fish: "Carapau no forno com cebolada e arroz",
            meat: "Jardineira de carnes (porco e vaca) com arroz",
            soup: "Creme de ervilhas",
            vegetarian: "Salada de feijão-frade com mistura chinesa",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-25Z"),
        items: {
            diet: "Abrótea cozida com batata cozida e brócolos",
            fish: "Bolinhos de bacalhau no forno com feijão-frade",
            meat: "Tortilha de carne de porco no forno com salada de alface",
            soup: "Sopa de couve galega",
            vegetarian: "Massa à lavrador com seitan",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-26Z"),
        items: {
            diet: "Costeletas grelhadas com arroz",
            fish: "Red fish assado com molho de mostarda e batata assada",
            meat: "Coelho à caçador com batata cozida",
            soup: "Sopa de grão-de-bico e brócolos",
            vegetarian: "Rolo de soja assado com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-27Z"),
        items: {
            diet: "Raia grelhada com arroz branco e repolho",
            fish: "Terrina do mar (red fish, pescada, pimentos e cebola)",
            meat: "Peru corado recheado com legumes e massa cotovelos",
            soup: "Sopa de hortaliça e feijão branco",
            vegetarian: "Grão estufado com legumes e arroz de coentros",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-28Z"),
        items: {
            diet: "Pescada cozida com batata e repolho cozido",
            fish: "Abrótea a zé do pipo com puré",
            meat: "Arroz camponês de peru (cubinhos de peru, cenoura, ervilhas, milho e feijão verde) e macedónia",
            soup: "Sopa de feijão-frade",
            vegetarian: "Lentilhas estufadas com caril e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-29Z"),
        items: {
            diet: "Bife de vaca grelhado com massa tricolor",
            fish: "Potas à bordalesa com puré de batata",
            meat: "Pá de porco guisada com feijão catarino e arroz",
            soup: "Sopa de couve saboia",
            vegetarian:
                "Legumes à grega (soja, cenoura, couve-flor e milho) com massa tricolor",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-30Z"),
        items: {
            diet: "Arinca ao vapor com batata e couve-lombarda cozida",
            fish: "Arinca assada com orégãos e arroz alegre (ervilhas e cenoura)",
            meat: "Empadão de carne com salada de cenoura",
            soup: "Creme de abóbora",
            vegetarian: "Seitan estufado com brócolos e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-01Z"),
        items: {
            diet: "Fêveras de porco grelhadas com arroz de ervilhas",
            fish: "Salada de talharim com atum, cenoura e ananás",
            meat: "Coxas de frango corada com batatas salteadas em azeite",
            soup: "Sopa de cenoura",
            vegetarian: "Migas de broa com feijão frade e batata assada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-02Z"),
        items: {
            diet: "Cavala cozida com batata cozida",
            fish: "Peixe-espada assado com arroz branco",
            meat: "Escalopes de porco com molho de natas e cogumelos e arroz de cenoura",
            soup: "Sopa de grão-de-bico e legumes",
            vegetarian: "Pataniscas de grão, brócolos e cenoura com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-03Z"),
        items: {
            diet: "Coxinhas de frango cozidas com macarrão",
            fish: "Solha assada com maionese e puré de batata",
            meat: "Bife da vazia grelhado com massa talharim",
            soup: "Sopa de couve-flor",
            vegetarian: "Caldeirada de tofu (batata, tofu e pimento)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-04Z"),
        items: {
            diet: "Filete de abrótea grelhado com batata e hortaliça cozida",
            fish: "Raia assada com molho verde e batata cozida",
            meat: "Espetada de aves no forno (peru e frango) com batata frita e alface",
            soup: "Sopa de lentilhas",
            vegetarian: "Jardineira de soja (batata, ervilhas e cenoura)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-07Z"),
        items: {
            diet: "Peru grelhado com massa talharim",
            fish: "Pescada estufada com batata e legumes",
            meat: "Bifinhos de frango com molho de cogumelos e arroz",
            soup: "Sopa de feijão catarino e penca",
            vegetarian: "Jardineira de soja",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-08Z"),
        items: {
            diet: "Carapau na chapa com batata cozida e legumes",
            fish: "Carapau assado de cebolada com batata areada",
            meat: "Rojões à portuguesa (porco, batata e pickles)",
            soup: "Sopa de couve-lombarda",
            vegetarian: "Bolinhos de grão-de-bico com arroz de ervilhas",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-09Z"),
        items: {
            diet: "Frango ao vapor com arroz branco e couve branca cozida",
            fish: "Maruca com ameijoa na frigideira acompanhada de arroz",
            meat: "Lasanha de carne de vaca com salada de alface e tomate",
            soup: "Sopa de nabiças e couve-flor",
            vegetarian: "Caril de seitan com arroz branco",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-10Z"),
        items: {
            diet: "Lombinhos de escamudo ao vapor com arroz",
            fish: "Filete de escamudo panado no forno com batata assada",
            meat: "Empadão de aves (frango e peru) com salada de alface e tomate",
            soup: "Creme de lentilhas",
            vegetarian:
                "Macarronada de legumes e lentilhas (lentilhas, ervilhas, cenoura e couve )",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-11Z"),
        items: {
            diet: "Bife de vaca grelhado com massa",
            fish: "Migas de arinca à gomes de sá",
            meat: "Strogonoff de novilho com arroz de passas",
            soup: "Sopa de brócolos e cenoura",
            vegetarian:
                "Salada exótica de tofu, ananás e legumes (cebola, cenoura e pimento) massa fusilli",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-12Z"),
        items: {
            diet: "Cavala grelhada com arroz e couve-de-bruxelas",
            fish: "Cavala assada com arroz branco e brócolos cozidos",
            meat: "Frango alourado com fusilli tricolor",
            soup: "Creme de grão-de-bico e curgete",
            vegetarian:
                "Chop suey vegetariano (rebentos de soja, cenoura, soja e cogumelos) com batata corada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-13Z"),
        items: {
            diet: "Bife de peru grelhado com massa fusilli",
            fish: "Filete de pangasius corado com arroz de penca",
            meat: "Alheira no forno com arroz de penca",
            soup: "Sopa de brócolos e cenoura",
            vegetarian:
                "Maçã salteada com soja e legumes, acompanhada de massa",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-14Z"),
        items: {
            diet: "Abrótea grelhada com batata cozida",
            fish: "Abrótea assada com arroz de milho",
            meat: "Perna de peru assada com ervas de Provença e arroz de hortaliça",
            soup: "Sopa de hortaliça",
            vegetarian: "Bife de tofu panado com batata assada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-15Z"),
        items: {
            diet: "Coxinhas de peru grelhadas com massa cotovelos",
            fish: "Carapau assado com molho de escabeche e salada camponesa (ervilhas, cenoura e batata)",
            meat: "Tranches de vaca estufados com puré de batata",
            soup: "Sopa de alho-francês e couve-flor",
            vegetarian: "Chili de feijão encarnado com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-16Z"),
        items: {
            diet: "Bacalhau fresco cozido com batata e hortaliça",
            fish: "Raia dourada com arroz de tomate",
            meat: "Tirinhas de porco salteadas com molho de natas e cogumelos e arroz branco",
            soup: "Sopa de feijão-verde e nabo",
            vegetarian: "Favas guisadas com cenoura e caril com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-17Z"),
        items: {
            diet: "Costeletas grelhadas com batata cozida e hortaliça",
            fish: "Tirinhas de pota polvilhadas com pão ralado no forno com arroz",
            meat: "Almôndegas de aves estufadas com macarronete",
            soup: "Creme de ervilhas",
            vegetarian: "Macarronada de soja gratinada com legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-18Z"),
        items: {
            diet: "Sardinhas grelhadas com batata cozida",
            fish: "Pescada cozida com todos (cenoura, batata, ovo)",
            meat: "Bife de vaca grelhado com arroz de pimentos",
            soup: "Sopa de couve-galega e feijão branco",
            vegetarian: "Falafel (bolinho de grão) com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-19Z"),
        items: {
            diet: "Frango ao vapor com massa penne e brócolos cozidos",
            fish: "Salmão grelhado com molho de manteiga e batata areada",
            meat: "Costeletas grelhadas com à salsicheiro e arroz branco",
            soup: "Creme de alface com ripinhas de couve-lombarda e cenoura",
            vegetarian: "Seitan assado com banana e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-20Z"),
        items: {
            diet: "Solha grelhada com arroz e legumes",
            fish: "Lombinhos de alabote assados com arroz de beterraba",
            meat: "Enroladinhos de frango com espinafres e arroz e batata areada",
            soup: "Sopa de lentilhas",
            vegetarian: "Cuscuz salteados com soja e legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-21Z"),
        items: {
            diet: "Fêveras de porco grelhadas com arroz",
            fish: "Pescada à João do grão (batata, grão e ovo)",
            meat: "Fêveras de porco estufadas com molho de tomate, arroz e alface",
            soup: "Creme de juliana de legumes",
            vegetarian: "Ensopado de favas com alho-francês com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-22Z"),
        items: {
            diet: "Corvina cozida com batata e couve-flor",
            fish: "Escamudo assado com arroz de pimentos",
            meat: "Roti de peru assado com batata e legumes salteados",
            soup: "Sopa de couve saboia e grão-de-bico",
            vegetarian: "Estufado de seitan com batata cozida",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-23Z"),
        items: {
            diet: "Carne de vaca cozida com arroz e repolho cozido",
            fish: "Lombinhos de solha no forno com molho de cenoura e arroz",
            meat: "Macarrão gratinado com carne de vaca picada com e macedónia",
            soup: "Sopa de abóbora e repolho",
            vegetarian: "Legumes à gomes de sá",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-24Z"),
        items: {
            diet: "Filete de alabote ao vapor com batata e molho de salsa",
            fish: "Paloco com natas (batata cubos, natas, paloco)",
            meat: "Omelete mista no forno (queijo, fiambre) com batata aos cubos salteada e salada de couve roxa",
            soup: "Sopa de couve portuguesa e feijão branco",
            vegetarian: "Almôndegas de grão com molho de tomate e tagliatelle",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-25Z"),
        items: {
            diet: "Peru grelhado com arroz de cenoura",
            fish: "Cavala grelhada com molho de limão e batata cozida",
            meat: "Frango à passarinho com esparguete de cenoura",
            soup: "Sopa de favas",
            vegetarian:
                "Beringela e pimentos grelhados com feijão preto e arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-26Z"),
        items: {
            diet: "Filete de pangasius ao vapor com batata cozida e brócolos",
            fish: "Maruca estufada com arroz de salsa",
            meat: "Carne de vaca estufada com ervilhas e arroz",
            soup: "Sopa de grelos",
            vegetarian:
                "Lentilhas estufadas à primaveril (ervilha e cenoura) com arroz",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-27Z"),
        items: {
            diet: "Perna de frango cozida com batata cozida",
            fish: "Pargo grelhado com arroz de salsa",
            meat: "Carne de porco à portuguesa (porco, pickles, batata) com salada mista",
            soup: "Sopa de feijão-verde",
            vegetarian: "Salteado de tofu e legumes com batata assada",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-28Z"),
        items: {
            diet: "Escalopes de porco estufados ao natural com arroz alegre",
            fish: "Massada de tamboril",
            meat: "Costeletas grelhadas à brasileira (feijão preto, farofa) com arroz e salada",
            soup: "Creme de alface",
            vegetarian: "Massa farfalle com seitan e brócolos",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-29Z"),
        items: {
            diet: "Solha ao vapor com batata cozida",
            fish: "Bacalhau fresco gratinado com crosta de broa ervas aromáticas e arroz de cenoura",
            meat: "Carne de vaca no forno com batata assada",
            soup: "Sopa de nabiças",
            vegetarian: "Tofu grelhado com ervas aromáticas e arroz de cenoura",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-11-30Z"),
        items: {
            diet: "Frango grelhado com arroz",
            fish: "Salada de feijão-frade com atum, ovo raspado e molho verde",
            meat: "Bife de frango na chapa com esparguete colorida (cenoura e ervilha)",
            soup: "Sopa camponesa (repolho, cenoura, feijão catarino)",
            vegetarian:
                "Legumada (feijão catarino, cogumelos, tomate) com massa fusilli",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-01Z"),
        items: {
            diet: "Carapau cozido com batata cozida e molho de salsa",
            fish: "Filete de paloco grelhado com batata cozida e molho verde",
            meat: "Entrecosto assado com arroz de beterraba",
            soup: "Sopa de macedónia",
            vegetarian: "Empadão de arroz com lentilhas e legumes",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-02Z"),
        items: {
            diet: "Peru estufado ao natural com massa cotovelos",
            fish: "Calamares no forno com arroz de beterraba",
            meat: "Almôndegas de vaca estufadas em molho de tomate e macarronete",
            soup: "Sopa de couve-galega com feijão vermelho",
            vegetarian: "Bolonhesa de soja",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-03Z"),
        items: {
            diet: "Lombinhos de pescada grelhados com arroz branco e feijão-verde",
            fish: "Lombinhos de pescada estufados com molho de cenoura e arroz",
            meat: "Peru assado com molho de cenoura e puré de batata",
            soup: "Sopa de nabos e alho-francês",
            vegetarian: "Lasanha de legumes (cenoura, couve branca e ervilha)",
        },
        restaurant: expect.anything(),
    },
    {
        date: new Date("2022-12-04Z"),
        items: {
            diet: "Lombinhos de porco grelhados com arroz",
            fish: "Carapau grelhado com arroz de coentros",
            meat: "Chanfana de borrego com batata cozida e legumes salteados",
            soup: "Sopa de ervilhas",
            vegetarian: "Feijão branco estufado com legumes e arroz de salsa",
        },
        restaurant: expect.anything(),
    },
];
