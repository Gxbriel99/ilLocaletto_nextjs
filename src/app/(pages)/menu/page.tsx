import type { Metadata } from "next";
import Image from "next/image";
import MenuContent from "./MenuContent";
import { info } from "../../data/info";

export const metadata: Metadata = {
  title: `Menu | ${info.businessName}`,
  description: `Menu di ${info.businessName}.`,
};

export default function MenuPage() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src="/menu_bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#EFE9D1]/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-3 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <MenuContent />
      </div>
    </section>
  );
}
