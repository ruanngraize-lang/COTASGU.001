/**
 * Configurações Centrais e Conteúdo Institucional - COTASGU
 * Cooperativa de Transportes
 */

// Configuração Centralizada de Contato
export const WHATSAPP_NUMBER = "5555999551366";
export const WHATSAPP_DISPLAY = "(55) 99955-1366";
export const WHATSAPP_INTERNATIONAL = "+55 (55) 99955-1366";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Conheci a COTASGU pelo site e gostaria de saber mais sobre a cooperativa.";

export const HERO_WHATSAPP_MESSAGE =
  "Olá! Vi o site da COTASGU e gostaria de saber como fazer parte da cooperativa.";

export const BENEFITS_WHATSAPP_MESSAGE =
  "Olá! Gostaria de informações sobre os benefícios e convênios para associados da COTASGU.";

export const INSTAGRAM_URL = "https://www.instagram.com/cotasgu/";
export const INSTAGRAM_HANDLE = "@cotasgu";

/**
 * Gera o link direto para conversa no WhatsApp com mensagem codificada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || DEFAULT_WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const INSTITUTIONAL_PILLARS = [
  {
    id: "valorizacao",
    title: "VALORIZAÇÃO",
    description:
      "Reconhecer a importância de quem trabalha diariamente para movimentar o Brasil.",
    tag: "Reconhecimento Real",
  },
  {
    id: "uniao",
    title: "UNIÃO",
    description:
      "Fortalecer a cooperação e a construção coletiva de oportunidades.",
    tag: "Força Coletiva",
  },
  {
    id: "oportunidades",
    title: "OPORTUNIDADES",
    description:
      "Incentivar o desenvolvimento e o crescimento dos profissionais do transporte.",
    tag: "Crescimento Mútuo",
  },
];

export const VALUES_LIST = [
  {
    name: "Transparência",
    description: "Atuamos com ética, clareza e prestação de contas permanente.",
    icon: "search",
  },
  {
    name: "Cooperação",
    description: "Juntos somos mais fortes. O trabalho conjunto supera qualquer desafio na estrada.",
    icon: "handshake",
  },
  {
    name: "Respeito",
    description: "Valorização da trajetória, dignidade e dedicação de cada trabalhador do transporte.",
    icon: "user-check",
  },
  {
    name: "Compromisso",
    description: "Atuação constante na defesa e representação dos direitos dos nossos associados.",
    icon: "shield",
  },
  {
    name: "Ética",
    description: "Integridade irrevogável em todas as parcerias, decisões e relações institucionais.",
    icon: "scale",
  },
];

export const BENEFITS_LIST = [
  {
    title: "Combustível",
    highlight: "Condições Especiais",
    description:
      "Condições especiais para abastecer e seguir sempre em frente com economia nas rotas.",
    icon: "fuel",
  },
  {
    title: "Economia Inteligente",
    highlight: "Redução de Custos",
    description:
      "Reduza custos e aumente seus ganhos com o poder de compra e negociação da cooperativa.",
    icon: "trending-up",
  },
  {
    title: "Convênios Exclusivos",
    highlight: "Para Você e Família",
    description:
      "Parcerias que oferecem descontos e vantagens exclusivas para o associado e seus dependentes.",
    icon: "users",
  },
  {
    title: "Segurança & Suporte",
    highlight: "Tranquilidade na Rota",
    description:
      "Suporte e orientação institucional para que você rode com segurança e foco no seu caminho.",
    icon: "shield-check",
  },
];
