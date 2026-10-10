"use client";

import { useState } from "react";
import {
  menuSections,
  type MenuItem,
  type MenuSection,
} from "../../data/menu";
import MenuItemCard from "../../components/menu/MenuItemCard";

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
    <div className="space-y-4 rounded-2xl border-2 border-[#BE9859]/55 bg-localetto-cream/35 p-6 text-[#2B1B18] shadow-sm backdrop-blur-md">
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

const PIZZA_SECTION_IDS = new Set(["semplici", "ricchi", "speciali", "estivi", "invernali"]);

function isMozzarellaSupplement(line: string) {
  return /mozz|lattosio/i.test(line);
}

function PizzaMetroBlock({
  pricing,
}: {
  pricing: string[];
}) {
  const metroLines = pricing.filter((line) => !isMozzarellaSupplement(line));
  const supplement = pricing.find(isMozzarellaSupplement);

  return (
    <aside className="mb-5 w-full rounded-2xl border-2 border-[#BE9859]/40 bg-localetto-cream/35 shadow-lg backdrop-blur-md sm:mb-6">
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

        {metroLines.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-2 min-[420px]:[grid-template-columns:repeat(auto-fit,minmax(8rem,1fr))]">
            {metroLines.map((line) => (
              <div
                key={line}
                className="min-h-12 rounded-xl border-2 border-[#BE9859] bg-white/70 px-3 py-3 text-center text-sm font-extrabold leading-snug text-[#801917] shadow-sm sm:text-base"
              >
                {line}
              </div>
            ))}
          </div>
        ) : null}

        {supplement ? (
          <p className="border-t border-[#BE9859]/35 pt-3 text-center text-sm font-medium leading-relaxed text-[#5D4037] sm:text-base">
            {supplement}
          </p>
        ) : null}
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

        <div className="w-full overflow-visible py-5 sm:max-h-[min(68vh,44rem)] sm:overflow-y-auto sm:overscroll-contain sm:py-8 sm:[scrollbar-width:none] sm:[-ms-overflow-style:none] sm:[&::-webkit-scrollbar]:hidden">
          {section.pricing && PIZZA_SECTION_IDS.has(section.id) ? (
            <PizzaMetroBlock pricing={section.pricing} />
          ) : null}
          <SectionBody section={section} />
        </div>

        {section.id === "dolci" ? (
          <div className="mt-6">
            <InfoBlock />
          </div>
        ) : null}
      </div>
    </div>
  );
}
