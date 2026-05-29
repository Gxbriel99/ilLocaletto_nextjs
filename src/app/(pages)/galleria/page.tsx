import type { Metadata } from "next";
import Image from "next/image";

import { galleryImages } from "../../data/gallery";
import { info } from "../../data/info";

export const metadata: Metadata = {
  title: `Galleria | ${info.businessName}`,
  description: `Scopri le foto de ${info.businessName}: pizza alla pala, ambiente e specialità.`,
};

export default function GalleriaPage() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden">
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
        <div className="absolute inset-0 bg-[#232325]/25 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-3 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <header className="mb-10 text-center sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#BE9859]">
            Il nostro locale
          </p>
          <h1 className="mt-2 text-3xl font-bold uppercase text-[#801917] sm:text-4xl lg:text-5xl">
            Galleria
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5D4037] sm:text-lg">
            Uno sguardo su pizza, cucina e atmosfera. Le foto saranno presto
            disponibili: intanto trovi le anteprime qui sotto.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {galleryImages.map((item, index) => (
            <li
              key={item.path}
              className={index === 0 ? "sm:col-span-2 sm:row-span-1 lg:col-span-2" : undefined}
            >
              <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#BE9859]/40 bg-localetto-cream/35 shadow-lg backdrop-blur-md transition duration-300 hover:border-[#801917]/60 hover:shadow-xl sm:aspect-[16/10]">
                <div
                  className={`absolute inset-0 ${item.placeholderClass} transition duration-500 group-hover:scale-105`}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#232325]/85 via-[#232325]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#BE9859]">
                    Foto {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold leading-tight text-[#EFE9D1] sm:text-xl">
                    {item.title}
                  </h2>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
