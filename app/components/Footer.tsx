import React from "react";

type FooterLink = { label: string; href: string };

const footerLinks: FooterLink[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nuestra historia", href: "/nuestra-historia" },
  { label: "Organigrama", href: "/organigrama" },
  { label: "Galería", href: "/#galeria" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 px-6 py-8 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Footer navigation">
          {footerLinks.map((link) => (
              <a key={link.href} href={link.href}
                 className="text-sm font-semibold text-blue-100 transition hover:text-white">
                {link.label}
              </a>
          ))}
        </nav>

        <div
            className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-blue-200 md:flex-row md:items-center md:justify-between">
          <p>© 2026 La Casa del Alfarero Chihuahua. Todos los derechos reservados.</p>
          <a href="/#servicios" className="font-semibold text-red-300 transition hover:text-red-200">
          Ver horarios →
          </a>
        </div>
      </div>
    </footer>
  );
}
