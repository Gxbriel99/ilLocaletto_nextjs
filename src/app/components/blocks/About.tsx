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
      className="relative w-full overflow-hidden md:min-h-screen md:h-screen"
    >
      <div className="pointer-events-none absolute inset-0 z-[1] w-full overflow-hidden md:inset-x-0 md:-top-15 md:top-auto md:h-[calc(100%+4rem)]">
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
        <div className="absolute inset-0 hidden bg-localetto-cream/40 md:block" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-6 sm:pt-28 md:flex-1 md:px-8 md:pb-[40vh] md:pt-[10vh] lg:top-[15vh] lg:px-8 lg:pb-0 lg:pt-0">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:items-start md:gap-x-10 md:gap-y-8 lg:gap-8">
          <header className="flex flex-col gap-3 text-left sm:gap-4 md:max-w-xl md:gap-5">
            <p className="hidden text-xs font-bold uppercase tracking-[0.28em] text-[#BE9859] md:block">
              Chi siamo
            </p>
            <h2 className="text-lg font-bold uppercase text-[#801917] md:text-3xl md:leading-tight lg:text-5xl">
              <span className="md:hidden">Chi siamo</span>
              <span className="hidden md:inline">Il gusto autentico a Sutri</span>
            </h2>
            <h3 className="text-3xl font-bold uppercase leading-tight text-[#801917] sm:text-4xl md:hidden">
              Il gusto autentico a Sutri
            </h3>
            <p className="max-w-prose text-lg leading-relaxed text-[#5D4037] md:text-lg">
              Da noi la qualità è al primo posto: ingredienti selezionati, impasti a lunga
              lievitazione e pizza alla pala preparata con cura, in un ambiente semplice e
              accogliente. Vieni a scoprire Il Localetto a Sutri.
            </p>
            <Link
              href="/menu"
              className="inline-flex w-full items-center justify-center rounded border-2 border-[#5D4037] px-5 py-3 text-lg font-bold text-[#5D4037] shadow transition-colors hover:bg-[#5D4037] hover:text-white sm:w-auto md:text-base md:border-[#801917] md:bg-[#801917] md:text-[#EFE9D1] md:hover:border-[#BE9859] md:hover:bg-[#BE9859] lg:text-lg"
            >
              Vedi il menu
            </Link>
          </header>

          <ul className="list-none md:max-w-lg md:justify-self-end lg:max-w-lg">
            {features.map(({ icon, title, text }) => (
              <li
                key={title}
                className="border-b border-[#BE9859]/40 py-4 last:border-b-0 last:pb-0 md:py-5"
              >
                <article className="flex items-start gap-4 sm:gap-5 md:items-center md:gap-5">
                  <Image
                    src={icon}
                    alt=""
                    width={80}
                    height={80}
                    className="size-14 shrink-0 sm:size-16 md:size-14 lg:size-16"
                    aria-hidden
                  />
                  <div className="min-w-0 space-y-1">
                    <h3 className="text-lg font-extrabold text-[#801917] md:text-base lg:text-lg">
                      {title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#5D4037] md:text-base lg:text-lg">
                      {text}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-7xl md:absolute md:inset-x-0 md:bottom-[14vh] md:block md:mx-0 md:h-[34vh] md:max-w-none md:px-8 lg:bottom-0 lg:h-[58vh] lg:px-0">
        <Image
          src="/paesaggio.webp"
          alt="Paesaggio intorno a Sutri"
          fill
          sizes="(max-width: 768px) 100vw, 1600px"
          quality={100}
          unoptimized
          className="object-contain object-[center_15%] lg:object-bottom"
        />
      </div>
    </section>
  );
}
