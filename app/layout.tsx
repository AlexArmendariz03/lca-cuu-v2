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
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
