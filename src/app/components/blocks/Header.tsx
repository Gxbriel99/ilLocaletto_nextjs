import { ShoppingBag, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header_bg.webp')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.58)_40%,rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.08)_100%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.85)_33%,rgba(0,0,0,0.5)_48%,rgba(0,0,0,0)_58%)]" />
      
      <div className="relative flex h-full flex-col items-center justify-center md:w-1/2">
        <div className="flex flex-col items-center justify-center text-white h-full py-12 md:ml-35 lg:ml-0">
          
          {/* Logo */}
          <div className="flex items-center justify-center w-full mb-10">
            <Image
              src="/logo.webp"
              alt="Il Localetto Sutri Logo"
              className="h-40 md:h-48 lg:h-56 w-auto object-contain drop-shadow-lg"
              width={500}
              height={150}
              priority={true}
              style={{ maxWidth: "90vw", height: "auto" }}
            />
          </div>

          {/* Sottotitolo */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center border-b-2 pb-3 px-4 mb-5"
            style={{
              textShadow: "2px 2px 6px rgba(0,0,0,0.45), 0px 1px 1px rgba(0,0,0,0.2)",
            }}
          >
            Pizza alla pala a Sutri
          </h2>

          {/* Testo */}
          <div className="flex flex-col items-center justify-center mb-6">
            <p
              className="text-xl md:text-2xl lg:text-2xl text-center max-w-2xl drop-shadow"
              style={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.38), 0px 1px 1px rgba(0,0,0,0.16)",
              }}
            >
              La nostra pizza alla pala a lunga lievitazione, realizzata con ingredienti selezionati e tanta passione. Vieni a scoprire tutta la bontà e l'autenticità del gusto.
            </p>
          </div>
     
          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:pl-16 lg:pl-0">
            <a
              href="#prenota"
              className="inline-flex items-center justify-center whitespace-nowrap text-white font-semibold px-7 py-3 rounded shadow transition text-xl mb-4 md:mb-0 bg-[#801917] hover:bg-[#BE9859]
                w-full md:w-auto md:min-w-[240px] md:max-w-[240px] md:px-6 md:py-2.5 md:text-lg
                lg:min-w-[260px] lg:max-w-[260px] lg:px-7 lg:py-3 lg:text-xl"
            >
              <UtensilsCrossed className="w-6 h-6 mr-3 flex-shrink-0" />
              <span className="whitespace-nowrap">Prenota tavolo</span>
            </a>
            <a
              href="#asporto"
              className="inline-flex items-center justify-center whitespace-nowrap font-semibold px-7 py-3 rounded shadow transition text-xl text-[#5D4037] bg-[#BE9859] hover:bg-[#EFE9D1]
                w-full md:w-auto md:min-w-[240px] md:max-w-[240px] md:px-6 md:py-2.5 md:text-lg
                lg:min-w-[260px] lg:max-w-[260px] lg:px-7 lg:py-3 lg:text-xl"
            >
              <ShoppingBag className="w-6 h-6 mr-3 flex-shrink-0" />
              <span className="whitespace-nowrap">Ordina da asporto</span>
            </a>
          </div>
     
        </div>
      </div>
    </header>
  );
}