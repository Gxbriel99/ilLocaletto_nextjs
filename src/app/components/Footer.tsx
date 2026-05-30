import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { info } from "../data/info";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Il nostro Menu", href: "/menu" },
  { label: "Galleria", href: "/galleria" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1000] border-t border-[#BE9859]/25 bg-[#181818] text-[#FEFEFE]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 xl:gap-x-16">
          {/* Colonna 1 — Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt={info.businessName}
                width={220}
                height={80}
                className="h-20 w-auto object-contain sm:h-24"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75 lg:mt-6 lg:text-base">
              {info.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-2xl text-[#BE9859]/90 md:justify-start">
              <Link
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#EFE9D1]"
              >
                <i className="fa fa-instagram" aria-hidden />
              </Link>
              <Link
                href={info.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#EFE9D1]"
              >
                <i className="fa fa-facebook" aria-hidden />
              </Link>
              <Link
                href={info.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tripadvisor"
                className="transition-colors hover:text-[#EFE9D1]"
              >
                <i className="fa fa-tripadvisor" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Colonna 2 — Navigazione */}
          <nav
            aria-label="Collegamenti footer"
            className="w-full text-center md:text-left"
          >
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859] md:mb-6">
              Navigazione
            </h2>
            <ul className="space-y-3">
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

          {/* Colonna 3 — Contatti e orari */}
          <div className="w-full text-center md:text-left">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859] md:mb-6">
              Contatti
            </h2>
            <ul className="space-y-3.5 text-sm text-white/80">
              <li>
                <Link
                  href={`tel:+39${info.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2.5 transition-colors hover:text-[#BE9859] md:justify-start"
                >
                  <Phone className="size-4 shrink-0 text-[#BE9859]" aria-hidden />
                  +39 {info.phone.trim()}
                </Link>
              </li>
              <li className="inline-flex items-start justify-center gap-2.5 md:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#BE9859]" aria-hidden />
                <span>{info.address}</span>
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859] md:mt-10 md:mb-5">
              Orari
            </h2>
            <ul className="mx-auto max-w-xs space-y-2.5 text-sm text-white/80 md:mx-0 md:max-w-none">
              <li className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-2.5">
                <span className="font-medium text-white/90">{info.openingDays}</span>
                <span className="shrink-0 text-right text-white/70">
                  {info.openingHoursMorning} · {info.openingHoursAfternoon}
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-2.5">
                <span className="font-medium text-white/90">Asporto</span>
                <span className="shrink-0 text-white/70">{info.takeawayHours}</span>
              </li>
              <li className="flex items-baseline justify-between gap-6">
                <span className="font-medium text-white/90">{info.restDay}</span>
                <span className="shrink-0 text-white/50">Chiuso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferiore */}
      <div className="border-t border-white/10 bg-[#121212]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-white/55 sm:flex-row sm:gap-6 sm:px-6 sm:text-left lg:gap-8 lg:px-10 lg:py-7 lg:text-sm xl:px-12">
          <p className="leading-relaxed">
            © {year} {info.businessName}. {info.ownerName} · P.IVA {info.piva}. Tutti i
            diritti riservati.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:gap-x-6">
            <Link
              href="/privacy-policy"
              className="font-medium text-[#BE9859] transition-colors hover:text-[#EFE9D1]"
            >
              Privacy Policy
            </Link>
            <span className="select-none text-white/25" aria-hidden>
              ·
            </span>
            <span>
              Design by{" "}
              <Link
                href={info.designLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#BE9859] transition-colors hover:text-[#EFE9D1]"
              >
                {info.design}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
