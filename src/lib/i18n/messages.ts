import type { Messages } from ".";

export const messages = {
    dinner: {
        en: "Dinner",
        pt: "Jantar",
    },
    github: "Github",
    language: {
        en: "English",
        pt: "Português",
    },
    mealTypes: {
        soup: {
            en: "Soup",
            pt: "Sopa",
        },
        meat: {
            en: "Meat",
            pt: "Carne",
        },
        fish: {
            en: "Fish",
            pt: "Peixe",
        },
        diet: {
            en: "Diet",
            pt: "Dieta",
        },
        vegetarian: {
            en: "Vegetarian",
            pt: "Vegetariano",
        },
        salad: {
            en: "Salad",
            pt: "Salada",
        },
        other: {
            en: "Other",
            pt: "Outro",
        },
    },
    menus: {
        en: "Menus",
        pt: "Ementas",
    },
    notFound: {
        en: "Menu not found",
        pt: "Ementa não encontrada",
    },
    other: {
        en: "Other",
        pt: "Outro",
    },
    restaurant: {
        en: "Restaurant",
        pt: "Restaurante",
    },
    restaurants: {
        en: "Restaurants",
        pt: "Restaurantes",
    },
    restaurantList: {
        en: "List of restaurants",
        pt: "Lista de restaurantes",
    },
    selectRestaurant: {
        en: "Select restaurant",
        pt: "Seleciona um restaurante",
    },
    threeLetter: {
        en: "eng",
        pt: "por",
    },
    unknown: {
        en: "Unknown",
        pt: "Desconhecido",
    },
    httpCode: {
        100: {
            en: "Continue",
            pt: "Continuar",
        },
        101: {
            en: "Switching protocols",
            pt: "A trocar de protocolos",
        },
        102: {
            en: "Processing",
            pt: "A processar",
        },
        103: {
            en: "Early hints",
            pt: "Dicas antecipadas",
        },
        200: "Ok",
        201: {
            en: "Created",
            pt: "Criado",
        },
        202: {
            en: "Accepted",
            pt: "Aceite",
        },
        203: {
            en: "Non-authoritative information",
            pt: "Informação não autoritária",
        },
        204: {
            en: "No content",
            pt: "Sem conteúdo",
        },
        205: {
            en: "Reset content",
            pt: "Restablecer conteúdo",
        },
        206: {
            en: "Partial content",
            pt: "Conteúdo parcial",
        },
        207: {
            en: "Multi-status",
            pt: "Multi estado",
        },
        208: {
            en: "Already reported",
            pt: "Já reportado",
        },
        226: {
            en: "IM used",
            pt: "IM usadas",
        },
        300: {
            en: "Multiple choices",
            pt: "Várias escolhas",
        },
        301: {
            en: "Moved permanently",
            pt: "Mudou permanentemente",
        },
        302: {
            en: "Found",
            pt: "Encontrado",
        },
        303: {
            en: "See other",
            pt: "Ver outro",
        },
        304: {
            en: "Not modified",
            pt: "Não modificado",
        },
        307: {
            en: "Temporary redirect",
            pt: "Redirecionamento temporário",
        },
        308: {
            en: "Permanent redirect",
            pt: "Redirecionamento permanente",
        },
        400: {
            en: "Bad request",
            pt: "Mau pedido",
        },
        401: {
            en: "Unauthorized",
            pt: "Não autorizado",
        },
        402: {
            en: "Payment required",
            pt: "Pagamento necessário",
        },
        403: {
            en: "Forbidden",
            pt: "Proibido",
        },
        404: {
            en: "Not found",
            pt: "Não encontrado",
        },
        405: {
            en: "Method not allowed",
            pt: "Método não permitido",
        },
        406: {
            en: "Not acceptable",
            pt: "Inaceitável",
        },
        407: {
            en: "Proxy authentication required",
            pt: "Autenticação por proxy necessária",
        },
        408: {
            en: "Request timeout",
            pt: "Tempo de pedido esgotado",
        },
        409: {
            en: "Conflict",
            pt: "Conflito",
        },
        410: {
            en: "Gone",
            pt: "Desaparecido",
        },
        411: {
            en: "Length required",
            pt: "Tamanho necessário",
        },
        412: {
            en: "Precondition failed",
            pt: "Pré condição falhou",
        },
        413: {
            en: "Payload too large",
            pt: "Carga demasiado grande",
        },
        414: {
            en: "URI too long",
            pt: "URI demasiado longo",
        },
        415: {
            en: "Unsupported media type",
            pt: "Tipo de mídia não suportado",
        },
        416: {
            en: "Range mot satisfiable",
            pt: "Alcance não satisfazível",
        },
        417: {
            en: "Expectation failed",
            pt: "Expectativa falhou",
        },
        418: {
            en: "I'm a teapot",
            pt: "Sou um bule de chá",
        },
        421: {
            en: "Misdirected request",
            pt: "Pedido mal direcionado",
        },
        422: {
            en: "Unprocessable content",
            pt: "Conteúdo não processável",
        },
        423: {
            en: "Locked",
            pt: "Trancado",
        },
        424: {
            en: "Failed dependency",
            pt: "Dependência falhada",
        },
        425: {
            en: "Too early",
            pt: "Demasiado antecipado",
        },
        426: {
            en: "Upgrade required",
            pt: "Melhoramento necessário",
        },
        428: {
            en: "Precondition required",
            pt: "Pré condição necessária",
        },
        429: {
            en: "Too many requests",
            pt: "Demasiados pedidos",
        },
        431: {
            en: "Request header fields too large",
            pt: "Campos do cabeçalho do pedido demasiado grandes",
        },
        451: {
            en: "Unavailable for legal reasons",
            pt: "Não disponível por razões legais",
        },
        500: {
            en: "Internal server error",
            pt: "Erro interno do servidor",
        },
        501: {
            en: "Not implemented",
            pt: "Não implementado",
        },
        502: {
            en: "Bad gateway",
            pt: "Má porta de acesso",
        },
        503: {
            en: "Service unavailable",
            pt: "Serviço não disponível",
        },
        504: {
            en: "Gateway timeout",
            pt: "Tempo de porta de acesso esgotado",
        },
        505: {
            en: "HTTP version not supported",
            pt: "Versão de HTTP não suportada",
        },
        506: {
            en: "Variant also negotiates",
            pt: "Variante também negocia",
        },
        507: {
            en: "Insufficient storage",
            pt: "Armazenamento insuficiente",
        },
        508: {
            en: "Loop detected",
            pt: "Laço detetado",
        },
        510: {
            en: "Not extended",
            pt: "Não estendido",
        },
        511: {
            en: "Network authentication required",
            pt: "Autenticação por rede necessária",
        },
    },
} as const satisfies Messages;
