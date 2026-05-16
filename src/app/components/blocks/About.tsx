import Image from "next/image";
import { Leaf, UtensilsCrossed, Armchair } from "lucide-react";

export default function About() {
  return (
    <section
      id="about-bg"
      className="relative h-screen w-full overflow-visible"
    >
    
    <div className="pointer-events-none absolute inset-x-0 -top-15 z-[10] h-[calc(100%+1rem)] w-full overflow-hidden">
      <Image
        src="/about-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_45%]"
        aria-hidden
        priority
      />
    </div>
     {/*
     <div
        className="absolute inset-0 z-10 grid h-full min-h-0 grid-cols-1 grid-rows-[auto_minmax(0,1fr)_minmax(34vh,auto)] px-3 py-3 sm:grid-rows-[auto_minmax(0,1fr)_minmax(36vh,auto)] sm:px-4 sm:py-4 md:grid-cols-2 md:grid-rows-[1fr_1fr] md:gap-x-8 md:px-10 md:py-5 lg:gap-x-14 lg:px-16 lg:py-6"
      >
       
        <div className="flex min-h-0 flex-col items-center justify-start px-0 py-4 sm:px-1 sm:py-5 md:col-start-1 md:row-span-2 md:row-start-1 md:h-full md:justify-center md:px-2 md:py-6">
          <div className="flex w-full max-w-xl flex-col items-start gap-3 sm:gap-4 md:gap-5">
            <h2 className="w-full text-start text-3xl font-bold text-[#801917] sm:text-4xl md:text-5xl">
              Chi siamo
            </h2>
            <h3 className="w-full text-start text-2xl font-bold whitespace-normal text-[#BE9859] sm:text-3xl md:text-4xl md:whitespace-nowrap">
              Il gusto autentico a Sutri
            </h3>
            <p className="text-shadow max-w-prose w-full text-start text-base leading-relaxed text-[#5D4037] sm:text-lg">
              Al Localetto troverai passione per le cose buone e locali: selezioniamo solo ingredienti di qualità e prepariamo le nostre pizze alla pala con cura artigianale, in un ambiente semplice e accogliente. <br />
              Prenota il tuo tavolo e vieni a scoprire il gusto autentico a Sutri.
            </p>
       

            <a
              href="#prenota"
              className="mt-1 inline-flex w-full items-center justify-center rounded border-2 border-[#5D4037] px-5 py-2.5 text-center text-base font-bold text-[#5D4037] transition-colors duration-150 shadow hover:bg-[#5D4037] hover:text-white active:bg-white active:text-[#5D4037] focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:ring-offset-2 sm:w-auto sm:px-6 sm:py-3 sm:text-lg"
            >
              Scopri di più
            </a>
          </div>
        </div>

        
        <div className="flex min-h-0 flex-col items-stretch justify-start px-3 pb-4 pt-1 sm:px-4 sm:pb-5 sm:pt-2 md:col-start-2 md:row-start-2 md:px-0 md:pb-8 md:pt-5">
          <ul className="flex w-full max-w-xl list-none flex-col gap-6 sm:gap-8 md:mx-auto md:gap-9 lg:gap-10">
            <li>
              <div className="flex gap-3 text-[#5D4037] sm:gap-4 md:gap-6">
                <div className="flex shrink-0 items-start pt-0.5 sm:pt-1">
                  <Leaf className="size-9 sm:size-10 md:size-12" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="flex min-w-0 flex-col gap-1 sm:gap-2">
                  <span className="text-lg font-bold leading-tight sm:text-xl md:text-2xl">
                    Materie prime
                  </span>
                  <p className="text-base leading-relaxed md:text-lg">
                    Selezioniamo ingredienti freschi e di stagione per offrirti
                    sapori genuini in ogni assaggio.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 text-[#5D4037] sm:gap-4 md:gap-6">
                <div className="flex shrink-0 items-start pt-0.5 sm:pt-1">
                  <UtensilsCrossed
                    className="size-9 sm:size-10 md:size-12"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <div className="flex min-w-0 flex-col gap-1 sm:gap-2">
                  <span className="text-lg font-bold leading-tight sm:text-xl md:text-2xl">
                    Preparazione
                  </span>
                  <p className="text-base leading-relaxed md:text-lg">
                    Impasti a lunga lievitazione e attenzione in cucina per una
                    pizza alla pala come piace a noi.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 text-[#5D4037] sm:gap-4 md:gap-6">
                <div className="flex shrink-0 items-start pt-0.5 sm:pt-1">
                  <Armchair className="size-9 sm:size-10 md:size-12" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="flex min-w-0 flex-col gap-1 sm:gap-2">
                  <span className="text-lg font-bold leading-tight sm:text-xl md:text-2xl">
                    Accoglienza
                  </span>
                  <p className="text-base leading-relaxed md:text-lg">
                    Un ambiente semplice e confortevole, ideale per una pausa
                    gustosa in compagnia.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

       
        <div className="flex min-h-0 w-full flex-col justify-end md:col-start-2 md:row-start-1 md:px-0 md:pb-1 md:pt-6 lg:pt-8">
          <div className="relative mx-auto h-[34vh] min-h-[30vh] w-full sm:h-[36vh] sm:min-h-[32vh] md:h-[38vh] md:max-h-[44vh]">
            <Image
              src="/paesaggio.webp"
              alt="Paesaggio intorno a Sutri"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
