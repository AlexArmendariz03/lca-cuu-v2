import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Casa del Alfarero Chihuahua",
  description: "Iglesia de compañerismo Cristiano",
  icons: "/logoBlanco.ico"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
