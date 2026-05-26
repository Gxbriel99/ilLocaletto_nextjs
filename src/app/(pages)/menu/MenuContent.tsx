"use client";

import { useState } from "react";
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
  type MenuSection,
  viniBianchi,
  viniRossi,
} from "../../data/menu";
import MenuItemCard from "../../components/menu/MenuItemCard";

const PIZZA_DESCRIPTION =
  "Le nostre pizze alla pala: impasto a lunga lievitazione, croccante fuori e morbido dentro. Scegli il tuo gusto e lasciati conquistare dal profumo appena sfornato.";

const menuSections: MenuSection[] = [
  {
    id: "antipasti",
    label: "Antipasti",
    shortLabel: "Antipasti",
    description:
      "Per iniziare con gusto: bruschette, fritti e taglieri di salumi e formaggi locali.",
    fallbackImage: "/menu_bg.webp",
    items: Antipasti,
    kind: "items",
  },
  {
    id: "semplici",
    label: "Gusti semplici",
    shortLabel: "Semplici",
    description: PIZZA_DESCRIPTION,
    fallbackImage: "/menu_bg.webp",
    items: gustiSemplici,
    pricing: [
      "1 metro € 24,00",
      "½ metro € 12,00",
      "Small € 6,00",
      "Mozz. senza lattosio € 1,00",
    ],
    kind: "items",
  },
  {
    id: "ricchi",
    label: "Gusti ricchi",
    shortLabel: "Ricchi",
    description: PIZZA_DESCRIPTION,
    fallbackImage: "/menu_bg.webp",
    items: gustiRicchi,
    pricing: [
      "1 metro € 30,00",
      "½ metro € 15,00",
      "Small € 7,50",
      "Mozz. senza lattosio € 1,00",
    ],
    kind: "items",
  },
  {
    id: "speciali",
    label: "Gusti speciali",
    shortLabel: "Speciali",
    description: PIZZA_DESCRIPTION,
    fallbackImage: "/menu_bg.webp",
    items: gustiSpeciali,
    pricing: [
      "1 metro € 36,00",
      "½ metro € 18,00",
      "Small € 9,00",
      "Mozz. senza lattosio € 1,00",
    ],
    kind: "items",
  },
  {
    id: "estivi",
    label: "Gusti estivi",
    shortLabel: "Estivi",
    description: PIZZA_DESCRIPTION,
    fallbackImage: "/menu_bg.webp",
    items: gustiEstivi,
    pricing: [
      "1 metro € 30,00",
      "½ metro € 15,00",
      "Small € 7,50",
      "Mozz. senza lattosio € 1,00",
    ],
    kind: "items",
  },
  {
    id: "vini",
    label: "Vini",
    shortLabel: "Vini",
    description:
      "Rossi e bianchi selezionati, dalla bottiglia al calice per accompagnare ogni piatto.",
    fallbackImage: "/menu_bg.webp",
    groups: [
      { title: "Vini rossi", items: viniRossi },
      { title: "Vini bianchi", items: viniBianchi },
    ],
    kind: "groups",
  },
  {
    id: "bevande",
    label: "Bevande",
    shortLabel: "Bevande",
    description:
      "Tra un morso e un sorso: analcoliche fresche e birra alla spina.",
    fallbackImage: "/menu_bg.webp",
    groups: [
      { title: "Bevande analcoliche", items: bevandeAnalcoliche },
      { title: "Bevande alcoliche", items: bevandeAlcoliche },
    ],
    kind: "groups",
  },
  {
    id: "dolci",
    label: "Dolci",
    shortLabel: "Dolci",
    description:
      "Per finire in dolcezza: semifreddi, tiramisù e specialità della casa.",
    fallbackImage: "/menu_bg.webp",
    items: dolci,
    kind: "items",
  },
];

function ItemsList({
  items,
  compact = false,
}: {
  items: MenuItem[];
  compact?: boolean;
}) {
  const sorted = [...items].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <ul className={compact ? "flex flex-col gap-2" : "flex flex-col gap-4"}>
      {sorted.map((item) => (
        <li key={item.name}>
          <MenuItemCard item={item} compact={compact} />
        </li>
      ))}
    </ul>
  );
}

function InfoBlock() {
  return (
    <div className="space-y-4 rounded-2xl border-2 border-[#BE9859]/55 bg-[#EFE9D1] p-6 text-[#2B1B18] shadow-sm">
      <p className="text-base font-semibold leading-relaxed sm:text-lg">
        <strong className="font-extrabold text-[#801917]">
          Servizio torta (a persona):
        </strong>{" "}
        € 0,30
      </p>
      <p className="text-sm font-semibold italic leading-relaxed text-[#3A2723] sm:text-base">
        Non calcolato a fronte dell&apos;acquisto in loco di una bottiglia di
        prosecco.
      </p>
      <p className="text-base font-semibold leading-relaxed sm:text-lg">
        <strong className="font-extrabold text-[#801917]">Servizio:</strong> €
        1,50
      </p>
      <p className="border-t border-[#BE9859]/50 pt-4 text-sm font-semibold italic leading-relaxed text-[#3A2723] sm:text-base">
        * Prodotto fresco, conservato previo trattamento in abbattitore di
        temperatura.
      </p>
      <p className="text-sm font-semibold leading-relaxed text-[#3A2723] sm:text-base">
        Il prezzo dei prodotti riportato sul nostro sito web è indicativo e
        soggetto a variazioni.
      </p>
    </div>
  );
}

const PIZZA_SECTION_IDS = new Set(["semplici", "ricchi", "speciali", "estivi"]);

function PizzaMetroBlock({
  pricing,
}: {
  pricing: string[];
}) {
  return (
    <aside className="mb-5 w-full rounded-2xl border-2 border-[#BE9859]/55 bg-[#EFE9D1] shadow-lg sm:mb-6">
      <div className="flex flex-col gap-3 p-4 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#801917] text-white shadow-sm">
            <span className="text-sm font-black tracking-wide" aria-hidden>
              !
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#BE9859]">
              Importante
            </p>
            <h3 className="mt-0.5 text-lg font-extrabold uppercase tracking-wide text-[#801917] sm:text-xl">
              Pizza alla pala al metro
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[#5D4037] sm:text-base">
              Componete il metro scegliendo i gusti: il prezzo totale è la somma
              dei singoli gusti selezionati.
            </p>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-[#5D4037]/80 sm:text-sm">
              1 metro = 4 gusti · ¾ = 3 gusti · ½ = 2 gusti · Small = 1 gusto
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {pricing.map((line) => (
            <div
              key={line}
              className="rounded-xl border-2 border-[#BE9859] bg-white/70 px-3 py-3 text-center text-sm font-extrabold text-[#801917] shadow-sm"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SectionBody({ section }: { section: MenuSection }) {
  if (section.groups) {
    return (
      <div className="w-full space-y-10 pr-1">
        {section.groups.map((group) => (
          <div key={group.title} className="w-full">
            <h3 className="mb-4 border-b border-[#BE9859]/40 pb-2 text-lg font-bold text-[#801917] sm:text-xl">
              {group.title}
            </h3>
            <ItemsList
              items={group.items}
              compact={PIZZA_SECTION_IDS.has(section.id)}
            />
          </div>
        ))}
      </div>
    );
  }

  if (section.items) {
    return (
      <ItemsList
        items={section.items}
        compact={PIZZA_SECTION_IDS.has(section.id)}
      />
    );
  }

  return null;
}

export default function MenuContent() {
  const [activeId, setActiveId] = useState(menuSections[0].id);
  const section = menuSections.find((s) => s.id === activeId) ?? menuSections[0];

  return (
    <div className="w-full">
      <header className="mb-8 text-center sm:mb-10">
        <h1 className="text-3xl font-bold uppercase text-[#801917] sm:text-4xl lg:text-5xl">
          Il nostro menu
        </h1>
      </header>

      <nav
        aria-label="Categorie menu"
        className="-mx-4 mb-6 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0"
      >
        <div className="flex w-max min-w-full justify-start gap-2 sm:w-full sm:flex-wrap sm:justify-center sm:gap-3">
          {menuSections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded border-2 border-[#801917] bg-[#801917] px-4 py-2.5 text-sm font-extrabold tracking-wide text-[#EFE9D1] shadow transition sm:px-7 sm:py-3 sm:text-lg"
                    : "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded border-2 border-[#5D4037] bg-transparent px-4 py-2.5 text-sm font-extrabold tracking-wide text-[#5D4037] shadow transition hover:border-[#801917] hover:bg-[#801917] hover:text-[#EFE9D1] sm:px-7 sm:py-3 sm:text-lg"
                }
              >
                <span className="hidden md:inline">{s.label}</span>
                <span className="md:hidden">{s.shortLabel ?? s.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div
        key={section.id}
        className="w-full"
        role="tabpanel"
        aria-label={section.label}
      >
        <header className="w-full border-b-2 border-[#BE9859] pb-5 text-center sm:pb-6">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-[#801917] sm:text-3xl">
            {section.label}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5D4037] sm:text-lg">
            {section.description}
          </p>
        </header>

        <div className="w-full max-h-[min(58dvh,40rem)] overflow-y-auto overscroll-contain py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:max-h-[min(68vh,44rem)] sm:py-8">
          {section.pricing && PIZZA_SECTION_IDS.has(section.id) ? (
            <PizzaMetroBlock pricing={section.pricing} />
          ) : null}
          <SectionBody section={section} />
        </div>

        <div className="mt-6">
          <InfoBlock />
        </div>
      </div>
    </div>
  );
}
