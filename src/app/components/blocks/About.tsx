import Image from "next/image";
import { Leaf, UtensilsCrossed, Armchair, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: Leaf,
    title: "Materie prime",
    text: "Ingredienti freschi e di stagione per sapori genuini in ogni assaggio.",
  },
  {
    icon: UtensilsCrossed,
    title: "Preparazione",
    text: "Impasti a lunga lievitazione e pizza alla pala fatta con cura in cucina.",
  },
  {
    icon: Armchair,
    title: "Accoglienza",
    text: "Un ambiente semplice e confortevole, ideale per una pausa in compagnia.",
  },
];

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="relative isolate z-[900] h-screen w-full overflow-visible"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-15 z-[1] h-[calc(100%+4rem)] w-full overflow-hidden">
        <Image
          src="/about-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-[40vh] top-[8vh] sm:px-6 sm:pb-[43vh] sm:top-[9vh] md:pb-[46vh] md:top-[10vh] lg:top-[15vh] lg:px-8 lg:pb-0">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
          <header className="mx-auto w-full max-w-xl space-y-3 text-center sm:space-y-4 lg:mx-0 lg:text-start lg:space-y-5">
            <h2 className="text-2xl font-bold text-[#801917] text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-3xl lg:text-5xl">
              Chi siamo
            </h2>
            <h3 className="text-xl font-bold text-[#BE9859] text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-2xl lg:text-4xl lg:whitespace-nowrap">
              Il gusto autentico a Sutri
            </h3>
            <p className="mx-auto max-w-prose text-sm leading-relaxed text-[#5D4037] text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-base lg:mx-0 lg:text-lg">
              Da noi la qualità è al primo posto: ingredienti selezionati, impasti a lunga
              lievitazione e pizza alla pala preparata con cura, in un ambiente semplice e
              accogliente.
              <br />
              Prenota il tuo tavolo e vieni a scoprire il gusto autentico di Il Localetto a
              Sutri.
            </p>
            <a
              href="#prenota"
              className="mx-auto inline-flex w-full items-center justify-center rounded border-2 border-[#5D4037] px-5 py-2.5 text-base font-bold text-[#5D4037] shadow transition-colors hover:bg-[#5D4037] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:ring-offset-2 sm:w-auto sm:px-6 sm:py-3 sm:text-lg lg:mx-0"
            >
              Scopri di più
            </a>
          </header>

          <ul className="list-none w-full max-w-md space-y-3 text-left text-[#5D4037] sm:max-w-lg sm:space-y-3.5 md:max-w-xl md:space-y-4 lg:max-w-lg lg:justify-self-end">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <article className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
                  <Icon className="mt-0.5 size-7 shrink-0 sm:size-8 md:size-8 lg:size-10" strokeWidth={1.5} aria-hidden />
                  <div className="min-w-0 space-y-0.5 sm:space-y-1">
                    <h3 className="text-sm font-bold text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-base md:text-lg lg:text-xl">
                      {title}
                    </h3>
                    <p className="text-xs leading-snug text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-sm md:text-base lg:text-lg">
                      {text}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[6vh] z-10 h-[34vh] sm:bottom-[7vh] sm:h-[36vh] md:bottom-[8vh] md:h-[38vh] lg:bottom-0 lg:h-[58vh]">
        <Image
          src="/paesaggio.webp"
          alt="Paesaggio intorno a Sutri"
          fill
          sizes="100vw"
          className="object-contain object-center lg:object-bottom"
        />
      </div>
    </section>
  );
}
