import "./globals.css";

export const metadata = {
  title: "La Casa del Alfarero Chihuahua",
  description: "Iglesia de compañerismo Cristiano",
  icons: "/logoBlanco.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
