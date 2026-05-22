import Image from "next/image";
import { Phone, UtensilsCrossed } from "lucide-react";
import { info } from "../../data/info";

export default function Delivery() {
  return (
    <section
      id="asporto"
      className="relative z-[1] -mt-[10vh] h-screen w-full overflow-hidden sm:-mt-[12vh] md:-mt-[14vh]"
    >
      <Image
        src="/delivery_bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden
      />
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-8">
        <div className="flex max-w-4xl flex-col items-center gap-8 text-center text-white sm:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <h2
              className="text-4xl font-bold text-shadow-[2px_2px_6px_rgba(0,0,0,0.5),0_0_16px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              ASPORTO - IL LOCALETTO 
            </h2>
            <p className="text-lg leading-relaxed text-shadow-[1px_1px_4px_rgba(0,0,0,0.45)] sm:text-xl md:text-2xl lg:text-3xl">
              Gusta la tradizione autentica con il nostro servizio di asporto. <br />
              Ordina ritira ora!
            </p>
          </div>

          <div className="flex w-full max-w-xl flex-col items-stretch gap-5 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={`tel:${info.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black sm:text-xl"
            >
              <Phone className="size-6 shrink-0 sm:size-7" aria-hidden />
              Chiama ora
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center gap-3 rounded border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black sm:text-xl"
            >
              <UtensilsCrossed className="size-6 shrink-0 sm:size-7" aria-hidden />
              Vedi il menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
