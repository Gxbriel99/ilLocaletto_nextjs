import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainLayout from "./components/layouts/MainLayout";
import WhatsAppButton from "./components/WhatsAppButton";
import "font-awesome/css/font-awesome.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Il Localetto Sutri",
  description: "Il Localetto Sutri",
};

function isWhatsAppVisible(): boolean {
  const hour = new Date().getHours();
  return hour >= 17 && hour <= 22;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainLayout>{children}</MainLayout>
        {isWhatsAppVisible() && <WhatsAppButton />}
      </body>
    </html>
  );
}
