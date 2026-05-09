export default function Header() {

  
  return (
    <header
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-x-hidden relative"
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.0) 55%, rgba(0,0,0,0) 100%), url('/header_bg.webp') center/cover no-repeat",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-8 ps-0 md:ps-10 absolute top-0 left-0">
        {/* Logo */}
        <img
          src="/logo.webp"
          alt="Logo Il Localetto"
          className="h-[8rem] w-auto max-w-[420px] md:h-[15rem] md:max-w-[560px] lg:h-[18rem] lg:max-w-[680px]"
        />

        <h2 className="text-[#BE9859] text-5xl font-bold uppercase tracking-wider ms-16 border-b border-white pb-4">
          Pizza alla pala a Sutri
        </h2>

        <p className="text-white text-xl font-semibold max-w-3xl mb-6 text-center md:text-left ms-16 leading-relaxed">
          <span className="block mb-1">
            La nostra pizza alla pala a lunga lievitazione,<br className="hidden md:inline" />
            realizzata con ingredienti selezionati e tanta passione.
          </span>
          <span className="block">
            Vieni a scoprire tutta la bontà e l&apos;autenticità del gusto.
          </span>
        </p>
   
        <div className="flex flex-col sm:flex-row gap-4 ms-16 mb-12">
          <a
            href="tel:+393495621523"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#801917] hover:bg-[#BE9859] text-white font-bold rounded transition-colors text-lg uppercase shadow-md"
          >
            Prenota ora
          </a>
          <a
            href="https://wa.me/393495621523"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#BE9859] hover:bg-[#801917] text-[#801917] hover:text-white font-bold rounded transition-colors text-lg uppercase shadow-md border border-[#BE9859]"
          >
            Scrivici su Whatsapp
          </a>
        </div>
      </div>

    </header>
  );
}
