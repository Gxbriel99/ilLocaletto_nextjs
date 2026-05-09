"use client";

import { info } from "../data/info";
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Il nostro Menu", href: "/menu" },
  { label: "Galleria", href: "/galleria" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Blocca lo scroll quando drawer è aperto
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (drawerOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [drawerOpen]);

  return (
    <nav
      className="sticky top-0 w-full shadow-md"
      style={{
        backgroundColor: "#181818",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.16)",
        zIndex: 999,
        color: "#FEFEFE",
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 h-[64px] md:h-[80px]">
        {/* Mobile: Hamburger + Logo */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Apri il menu"
            className="p-2 rounded-md hover:bg-[#222] transition"
            onClick={() => setDrawerOpen(true)}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#BE9859]">
              <path
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a href="/" className="flex items-center">
            <img src="/logo.webp" alt="Logo Il Localetto" className="h-10 w-auto ml-2" />
          </a>
        </div>
        {/* Desktop: Logo */}
        <a href="/" className="hidden md:flex items-center">
          <img src="/logo.webp" alt="Logo Il Localetto" className="h-14 w-auto" />
        </a>
        {/* Desktop: NAV */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex flex-row gap-8 text-[1.07rem] uppercase items-center">
            {NAV_LINKS.map(link => (
              <li key={link.href} className="hover:text-[#BE9859] transition-colors">
                <a href={link.href} className="text-lg font-semibold">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop: CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:+39${info.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded font-semibold uppercase text-base bg-[#801917] hover:bg-[#BE9859] transition-colors text-white shadow"
            style={{ letterSpacing: "0.03em" }}
          >
            <Phone className="w-5 h-5" />
            Prenota ora
          </a>
        </div>
      </div>
      {/* Drawer: MOBILE ONLY */}
      {drawerOpen && (
        <div
          className="fixed inset-0 flex md:hidden"
          style={{
            zIndex: 999,
          }}
        >
          {/* Clickable colored overlay */}
          <div
            className="fixed inset-0"
            style={{
              background: "#181818",
              zIndex: 1000,
              opacity: 1,
            }}
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer panel */}
          <aside
            className="fixed left-0 top-0 bottom-0 w-80 max-w-[92vw] h-full shadow-2xl flex flex-col py-8 px-7"
            style={{
              background: "#232325",
              zIndex: 1100,
              animation: "slideinDrawerStrong 0.23s cubic-bezier(0.7,0.1,0.3,1)",
              color: "#fff",
              boxShadow: "8px 0 32px 6px rgba(0,0,0,0.34)",
              position: "fixed",
            }}
          >
            {/* Close */}
            <button
              aria-label="Chiudi il menu"
              onClick={() => setDrawerOpen(false)}
              className="absolute right-4 top-3 text-4xl p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#BE9859] text-[#BE9859] hover:bg-[#191919] transition"
              style={{ lineHeight: '1', background: 'none' }}
            >
              ×
            </button>
            {/* Logo */}
            <a href="/" className="flex items-center mb-8 mt-3" onClick={() => setDrawerOpen(false)}>
              <img src="/logo.webp" alt="Logo Il Localetto" className="h-14 w-auto" />
            </a>
            {/* NAVIGATION */}
            <ul className="flex flex-col gap-6 text-lg mt-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-1 px-1 hover:text-[#BE9859] font-bold uppercase transition"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* CTA Mobile */}
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={`tel:+39${info.phone}`}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#801917] hover:bg-[#BE9859] text-white font-semibold transition-colors text-base"
              >
                <Phone className="w-5 h-5" />
                Prenota ora
              </a>
              <a
                href={`https://wa.me/${info.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#BE9859] hover:bg-[#801917] text-[#801917] hover:text-white font-semibold border border-[#BE9859] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Whatsapp
              </a>
            </div>
            {/* Social icons mobile */}
            <div className="flex gap-5 mt-auto mb-1 pt-10 justify-center items-center border-t border-[#BE9859]/30">
              <a
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#801917] hover:text-[#BE9859] transition-colors"
              >
                {/* Instagram icon could go here */}
              </a>
              <a
                href={info.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#801917] hover:text-[#BE9859] transition-colors"
              >
                {/* Facebook icon could go here */}
              </a>
              <a
                href={`https://wa.me/${info.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className="text-[#801917] hover:text-[#BE9859] transition-colors"
              >
                <MessageCircle className="w-7 h-7" />
              </a>
            </div>
          </aside>
          <style jsx>{`
            @keyframes slideinDrawer {
              from { transform: translateX(-100%); opacity:0; }
              to { transform: translateX(0); opacity:1; }
            }
          `}</style>
        </div>
      )}
    </nav>
  );
}