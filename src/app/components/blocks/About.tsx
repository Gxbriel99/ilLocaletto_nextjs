import Image from "next/image";
import Link from "next/link";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: "/icon1.png",
    title: "Materie prime",
    text: "Ingredienti freschi e di stagione per sapori genuini in ogni assaggio.",
  },
  {
    icon: "/icon2.png",
    title: "Preparazione",
    text: "Impasti a lunga lievitazione e pizza alla pala fatta con cura in cucina.",
  },
  {
    icon: "/icon3.png",
    title: "Accoglienza",
    text: "Un ambiente semplice e confortevole, ideale per una pausa in compagnia.",
  },
];

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="relative min-h-screen w-full overflow-hidden md:h-screen"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 z-[1] h-[calc(100%+5rem)] w-full overflow-hidden md:-top-15 md:h-[calc(100%+4rem)]">
        <Image
          src="/test.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1600px"
          quality={100}
          unoptimized
          className="object-cover object-[center_32%] md:object-[center_45%]"
          aria-hidden
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-8 pt-[18vh] sm:px-6 sm:pb-10 sm:pt-[9vh] md:px-8 md:pb-[40vh] md:pt-[10vh] lg:top-[15vh] lg:px-8 lg:pb-0 lg:pt-0">
        <div className="flex flex-col gap-16 sm:gap-20 md:grid md:grid-cols-2 md:items-start md:gap-x-10 md:gap-y-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <header className="mx-auto w-full max-w-xl space-y-3 text-center sm:space-y-4 md:mx-0 md:max-w-none md:text-left md:space-y-4 lg:mx-0 lg:max-w-xl lg:text-start lg:space-y-5">
            <h2 className="text-center text-2xl font-bold text-[#801917] text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-2xl md:text-start md:text-3xl lg:text-5xl">
              Chi siamo
            </h2>
            <h3 className="text-4xl font-bold uppercase leading-tight text-[#BE9859] text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-4xl md:text-3xl md:leading-snug lg:text-4xl lg:leading-tight lg:whitespace-nowrap">
              Il gusto autentico a Sutri
            </h3>
            <p className="mx-auto max-w-prose text-base leading-relaxed text-[#5D4037] text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-base md:mx-0 md:max-w-none lg:mx-0 lg:text-lg">
              Da noi la qualità è al primo posto: ingredienti selezionati, impasti a lunga
              lievitazione e pizza alla pala preparata con cura, in un ambiente semplice e
              accogliente.
              <br />
              Prenota il tuo tavolo e vieni a scoprire il gusto autentico di Il Localetto a
              Sutri.
            </p>
            <Link
              href="/menu"
              className="mx-auto mt-1 inline-flex w-full items-center justify-center rounded border-2 border-[#5D4037] px-5 py-3 text-lg font-bold text-[#5D4037] shadow transition-colors hover:bg-[#5D4037] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:ring-offset-2 sm:w-auto sm:px-6 sm:py-3 sm:text-lg md:mx-0 lg:mx-0"
            >
              Vedi il menu
            </Link>
          </header>

          <ul className="relative z-20 mx-auto list-none w-full max-w-md space-y-3 text-left text-[#5D4037] sm:max-w-lg sm:space-y-3.5 md:mx-0 md:max-w-none md:space-y-4 lg:max-w-lg lg:justify-self-end">
            {features.map(({ icon, title, text }) => (
              <li key={title}>
                <article className="flex items-start gap-4 sm:gap-5 md:gap-5">
                  <Image
                    src={icon}
                    alt=""
                    width={80}
                    height={80}
                    className="mt-0.5 size-14 shrink-0 sm:size-14 md:size-16 lg:size-20"
                    aria-hidden
                  />
                  <div className="min-w-0 space-y-0.5 sm:space-y-1">
                    <h3 className="text-base font-bold text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-base md:text-lg lg:text-xl">
                      {title}
                    </h3>
                    <p className="text-sm leading-snug text-shadow-[1px_1px_3px_rgba(255,255,255,0.9),0_0_12px_rgba(255,255,255,0.55)] sm:text-sm md:text-base lg:text-lg">
                      {text}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-6 h-[28vh] w-full max-w-7xl shrink-0 px-4 sm:mt-8 sm:h-[30vh] sm:px-6 md:absolute md:inset-x-0 md:bottom-[14vh] md:mx-0 md:mt-0 md:h-[34vh] md:max-w-none md:px-8 lg:bottom-0 lg:h-[58vh] lg:px-0">
        <Image
          src="/paesaggio.webp"
          alt="Paesaggio intorno a Sutri"
          fill
          sizes="(max-width: 768px) 100vw, 1600px"
          quality={100}
          unoptimized
          className="object-contain object-top md:object-[center_15%] lg:object-bottom"
        />
      </div>
    </section>
  );
}
