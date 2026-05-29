import type { Metadata } from "next";
import Image from "next/image";

import { galleryImages } from "../../data/gallery";
import { info } from "../../data/info";

export const metadata: Metadata = {
  title: `Galleria | ${info.businessName}`,
  description: `Scopri le foto de ${info.businessName}: sala, atmosfera e pizza alla pala.`,
};

export default function GalleriaPage() {

  return (
    <section
      id="galleria"
      className="relative min-h-screen w-full overflow-x-hidden scroll-mt-24"
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src="/menu_bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-3 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <header className="mb-8 text-center sm:mb-10">
          <h1 className="text-3xl font-bold uppercase text-[#801917] sm:text-4xl lg:text-5xl">
            Galleria
          </h1>
        </header>

        <ul className="grid auto-rows-[42vw] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:auto-rows-[210px] lg:grid-cols-3 lg:gap-5">
          {galleryImages.map((item, index) => (
            <li
              key={item.path}
              className="first:col-span-2 first:row-span-2 [&:nth-child(4)]:row-span-2 [&:nth-child(7)]:lg:col-span-2 [&:nth-child(9)]:row-span-2"
            >
              <a
                href={`#foto-${index}`}
                aria-label={`Apri ${item.title}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#BE9859]/30 transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-linear-to-t before:from-[#232325]/90 before:via-[#232325]/10 before:to-transparent before:opacity-0 before:transition before:duration-300 before:content-[''] hover:shadow-2xl hover:ring-2 hover:ring-[#801917]/60 group-hover:before:opacity-100"
              >
                <Image
                  src={item.path}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-[#232325]/55 text-[#EFE9D1] opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.5" y2="16.5" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
                <div className="absolute inset-x-0 bottom-0 z-20 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                  <p className="text-base font-extrabold leading-tight text-[#EFE9D1] [text-shadow:0_1px_4px_rgba(0,0,0,0.85)] sm:text-lg">
                    {item.title}
                  </p>
                  <span className="mt-2 block h-0.5 w-10 rounded-full bg-[#BE9859]" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {galleryImages.map((item, index) => {
        const prev = `#foto-${(index - 1 + galleryImages.length) % galleryImages.length}`;
        const next = `#foto-${(index + 1) % galleryImages.length}`;

        return (
          <div
            key={`lightbox-${item.path}`}
            id={`foto-${index}`}
            className="fixed inset-0 z-50 hidden items-center justify-center bg-[#232325]/95 p-4 backdrop-blur-sm target:flex"
          >
            <a href="#galleria" aria-label="Chiudi" className="absolute inset-0" />

            <a
              href="#galleria"
              aria-label="Chiudi"
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#232325]/60 text-[#EFE9D1] ring-1 ring-[#BE9859]/40 transition hover:bg-[#801917] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </a>

            <a
              href={prev}
              aria-label="Foto precedente"
              className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#232325]/60 text-[#EFE9D1] ring-1 ring-[#BE9859]/40 transition hover:bg-[#801917] hover:text-white sm:left-6 sm:h-14 sm:w-14"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </a>

            <figure className="pointer-events-none relative z-10 flex h-[78vh] w-full max-w-5xl flex-col items-center justify-center">
              <span className="relative block h-full w-full">
                <Image
                  src={item.path}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="rounded-xl object-contain"
                />
              </span>
              <figcaption className="mt-4 flex items-center gap-3 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#BE9859]">
                  {String(index + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-[#EFE9D1] sm:text-base">
                  {item.title}
                </span>
              </figcaption>
            </figure>

            <a
              href={next}
              aria-label="Foto successiva"
              className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#232325]/60 text-[#EFE9D1] ring-1 ring-[#BE9859]/40 transition hover:bg-[#801917] hover:text-white sm:right-6 sm:h-14 sm:w-14"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        );
      })}
    </section>
  );
}
