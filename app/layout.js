import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Casa del Alfarero Chihuahua",
  description: "Iglesia de compañerismo Cristiano",
  icons: "/logoBlanco.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
        <Script src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" />
    </html>
  );
}
