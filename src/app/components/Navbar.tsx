  export default function Navbar() {
    return (
      <nav>
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full bg-[#121212] text-[#FEFEFE] px-2">
              {/* MOBILE: hamburger Sx, logo centro */}
              <div className="flex w-full md:hidden items-center justify-between relative">
                {/* Hamburger menu a sinistra */}
                <div className="flex-none">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </label>
                </div>
                {/* Logo centrato assoluto sull’asse X */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
                  <img 
                    src="/logo.webp" 
                    alt="Logo Il Localetto" 
                    className="h-12 w-auto"
                  />
                </div>
                {/* Spacer per allineamento */}
                <div className="w-12"></div>
              </div>
              {/* TABLET+ desktop */}
              <div className="hidden md:flex flex-1 items-center justify-between w-full">
                {/* Logo a sinistra */}
                <div className="flex-none flex items-center mr-4">
                  <img 
                    src="/logo.webp" 
                    alt="Logo Il Localetto" 
                    className="h-12 w-auto"
                  />
                </div>
                {/* Lista nav centrale */}
                <div className="flex-1 flex justify-center">
                  <ul className="flex flex-row gap-8 text-[1.1rem] uppercase items-center">
                    <li className="hover:text-[#BE9859]">
                      <a href="#" className="text-lg font-semibold">Home</a>
                    </li>
                    <li className="hover:text-[#BE9859]">
                      <a href="#" className="text-lg font-semibold">Il nostro Menu</a>
                    </li>
                    <li className="hover:text-[#BE9859]">
                      <a href="#" className="text-lg font-semibold">Galleria</a>
                    </li>
                  </ul>
                </div>
                {/* Button sulla end */}
                <div className="flex-none ml-4">
                  <button className="btn btn-primary text-white bg-[#801917] border-none hover:bg-[#BE9859] font-semibold uppercase">
                    Prenota ora
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            
            <div className="relative bg-base-200 min-h-full w-80 p-4">
              {/* Pulsante X per chiudere */}
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="absolute top-2 right-4 cursor-pointer btn btn-ghost btn-sm text-2xl"
                style={{ minHeight: 'unset', height: 'unset', width: 'unset', padding: 0 }}
              >
                ×
              </label>
              <ul className="menu mt-8 text-lg">
                <li>
                  <a href="#" className="font-semibold uppercase">Home</a>
                </li>
                <li>
                  <a href="#" className="font-semibold uppercase">Il nostro Menu</a>
                </li>
                <li>
                  <a href="#" className="font-semibold uppercase">Galleria</a>
                </li>
              </ul>
              {/* CTA button solo mobile / offcanvas */}
              <div className="mt-6 md:hidden">
                <button className="btn btn-primary w-full text-white bg-[#801917] border-none hover:bg-[#BE9859] font-semibold uppercase">
                  Prenota ora
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
