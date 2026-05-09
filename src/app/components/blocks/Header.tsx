import { ShoppingBag, UtensilsCrossed } from "lucide-react";

export default function Header() {
  return (
    <header
      className={`
        min-h-screen w-full flex flex-col items-center justify-center relative overflow-x-hidden
      `}
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.0) 55%, rgba(0,0,0,0) 100%), url('/header_bg.webp') center/cover no-repeat",
      }}
    >
      <div
        className={`
          w-full h-full flex flex-col justify-center items-center
          md:items-start gap-6
          absolute top-0 left-0
          pt-7 sm:pt-12
          px-2 sm:px-4 md:ps-10
        `}
        style={{
          minHeight: "100vh",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.webp"
          alt="Logo Il Localetto"
          className={`
            h-20 w-auto max-w-[90vw]
            sm:h-28 sm:max-w-[400px]
            md:h-44 md:max-w-[500px]
            lg:h-60 lg:max-w-[680px]
            mx-auto md:mx-0
            transition-all
          `}
        />

        <h2
          className={`
            text-white
            lg:text-[#BE9859]
            text-xl
            sm:text-2xl
            md:text-4xl
            lg:text-5xl
            font-bold uppercase tracking-wider
            border-b border-white pb-2 sm:pb-4
            w-full text-center md:text-left
            max-w-full sm:max-w-xl md:max-w-2xl
            mx-auto md:mx-0
            mt-0 md:mt-2
            drop-shadow-lg
            whitespace-pre-line
          `}
          style={{
            textShadow: "1px 2px 12px rgba(0,0,0,0.6)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          }}
        >
          Pizza alla pala a Sutri
        </h2>

        <p
          className={`
            text-white
            text-[1rem]
            sm:text-[1.08rem]
            md:text-[1.12rem]
            lg:text-[1.18rem]
            font-semibold
            mb-4 sm:mb-6
            text-center md:text-left
            leading-relaxed
            mx-auto md:mx-0
            max-w-[96vw] sm:max-w-xl md:max-w-[450px]
            px-2
          `}
        >
          <span
            className="
              block mb-1 break-words 
              text-[1.15rem] sm:text-[1.22rem] md:text-[1.25rem] lg:text-[1.32rem] 
              font-semibold 
              text-center md:text-left
            "
          >
            La nostra pizza alla pala a lunga lievitazione,
            <br className="hidden md:inline" />
            realizzata con ingredienti selezionati e tanta passione.
          </span>
          <span
            className="
              block break-words 
              text-[1.05rem] sm:text-[1.12rem] md:text-[1.18rem] lg:text-[1.25rem] 
              font-semibold 
              text-center md:text-left
            "
          >
            Vieni a scoprire tutta la bontà e l&apos;autenticità del gusto.
          </span>
        </p>

        {/* CTA BUTTONS - Responsive */}
        <div
          className={`
            flex flex-col
            sm:flex-row
            gap-3 sm:gap-4
            mb-6 sm:mb-12
            w-full
            items-center sm:items-stretch md:items-center
            justify-center md:justify-start
            max-w-[97vw] sm:max-w-xl md:max-w-[500px]
          `}
        >
          <a
            href="tel:+393495621523"
            className={`
              inline-flex items-center justify-center
              px-4 py-3 sm:px-7 sm:py-3
              bg-[#801917] hover:bg-[#BE9859] text-white
              font-bold rounded transition-colors
              text-base sm:text-[1.01rem] md:text-base uppercase shadow-md
              w-full sm:w-auto
              gap-2
              whitespace-nowrap
              sm:min-w-[180px] md:min-w-[190px] lg:min-w-[215px]
            `}
            style={{
              minWidth: 'unset'
            }}
          >
            <UtensilsCrossed className="h-5 w-5" />
            Prenota il tavolo
          </a>
          <a
            href="https://wa.me/393495621523"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center justify-center
              px-4 py-3 sm:px-7 sm:py-3
              bg-[#BE9859] hover:bg-[#801917]
              text-[#5D4037] hover:text-white
              font-bold rounded transition-colors
              text-base sm:text-[1.01rem] md:text-base uppercase shadow-md
              border border-[#BE9859]
              w-full sm:w-auto
              gap-2
              whitespace-nowrap
              sm:min-w-[180px] md:min-w-[190px] lg:min-w-[215px]
            `}
            style={{
              minWidth: 'unset'
            }}
          >
            <ShoppingBag className="h-5 w-5" />
            Ordina da asporto
          </a>
        </div>
      </div>
    </header>
  );
}
