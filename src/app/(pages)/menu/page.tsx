import type { Metadata } from "next";
import { info } from "../../data/info";

export const metadata: Metadata = {
  title: `Menu | ${info.businessName}`,
  description: `Menu di ${info.businessName}.`,
};

export default function MenuPage() {
  return (
    <div className="min-h-[50vh] bg-[#EFE9D1] px-4 pt-24 pb-16 sm:pt-28" />
  );
}
