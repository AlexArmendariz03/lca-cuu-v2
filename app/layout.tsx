import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ScrollReveal from "@/app/components/ScrollReveal";

export const metadata: Metadata = {
  title: "La Casa del Alfarero Chihuahua",
  description: "Iglesia de compañerismo Cristiano",
  icons: "/logoBlanco.ico",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-black focus:text-blue-950 focus:shadow-xl"
        >
          Saltar al contenido
        </a>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
