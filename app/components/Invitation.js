import React from "react";

const socialLinks = [
  {
    label: "Facebook",
    description: "Síguenos y comparte lo que Dios está haciendo en La Casa del Alfarero.",
    href: "https://www.facebook.com/profile.php?id=100067083961463",
    accent: "FB",
  },
  {
    label: "Instagram",
    description: "Historias, eventos y momentos de nuestra comunidad en Chihuahua.",
    href: "https://www.instagram.com/lca.chihuahua/?hl=es%2F",
    accent: "IG",
  },
  {
    label: "Ubicación",
    description: "Abre el mapa y encuentra la ruta para visitarnos con tu familia.",
    href: "https://maps.app.goo.gl/VcEksXEZAAt8Ff6j6",
    accent: "MAP",
  },
];

export default function Invitation() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-40 bg-blue-950" />
      <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-950/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-blue-950 shadow-2xl shadow-blue-950/20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative isolate overflow-hidden p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red-600/30 blur-3xl" />
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">Conéctate</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Redes sociales y ubicación.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Mantente cerca de nuestra comunidad, mira próximos eventos y encuentra cómo llegar a La Casa del Alfarero Chihuahua.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 lg:p-10">
            <div className="grid gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-4 rounded-3xl border border-blue-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/10 sm:flex-row sm:items-center"
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-950 text-sm font-black tracking-[0.18em] text-white shadow-lg shadow-blue-950/20 transition group-hover:bg-red-600">
                    {item.accent}
                  </span>
                  <span className="flex-1">
                    <span className="block text-2xl font-black text-blue-950">{item.label}</span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-slate-600">{item.description}</span>
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-red-600 transition group-hover:translate-x-1">
                    Abrir
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
