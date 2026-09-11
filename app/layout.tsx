import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ScrollReveal from "@/app/components/ScrollReveal";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "La Casa del Alfarero Chihuahua";
const description =
  "Iglesia de compañerismo cristiano en Chihuahua. Servicios los domingos 11:00 AM, escuela dominical 9:45 AM y reuniones entre semana.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: title,
  keywords: [
    "iglesia en Chihuahua",
    "La Casa del Alfarero",
    "compañerismo cristiano",
    "servicios dominicales",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Casa del Alfarero Chihuahua",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172554",
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
