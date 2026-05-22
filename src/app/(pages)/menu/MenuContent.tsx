"use client";

import { useState } from "react";
import { menuSections, type MenuItem, type MenuSection } from "../../data/menu";
import { info } from "../../data/info";
import MenuItemCard from "../../components/menu/MenuItemCard";

function ItemsList({
  items,
  fallbackImage,
  compact = false,
}: {
  items: MenuItem[];
  fallbackImage: string;
  compact?: boolean;
}) {
  const sorted = [...items].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <ul className={compact ? "flex flex-col gap-2" : "flex flex-col gap-4"}>
      {sorted.map((item) => (
        <li key={item.name}>
          <MenuItemCard
            item={item}
            fallbackImage={fallbackImage}
            compact={compact}
          />
        </li>
      ))}
    </ul>
  );
}

function InfoBlock() {
  return (
    <div className="space-y-4 rounded-xl border border-[#BE9859]/30 bg-[#EFE9D1]/60 p-6 text-[#232325]">
      <p>
        <strong className="text-[#801917]">Servizio torta (a persona):</strong> €
        0,30
      </p>
      <p className="text-sm italic text-[#5D4037]">
        Non calcolato a fronte dell&apos;acquisto in loco di una bottiglia di
        prosecco.
      </p>
      <p>
        <strong className="text-[#801917]">Servizio:</strong> € 1,50
      </p>
      <p className="border-t border-[#BE9859]/30 pt-4 text-sm italic text-[#5D4037]">
        * Prodotto fresco, conservato previo trattamento in abbattitore di
        temperatura.
      </p>
      <p className="text-sm text-[#888]">
        Il prezzo dei prodotti riportato sul nostro sito web è indicativo e
        soggetto a variazioni.
      </p>
    </div>
  );
}

const PIZZA_SECTION_IDS = new Set(["semplici", "ricchi", "speciali", "estivi"]);

function PizzaMetroBlock({
  title,
  body,
  pricing,
}: {
  title: string;
  body: string[];
  pricing: string[];
}) {
  return (
    <aside className="mb-5 w-full overflow-hidden rounded-2xl border-2 border-[#801917] shadow-lg sm:mb-6">
      <div className="bg-[#801917] px-4 py-4 text-center sm:px-6 sm:py-5">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE9859] sm:text-sm">
          Importante
        </p>
        <h3 className="mt-1 text-xl font-bold uppercase text-white sm:text-2xl lg:text-3xl">
          {title}
        </h3>
      </div>

      <div className="bg-[#EFE9D1] px-4 py-5 sm:px-6 sm:py-6">
        <p className="text-center text-sm font-semibold leading-relaxed text-[#5D4037] sm:text-base">
          {body[0]}
        </p>

        <div className="mt-5 grid w-full grid-cols-1 gap-2 min-[400px]:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {pricing.map((line) => (
            <div
              key={line}
              className="rounded-lg border-2 border-[#BE9859] bg-white px-3 py-3 text-center text-sm font-bold text-[#801917] shadow-sm sm:py-3.5 sm:text-base"
            >
              {line}
            </div>
          ))}
        </div>

        <ul className="mt-5 space-y-2 border-t-2 border-[#BE9859]/35 pt-5 sm:space-y-2.5">
          {body.slice(1).map((line) => (
            <li
              key={line}
              className="flex gap-2 text-sm leading-relaxed text-[#5D4037] sm:text-base"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#801917]"
                aria-hidden
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function SectionBody({ section }: { section: MenuSection }) {
  if (section.kind === "info") {
    return <InfoBlock />;
  }

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
              fallbackImage={section.fallbackImage}
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
        fallbackImage={section.fallbackImage}
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
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#BE9859]">
          {info.businessName}
        </p>
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
                    ? "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded px-4 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#BE9859] bg-[#801917] sm:px-7 sm:py-3 sm:text-base"
                    : "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded px-4 py-2.5 text-xs font-semibold text-[#5D4037] shadow transition hover:bg-[#EFE9D1] bg-[#BE9859] sm:px-7 sm:py-3 sm:text-base"
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

        <div className="w-full max-h-[min(58dvh,40rem)] overflow-y-auto overscroll-contain py-5 sm:max-h-[min(68vh,44rem)] sm:py-8">
          {section.notice && section.pricing ? (
            <PizzaMetroBlock
              title={section.notice.title}
              body={section.notice.body}
              pricing={section.pricing}
            />
          ) : section.pricing && PIZZA_SECTION_IDS.has(section.id) ? (
            <PizzaMetroBlock
              title="Pizza alla pala al metro"
              body={[
                "Componete il metro scegliendo i gusti: il prezzo totale è la somma dei singoli gusti selezionati.",
                "1 metro – 4 gusti · ¾ metro – 3 gusti · ½ metro – 2 gusti · Small – 1 gusto",
              ]}
              pricing={section.pricing}
            />
          ) : null}
          <SectionBody section={section} />
        </div>
      </div>
    </div>
  );
}
