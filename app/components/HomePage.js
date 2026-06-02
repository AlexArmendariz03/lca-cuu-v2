"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/partyhouse.webp",
    eyebrow: "Bienvenido a casa",
    title: "La Casa del Alfarero Chihuahua",
    description:
      "Una iglesia de compañerismo cristiano donde familias, jóvenes y niños encuentran fe, comunidad y propósito en Jesús.",
  },
  {
    image: "/igleisa.jpg",
    eyebrow: "Donde Jesucristo está cambiando vidas",
    title: "Un lugar para volver a empezar",
    description:
      "Ven tal como eres. Queremos caminar contigo, orar por tu familia y celebrar lo que Dios está haciendo en nuestra ciudad.",
  },
  {
    image: "/avivaHumber.webp",
    eyebrow: "Fe viva para Chihuahua",
    title: "Adoración, palabra y esperanza",
    description:
      "Cada reunión es una oportunidad para acercarnos a Dios, fortalecer amistades y salir con una fe renovada.",
  },
];

const ministries = [
  {
    title: "Familias",
    description: "Un espacio seguro para crecer juntos en amor, restauración y dirección espiritual.",
    icon: "✦",
  },
  {
    title: "Jóvenes",
    description: "Reuniones dinámicas, amistades sanas y conversaciones relevantes para esta generación.",
    icon: "✧",
  },
  {
    title: "Niños",
    description: "Ambientes alegres y cuidados para que los más pequeños aprendan de Jesús.",
    icon: "✺",
  },
];

const gallery = [
  { src: "/servicios.jpg", alt: "Servicio de iglesia", label: "Servicios" },
  { src: "/pastores.webp", alt: "Pastores de la iglesia", label: "Pastores" },
  { src: "/Marioniños.jpg", alt: "Ministerio de niños", label: "Niños" },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-950">
      <section
        data-aos="zoom-in"
        id="inicio"
        className="relative isolate min-h-[720px] w-full overflow-hidden bg-blue-950"
      >
        <div id="carouselExampleCaptions" className="absolute inset-0">
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 list-none justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 hover:w-12 hover:bg-white ${activeSlide === index ? "w-12 bg-white" : "w-8 bg-white/75"}`}
                aria-current={activeSlide === index ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="relative h-full w-full overflow-hidden after:clear-both after:block after:content-['']">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={`absolute inset-0 h-full w-full transition-opacity duration-[900ms] ease-in-out motion-reduce:transition-none ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={activeSlide !== index}
              >
                <Image
                  src={slide.image}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover"
                  alt={slide.title}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/70 to-blue-950/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.25),transparent_30%)]" />
              </div>
            ))}
          </div>

          <button
            className="absolute bottom-0 left-0 top-0 z-20 hidden w-20 items-center justify-center text-white/70 transition hover:bg-white/10 hover:text-white md:flex"
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Anterior"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </span>
          </button>

          <button
            className="absolute bottom-0 right-0 top-0 z-20 hidden w-20 items-center justify-center text-white/70 transition hover:bg-white/10 hover:text-white md:flex"
            type="button"
            onClick={goToNextSlide}
            aria-label="Siguiente"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-28 pt-32 lg:px-8">
          <div className="max-w-3xl text-white" data-aos="fade-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/90 shadow-2xl backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
              Iglesia cristiana en Chihuahua
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Donde Jesucristo está cambiando vidas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
              Somos una comunidad para toda la familia: adoración, palabra, compañerismo y esperanza para nuestra ciudad.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#servicios" className="rounded-full bg-red-600 px-8 py-4 text-center font-bold text-white shadow-xl shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-500">
                Ver horarios
              </a>
              <a href="#conocenos" className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-blue-950">
                Conócenos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="conocenos" className="relative z-20 -mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/95 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
          <div className="grid overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-blue-100 lg:grid-cols-[0.85fr_1.45fr]">
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 p-7 text-white">
              <div className="absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-red-600/30 blur-3xl" />
              <p className="text-sm font-black uppercase tracking-[0.26em] text-red-300">Horarios</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Reuniones de la semana</h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-blue-100">
                Todo en un solo lugar, ordenado por día para que encuentres rápido la reunión ideal para tu familia.
              </p>
            </div>
            <div className="divide-y divide-blue-100 p-3 sm:p-5">
              {[
                ["Domingo", [["9:45 AM", "Escuela dominical"], ["11:00 AM", "Servicio matutino"], ["6:00 PM", "Servicio de milagros"]]],
                ["Miércoles", [["7:00 PM", "Reunión entre semana"]]],
                ["Sábado", [["7:00 PM", "Conciertos"]]],
              ].map(([day, services]) => (
                <div key={day} className="grid gap-4 py-5 first:pt-2 last:pb-2 md:grid-cols-[160px_1fr] md:items-center">
                  <div>
                    <p className="inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-red-950/20">{day}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {services.map(([time, name]) => (
                      <div key={`${day}-${time}`} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-blue-100">
                        <p className="text-2xl font-black leading-none text-blue-950">{time}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-600">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-right">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Nuestra casa</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
              Una iglesia donde Jesucristo está cambiando vidas.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Conservamos lo esencial: una comunidad cercana, adoración sincera y enseñanza bíblica. Renovamos la experiencia para que desde la primera visita se sienta claro, amigable y memorable.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5">
                <span className="text-3xl font-black text-red-600">01</span>
                <h3 className="mt-3 font-black text-blue-950">Compañerismo</h3>
                <p className="mt-2 text-sm text-slate-600">Conexiones reales para cada etapa de vida.</p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5">
                <span className="text-3xl font-black text-red-600">02</span>
                <h3 className="mt-3 font-black text-blue-950">Propósito</h3>
                <p className="mt-2 text-sm text-slate-600">Una fe práctica para servir a Dios y a la ciudad.</p>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-red-600/20 to-blue-950/20 blur-2xl" />
            <div className="relative h-[520px] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/20">
              <Image src="/pastores.webp" alt="Pastores de La Casa del Alfarero" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/30 bg-blue-950/80 p-5 text-white backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.2em] text-red-200">Bienvenida pastoral</p>
              <p className="mt-2 font-semibold">Queremos que encuentres una familia espiritual y un lugar para crecer.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ministerios" className="bg-blue-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl" data-aos="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">Ministerios</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Hay un lugar para ti y tu familia.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ministries.map((ministry) => (
              <article key={ministry.title} data-aos="fade-up" className="group rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white hover:text-blue-950">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-2xl text-white shadow-lg shadow-red-950/30">{ministry.icon}</div>
                <h3 className="mt-8 text-2xl font-black">{ministry.title}</h3>
                <p className="mt-4 text-blue-100 transition group-hover:text-slate-600">{ministry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Vida en comunidad</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">Momentos que cuentan una historia.</h2>
            </div>
            <p className="max-w-xl text-slate-600">Diseñamos una experiencia visual más limpia, con tarjetas, profundidad y llamados a la acción claros sin perder la identidad azul, blanco y rojo de la iglesia.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.src} className="group relative h-96 overflow-hidden rounded-[2rem] shadow-xl shadow-blue-950/10" data-aos="zoom-in">
                <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent" />
                <figcaption className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-2 font-black text-blue-950 shadow-lg">{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
