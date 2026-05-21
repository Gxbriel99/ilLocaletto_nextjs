import Image from "next/image";
import Link from "next/link";
import {
  Clock,

  Mail,
  MapPin,
  Phone,
  UtensilsCrossed,
} from "lucide-react";
import { info } from "../data/info";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Il nostro Menu", href: "/menu" },
  { label: "Galleria", href: "/galleria" },
  { label: "Chi siamo", href: "/#chi-siamo" },
] as const;

const ORARI = [
  { giorni: "Mar – Dom", ore: "18:30 – 23:00" },
  { giorni: "Lunedì", ore: "Chiuso" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1000] border-t border-[#BE9859]/25 bg-[#181818] text-[#FEFEFE]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:col-span-2 sm:items-start sm:text-left lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt="Il Localetto Sutri"
                width={220}
                height={80}
                className="h-20 w-auto object-contain sm:h-24"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Pizza alla pala a lunga lievitazione a Sutri. Ingredienti selezionati,
              gusto autentico e accoglienza genuina.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-[#BE9859]/90 sm:justify-start">
              <a
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#EFE9D1]"
              >
                Instagram
              </a>
              <span className="select-none text-[#BE9859]/40" aria-hidden>
                ·
              </span>
              <a
                href={info.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#EFE9D1]"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Navigazione */}
          <nav
            aria-label="Collegamenti footer"
            className="text-center sm:text-left lg:col-span-2 lg:col-start-6"
          >
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859]">
              Navigazione
            </h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 transition-colors hover:text-[#BE9859]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contatti */}
          <div className="text-center sm:text-left lg:col-span-3">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859]">
              Contatti
            </h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`tel:+39${info.phone}`}
                  className="inline-flex items-center justify-center gap-2 transition-colors hover:text-[#BE9859] sm:justify-start"
                >
                  <Phone className="size-4 shrink-0 text-[#BE9859]" aria-hidden />
                  +39 {info.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${info.email}`}
                  className="inline-flex items-center justify-center gap-2 transition-colors hover:text-[#BE9859] sm:justify-start"
                >
                  <Mail className="size-4 shrink-0 text-[#BE9859]" aria-hidden />
                  {info.email}
                </a>
              </li>
              <li className="inline-flex items-start justify-center gap-2 sm:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#BE9859]" aria-hidden />
                <span>{info.address}</span>
              </li>
            </ul>
            <a
              href={`tel:+39${info.phone}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-[#801917] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow transition-colors hover:bg-[#BE9859] sm:w-auto"
            >
              <UtensilsCrossed className="size-4" aria-hidden />
              Prenota tavolo
            </a>
          </div>

          {/* Orari */}
          <div className="text-center sm:text-left lg:col-span-3">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859]">
              Orari
            </h2>
            <ul className="space-y-3">
              {ORARI.map(({ giorni, ore }) => (
                <li
                  key={giorni}
                  className="flex flex-col gap-0.5 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="inline-flex items-center justify-center gap-2 font-medium text-white/90 sm:justify-start">
                    <Clock className="size-4 shrink-0 text-[#BE9859]" aria-hidden />
                    {giorni}
                  </span>
                  <span className="text-white/70">{ore}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferiore */}
      <div className="border-t border-white/10 bg-[#121212]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/55 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {year} Il Localetto Sutri. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#BE9859]"
            >
              Privacy Policy
            </Link>
            <span className="hidden text-white/25 sm:inline" aria-hidden>
              ·
            </span>
            <span>
              Sito web di{" "}
              <a
                href={info.designLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#BE9859] transition-colors hover:text-[#EFE9D1]"
              >
                {info.design}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
