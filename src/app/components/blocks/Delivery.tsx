import Image from "next/image";
import { Phone, UtensilsCrossed } from "lucide-react";
import { info } from "../../data/info";

export default function Delivery() {
  return (
    <section id="asporto" className="relative z-[1] h-screen w-full overflow-hidden">
      <Image
        src="/delivery-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden
      />
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
        <div className="flex max-w-2xl flex-col items-center gap-6 text-center text-white sm:gap-8">
          <div className="space-y-4 sm:space-y-5">
            <h2
              className="text-3xl font-bold text-shadow-[2px_2px_6px_rgba(0,0,0,0.5),0_0_16px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl"
            >
              Delivery e asporto
            </h2>
            <p className="text-base leading-relaxed text-shadow-[1px_1px_4px_rgba(0,0,0,0.45)] sm:text-lg md:text-xl">
              Ordina la nostra pizza alla pala comodamente da casa: chiama per il delivery
              o consulta il menu e scegli cosa portare in tavola.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col items-stretch gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={`tel:${info.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black sm:text-lg"
            >
              <Phone className="size-5 shrink-0 sm:size-6" aria-hidden />
              Chiama ora
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center gap-3 rounded border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black sm:text-lg"
            >
              <UtensilsCrossed className="size-5 shrink-0 sm:size-6" aria-hidden />
              Vedi il menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
