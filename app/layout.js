import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Casa del Alfarero Chihuahua",
  description: "Iglesia de compañerismo Cristiano",
  icons: "/logoBlanco.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Navigation />
      <body className={inter.className}>{children}</body>

    </html>
  );
}
