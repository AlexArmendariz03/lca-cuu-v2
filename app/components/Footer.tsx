import Image from "next/image";
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

const footerHighlights: string[] = ["Compañerismo", "Familia", "Fe", "Esperanza"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-950 px-6 py-12 text-white lg:px-8">
      <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -bottom-28 right-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-md md:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <a href="/#inicio" className="inline-flex items-center rounded-2xl bg-white p-3 shadow-xl shadow-blue-950/20 transition hover:-translate-y-1">
              <Image src="/logoLCA.png" alt="Logo La Casa del Alfarero" width={190} height={70} className="h-auto w-44" />
            </a>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-blue-100">
              Iglesia de compañerismo cristiano en Chihuahua. Un lugar para adorar, crecer en comunidad y encontrar propósito en Jesús.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {footerHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-red-300">Explora</p>
              <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm font-bold text-blue-100 transition hover:translate-x-1 hover:text-white">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl bg-white p-5 text-blue-950 shadow-xl shadow-blue-950/20">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">Te esperamos</p>
              <p className="mt-4 text-3xl font-black leading-none">Domingo</p>
              <p className="mt-2 text-sm font-bold text-slate-600">11:00 AM · Servicio matutino</p>
              <a href="/#servicios" className="mt-5 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-950/20 transition hover:-translate-y-1 hover:bg-red-500">
                Ver horarios
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm font-semibold text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>© 2026 La Casa del Alfarero Chihuahua. Todos los derechos reservados.</p>
          <p className="text-red-200">Donde Jesucristo está cambiando vidas.</p>
        </div>
      </div>
    </footer>
  );
}
