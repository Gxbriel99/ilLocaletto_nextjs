import {
  Antipasti,
  bevandeAlcoliche,
  bevandeAnalcoliche,
  dolci,
  gustiEstivi,
  gustiRicchi,
  gustiSemplici,
  gustiSpeciali,
  type MenuItem,
  viniBianchi,
  viniRossi,
} from "../../data/menu";

export type SectionId =
  | "antipasti"
  | "semplici"
  | "ricchi"
  | "speciali"
  | "estivi"
  | "vini"
  | "bevande"
  | "dolci"
  | "info";

export type MenuSectionConfig = {
  id: SectionId;
  label: string;
  shortLabel: string;
  emoji: string;
  title: string;
  description: string;
  defaultImage: string;
  items?: MenuItem[];
  split?: { title: string; items: MenuItem[] }[];
  pricingLines?: string[];
  notice?: { title: string; body: string[] };
};

export const PIZZA_TAGLINE =
  "Le nostre pizze alla pala. Croccanti fuori e morbide dentro.";

export const MENU_SECTIONS: MenuSectionConfig[] = [
  {
    id: "antipasti",
    label: "Antipasti",
    shortLabel: "Antipasti",
    emoji: "🧀",
    title: "Antipasti",
    description:
      "Per iniziare in compagnia: fritti croccanti, taglieri di salumi e formaggi locali, e piccole specialità da condividere.",
    defaultImage: "/menu_bg.webp",
    items: Antipasti,
  },
  {
    id: "semplici",
    label: "Gusti semplici",
    shortLabel: "Semplici",
    emoji: "🍕",
    title: "Gusti semplici",
    description: PIZZA_TAGLINE,
    defaultImage: "/menu_bg.webp",
    items: gustiSemplici,
    pricingLines: [
      "1 metro € 24,00",
      "½ metro € 12,00",
      "Small € 6,00",
      "Mozzarella senza lattosio (1 gusto) € 1,00",
    ],
    notice: {
      title: "Pizza alla pala al metro",
      body: [
        "Il prezzo totale delle pizze al metro varia a seconda dei gusti. Componete il vostro metro e calcolate il costo totale, sommando il prezzo dei singoli gusti.",
        "1 metro – 4 gusti – consigliato per 4 persone",
        "¾ di metro – 3 gusti – consigliato per 3 persone",
        "½ metro – 2 gusti – consigliato per 2 persone",
        "Small – 1 gusto – consigliata per 1 persona",
      ],
    },
  },
  {
    id: "ricchi",
    label: "Gusti ricchi",
    shortLabel: "Ricchi",
    emoji: "🍕",
    title: "Gusti ricchi",
    description: PIZZA_TAGLINE,
    defaultImage: "/menu_bg.webp",
    items: gustiRicchi,
    pricingLines: [
      "1 metro € 30,00",
      "½ metro € 15,00",
      "Small € 7,50",
      "Mozzarella senza lattosio (1 gusto) € 1,00",
    ],
  },
  {
    id: "speciali",
    label: "Gusti speciali",
    shortLabel: "Speciali",
    emoji: "✨",
    title: "Gusti speciali",
    description: PIZZA_TAGLINE,
    defaultImage: "/menu_bg.webp",
    items: gustiSpeciali,
    pricingLines: [
      "1 metro € 36,00",
      "½ metro € 18,00",
      "Small € 9,00",
      "Mozzarella senza lattosio (1 gusto) € 1,00",
    ],
  },
  {
    id: "estivi",
    label: "Gusti estivi",
    shortLabel: "Estivi",
    emoji: "☀️",
    title: "Gusti estivi",
    description: PIZZA_TAGLINE,
    defaultImage: "/menu_bg.webp",
    items: gustiEstivi,
    pricingLines: [
      "1 metro € 30,00",
      "½ metro € 15,00",
      "Small € 7,50",
      "Mozzarella senza lattosio (1 gusto) € 1,00",
    ],
  },
  {
    id: "vini",
    label: "Vini",
    shortLabel: "Vini",
    emoji: "🍷",
    title: "La nostra selezione di vini",
    description:
      "Vini della casa e etichette del territorio laziale, per accompagnare pizza e antipasti con il giusto abbinamento.",
    defaultImage: "/menu_bg.webp",
    split: [
      { title: "Vini rossi", items: viniRossi },
      { title: "Vini bianchi", items: viniBianchi },
    ],
  },
  {
    id: "bevande",
    label: "Bevande",
    shortLabel: "Bevande",
    emoji: "🥤",
    title: "Tra un morso e un sorso",
    description:
      "Bibite, birra alla spina e analcoliche per accompagnare il pasto; liquori e amari per concludere.",
    defaultImage: "/menu_bg.webp",
    split: [
      { title: "Bevande analcoliche", items: bevandeAnalcoliche },
      { title: "Bevande alcoliche", items: bevandeAlcoliche },
    ],
  },
  {
    id: "dolci",
    label: "Dolci",
    shortLabel: "Dolci",
    emoji: "🍰",
    title: "Dolci",
    description:
      "Per finire in dolcezza: semifreddi, torte e specialità artigianali, anche da portare via.",
    defaultImage: "/menu_bg.webp",
    items: dolci,
  },
  {
    id: "info",
    label: "Info",
    shortLabel: "Info",
    emoji: "ℹ️",
    title: "Servizi e note",
    description:
      "Informazioni su servizio al tavolo, prodotti surgelati e prezzi indicativi del menu.",
    defaultImage: "/menu_bg.webp",
  },
];

export const CTA_PRIMARY =
  "inline-flex items-center justify-center whitespace-nowrap rounded px-5 py-2.5 text-sm font-semibold text-white shadow transition sm:px-7 sm:py-3 sm:text-base bg-[#801917] hover:bg-[#BE9859]";

export const CTA_SECONDARY =
  "inline-flex items-center justify-center whitespace-nowrap rounded px-5 py-2.5 text-sm font-semibold text-[#5D4037] shadow transition sm:px-7 sm:py-3 sm:text-base bg-[#BE9859] hover:bg-[#EFE9D1]";
