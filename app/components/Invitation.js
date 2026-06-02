import React from "react";

const FacebookIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="currentColor"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.03 3.66 9.2 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.26 22 17.09 22 12.06Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect width="16" height="16" x="4" y="4" rx="4.5" />
    <circle cx="12" cy="12" r="3.4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LocationIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z"
    />
    <circle cx="12" cy="9" r="2.6" />
  </svg>
);

const socialLinks = [
  {
    label: "Facebook",
    description:
      "Síguenos y comparte lo que Dios está haciendo en La Casa del Alfarero.",
    href: "https://www.facebook.com/profile.php?id=100067083961463",
    accent: "FB",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    description:
      "Historias, eventos y momentos de nuestra comunidad en Chihuahua.",
    href: "https://www.instagram.com/lca.chihuahua/?hl=es%2F",
    accent: "IG",
    Icon: InstagramIcon,
  },
  {
    label: "Ubicación",
    description:
      "Abre el mapa y encuentra la ruta para visitarnos con tu familia.",
    href: "https://maps.app.goo.gl/VcEksXEZAAt8Ff6j6",
    accent: "MAP",
    Icon: LocationIcon,
  },
];

export default function Invitation() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-blue-950" />
      <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-950/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-blue-950 shadow-2xl shadow-blue-950/20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative isolate overflow-hidden p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red-600/30 blur-3xl" />
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">
              Conéctate
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Redes sociales y ubicación.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Mantente cerca de nuestra comunidad, mira próximos eventos y
              encuentra cómo llegar a La Casa del Alfarero Chihuahua.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 lg:p-10">
            <div className="grid gap-4">
              {socialLinks.map((item) => {
                const Icon = item.Icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-4 rounded-3xl border border-blue-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/10 sm:flex-row sm:items-center"
                  >
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-950 text-white shadow-lg shadow-blue-950/20 transition group-hover:bg-red-600">
                      <Icon />
                      <span className="sr-only">{item.accent}</span>
                    </span>
                    <span className="flex-1">
                      <span className="block text-2xl font-black text-blue-950">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold leading-6 text-slate-600">
                        {item.description}
                      </span>
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-red-600 transition group-hover:translate-x-1">
                      Abrir
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
