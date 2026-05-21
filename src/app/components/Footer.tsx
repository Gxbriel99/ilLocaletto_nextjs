import Image from "next/image";
import Link from "next/link";
import {
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1000] border-t border-[#BE9859]/25 bg-[#181818] text-[#FEFEFE]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-12">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:flex lg:flex-row lg:gap-16 xl:gap-20">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left md:col-span-2 lg:col-span-auto lg:w-[30%] lg:max-w-sm lg:shrink-0 xl:w-[28%]">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt={info.businessName}
                width={220}
                height={80}
                className="h-20 w-auto object-contain sm:h-24"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75 lg:mt-6 lg:text-base lg:leading-relaxed">
              {info.tagline}
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
            className="text-center sm:text-left lg:w-[15%] lg:min-w-[9rem] lg:shrink-0 xl:min-w-[10rem]"
          >
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859] lg:mb-6">
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

          {/* Contatti e orari */}
          <div className="text-center sm:text-left md:col-span-2 lg:col-span-auto lg:min-w-0 lg:flex-1 lg:max-w-2xl">
            <div className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <div>
                <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859] lg:mb-6">
                  Contatti
                </h2>
                <ul className="space-y-3.5 text-sm text-white/80">
                <li>
                  <a
                    href={`tel:+39${info.phone}`}
                    className="inline-flex items-center justify-center gap-2.5 transition-colors hover:text-[#BE9859] sm:justify-start"
                  >
                    <Phone className="size-4 shrink-0 text-[#BE9859]" aria-hidden />
                    +39 {info.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${info.email}`}
                    className="inline-flex items-center justify-center gap-2.5 transition-colors hover:text-[#BE9859] sm:justify-start"
                  >
                    <Mail className="size-4 shrink-0 text-[#BE9859]" aria-hidden />
                    {info.email}
                  </a>
                </li>
                <li className="inline-flex items-start justify-center gap-2.5 sm:justify-start">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#BE9859]" aria-hidden />
                  <span className="text-left">{info.address}</span>
                </li>
              </ul>
              </div>

              <div className="border-t border-white/10 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 xl:pl-16">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BE9859] lg:mb-6">
                  Orari
                </h2>
                <ul className="space-y-2.5 text-sm text-white/80">
                  {info.weekSchedule.map(({ day, hours }) => (
                    <li
                      key={day}
                      className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-white/90">{day}</span>
                      <span
                        className={
                          hours === "Chiuso"
                            ? "shrink-0 text-white/50"
                            : "shrink-0 text-white/70"
                        }
                      >
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={`tel:+39${info.phone}`}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-[#801917] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow transition-colors hover:bg-[#BE9859] sm:w-auto lg:mt-10"
            >
              <UtensilsCrossed className="size-4" aria-hidden />
              Prenota tavolo
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferiore */}
      <div className="border-t border-white/10 bg-[#121212]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-white/55 sm:flex-row sm:gap-6 sm:px-6 sm:text-left lg:gap-8 lg:px-10 lg:py-7 lg:text-sm xl:px-12">
          <p className="leading-relaxed">
            © {year} {info.businessName}. Tutti i diritti riservati. · P.IVA {info.piva}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:gap-x-6">
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
              Design by{" "}
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
