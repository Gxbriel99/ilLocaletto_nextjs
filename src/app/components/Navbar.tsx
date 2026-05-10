"use client";

import { info } from "../data/info";
import { Phone } from "lucide-react";
import { useEffect, useId, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Il nostro Menu", href: "/menu" },
  { label: "Galleria", href: "/galleria" },
] as const;

const SOCIAL = [
  { href: info.instagram, label: "Instagram" },
  { href: info.facebook, label: "Facebook" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  const bar = "h-0.5 w-6 rounded-full bg-[#BE9859] transition duration-200 ease-out";
  return (
    <span className="flex h-10 w-10 flex-col items-center justify-center" aria-hidden>
      <span className={`${bar} ${open ? "translate-y-[5px] rotate-45" : "-translate-y-[7px]"}`} />
      <span className={`${bar} ${open ? "scale-x-0 opacity-0" : ""}`} />
      <span className={`${bar} ${open ? "-translate-y-[5px] -rotate-45" : "translate-y-[7px]"}`} />
    </span>
  );
}

function MobileMenu({ menuId, onClose }: { menuId: string; onClose: () => void }) {
  return (
    <>
      <button
        type="button"
        aria-label="Chiudi menu"
        className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/50 lg:hidden"
        onClick={onClose}
      />
      <nav
        id={menuId}
        aria-label="Menu principale mobile"
        className="nav-mobile-sheet absolute left-0 right-0 top-full z-50 max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto border-t border-black/40 bg-[#232325] px-6 py-6 text-white shadow-xl lg:hidden md:left-1/2 md:right-auto md:w-[min(36rem,calc(100vw-2rem))] md:-translate-x-1/2 md:rounded-b-xl md:border-x md:border-black/25 md:border-b md:px-10 md:py-8 md:shadow-2xl"
      >
        <ul className="flex flex-col gap-4 text-lg font-bold uppercase md:gap-5 md:text-xl">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="block rounded py-2 hover:text-[#BE9859]" onClick={onClose}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`tel:+39${info.phone}`}
          className="mt-8 flex items-center justify-center gap-2 rounded bg-[#801917] py-3 font-semibold hover:bg-[#BE9859]"
          onClick={onClose}
        >
          <Phone className="h-5 w-5" />
          Prenota ora
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[#BE9859]/35 pt-6 text-xs font-semibold uppercase tracking-wide text-[#BE9859]/90">
          {SOCIAL.map(({ href, label }, i) => (
            <span key={href} className="contents">
              {i > 0 ? <span className="select-none text-[#BE9859]/40" aria-hidden>·</span> : null}
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#BE9859]">
                {label}
              </a>
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}

export default function Navbar() {
  const menuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-[1000]">
      <nav
        className="relative w-full bg-[#181818] text-[#FEFEFE] shadow-[0_2px_12px_rgba(0,0,0,0.16)] backdrop-blur-md"
        style={{ WebkitBackdropFilter: "blur(8px)" }}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              className="-m-2 rounded-md p-2 hover:bg-[#222] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE9859]"
              onClick={() => setMobileOpen(o => !o)}
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
            <a href="/" className="flex items-center">
              <img src="/logo.webp" alt="Logo Il Localetto" className="ml-1 h-10 w-auto md:h-11" />
            </a>
          </div>

          <a href="/" className="hidden items-center lg:flex">
            <img src="/logo.webp" alt="Logo Il Localetto" className="h-14 w-auto" />
          </a>
          <div className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-8 uppercase">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="transition-colors hover:text-[#BE9859]">
                  <a href={href} className="text-lg font-semibold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`tel:+39${info.phone}`}
            className="hidden items-center gap-2 rounded bg-[#801917] px-5 py-2 text-base font-semibold uppercase tracking-[0.03em] text-white shadow transition-colors hover:bg-[#BE9859] lg:inline-flex"
          >
            <Phone className="h-5 w-5" />
            Prenota ora
          </a>
        </div>

        {mobileOpen ? <MobileMenu menuId={menuId} onClose={() => setMobileOpen(false)} /> : null}
      </nav>
    </header>
  );
}
