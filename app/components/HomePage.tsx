"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type HeroSlide = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
};

type GalleryPhoto = {
  src: string;
  alt: string;
};

type GalleryAlbum = {
  title: string;
  description: string;
  cover: string;
  photos: GalleryPhoto[];
};

type ScheduleItem = {
  day: string;
  time: string;
  name: string;
  note: string;
  featured?: boolean;
};

type ValueCard = {
  number: string;
  title: string;
  description: string;
};


const slides: HeroSlide[] = [
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



const galleryAlbums: GalleryAlbum[] = [
  {
    title: "Servicios",
    description: "Momentos de adoración, palabra y convivencia en nuestras reuniones.",
    cover: "/servicios.jpg",
    photos: [
      { src: "/servicios.jpg", alt: "Servicio de iglesia" },
      { src: "/igleisa.jpg", alt: "Auditorio durante una reunión" },
      { src: "/partyhouse.webp", alt: "Comunidad reunida" },
    ],
  },
  {
    title: "Pastores",
    description: "Espacio para fotografías pastorales, liderazgo y equipo de apoyo.",
    cover: "/pastores.webp",
    photos: [
      { src: "/pastores.webp", alt: "Pastores de la iglesia" },
      { src: "/avivaHumber.webp", alt: "Predicación y visión" },
      { src: "/logoLCA.png", alt: "Identidad La Casa del Alfarero" },
    ],
  },
  {
    title: "Niños",
    description: "Actividades y ambientes donde los más pequeños aprenden de Jesús.",
    cover: "/Marioniños.jpg",
    photos: [
      { src: "/Marioniños.jpg", alt: "Ministerio de niños" },
      { src: "/servicios.jpg", alt: "Familias en servicio" },
      { src: "/partyhouse.webp", alt: "Actividad familiar" },
    ],
  },
];

const scheduleItems: ScheduleItem[] = [
  { day: "Domingo", time: "9:45 AM", name: "Escuela dominical", note: "Formación bíblica" },
  { day: "Domingo", time: "11:00 AM", name: "Servicio matutino", note: "Reunión familiar", featured: true },
  { day: "Domingo", time: "6:00 PM", name: "Servicio de milagros", note: "Oración y fe" },
  { day: "Miércoles", time: "7:00 PM", name: "Reunión entre semana", note: "Recarga espiritual" },
  { day: "Sábado", time: "7:00 PM", name: "Conciertos", note: "Jóvenes y comunidad" },
];

const valueCards: ValueCard[] = [
  {
    number: "01",
    title: "Compañerismo",
    description: "Conexiones reales para cada etapa de vida.",
  },
  {
    number: "02",
    title: "Propósito",
    description: "Una fe práctica para servir a Dios y a la ciudad.",
  },
  {
    number: "03",
    title: "Restauración",
    description: "Un ambiente de gracia para volver a empezar.",
  },
  {
    number: "04",
    title: "Servicio",
    description: "Oportunidades para usar tus dones y bendecir a otros.",
  },
];


export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeGallery, setActiveGallery] = useState<GalleryAlbum | null>(null);
  const [expandedPhoto, setExpandedPhoto] = useState<GalleryPhoto | null>(null);

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

  const closeGallery = () => {
    setActiveGallery(null);
    setExpandedPhoto(null);
  };

  const goToAdjacentPhoto = (direction: "previous" | "next") => {
    if (!activeGallery || !expandedPhoto) return;

    const currentIndex = activeGallery.photos.findIndex((photo) => photo.src === expandedPhoto.src);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % activeGallery.photos.length
        : (currentIndex - 1 + activeGallery.photos.length) % activeGallery.photos.length;

    setExpandedPhoto(activeGallery.photos[nextIndex]);
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

      <section id="servicios" className="relative z-20 -mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/95 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
          <div className="relative isolate overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-blue-100">
            <div className="absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute -bottom-24 left-12 -z-10 h-64 w-64 rounded-full bg-blue-900/10 blur-3xl" />

            <div className="grid gap-6 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 p-7 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:p-8">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.26em] text-red-300">Horarios</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Reuniones de la semana</h2>
              </div>
              <div className="max-w-2xl lg:ml-auto lg:text-right">
                <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                  Iglesia de compañerismo cristiano
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-blue-100">
                  Un bloque claro, dinámico y horizontal para elegir rápido la reunión ideal para tu familia.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="rounded-[1.45rem] border border-blue-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-3 shadow-inner shadow-blue-950/5 sm:p-4">
                <div className="flex items-stretch gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
                  {scheduleItems.map((service, index) => (
                    <article
                      key={`${service.day}-${service.time}`}
                      className={`group relative flex min-w-[235px] flex-col overflow-hidden rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:min-w-0 ${
                        service.featured
                          ? "border-red-200 bg-blue-950 text-white shadow-xl shadow-blue-950/20"
                          : "border-blue-100 bg-white text-slate-950 shadow-lg shadow-blue-950/5 hover:border-red-200"
                      }`}
                    >
                      <div className={`absolute right-4 top-4 text-5xl font-black leading-none ${service.featured ? "text-white/10" : "text-blue-950/[0.04]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className={`inline-flex rounded-full px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.18em] shadow-lg ${service.featured ? "bg-red-600 text-white shadow-red-950/30" : "bg-red-600 text-white shadow-red-950/20"}`}>
                          {service.day}
                        </span>
                        {service.featured && (
                          <span className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-red-100 ring-1 ring-white/15">
                            Principal
                          </span>
                        )}
                      </div>

                      <div className="mt-6 flex grow flex-col">
                        <p className={`text-3xl font-black leading-none ${service.featured ? "text-white" : "text-blue-950"}`}>{service.time}</p>
                        <p className={`mt-3 text-sm font-black ${service.featured ? "text-blue-50" : "text-slate-700"}`}>{service.name}</p>
                        <p className={`mt-2 text-xs font-semibold ${service.featured ? "text-blue-100" : "text-slate-500"}`}>{service.note}</p>
                      </div>

                      <div className={`mt-6 h-1.5 rounded-full ${service.featured ? "bg-white/15" : "bg-blue-100"}`}>
                        <div className="h-full w-10 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-950/5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Para todos</p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">Familias, jóvenes y niños son bienvenidos en casa.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-950/5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Primera visita</p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">Llega unos minutos antes y nuestro equipo te orienta.</p>
                </div>
                <a href="#contacto" className="rounded-2xl bg-red-600 p-4 text-white shadow-lg shadow-red-950/20 transition hover:-translate-y-1 hover:bg-red-500">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-100">¿Dudas?</p>
                  <p className="mt-2 text-sm font-black">Contáctanos y planea tu visita →</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="conocenos" className="px-6 py-24 lg:px-8">
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
              {valueCards.map((value) => (
                <div key={value.number} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-blue-950/10">
                  <span className="text-3xl font-black text-red-600">{value.number}</span>
                  <h3 className="mt-3 font-black text-blue-950">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
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

      <section id="vision" className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Nuestra visión</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
              Ser una iglesia que forma discípulos, restaura familias y alcanza nuevas ciudades.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Queremos que cada persona encuentre un lugar para crecer, servir y compartir esperanza. Esta sección queda lista para que agregues declaración oficial, metas y próximos proyectos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Alcanzar", "Discipular", "Enviar"].map((item, index) => (
              <div key={item} className="rounded-[2rem] border border-blue-100 bg-slate-50 p-6 text-center shadow-lg shadow-blue-950/5">
                <p className="text-4xl font-black text-red-600">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-black text-blue-950">{item}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                  {item === "Alcanzar" ? "Con el evangelio a nuestra ciudad." : item === "Discipular" ? "Con fundamento bíblico y comunidad." : "Con visión para nuevas obras."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="galeria" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Galería padre</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">Elige una sección para abrir sus fotos.</h2>
            </div>
            <p className="max-w-xl text-slate-600">Cada tarjeta funciona como una galería padre. Al dar click se abre un conjunto de fotos relacionado con esa sección.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {galleryAlbums.map((album) => (
              <button
                key={album.title}
                type="button"
                onClick={() => setActiveGallery(album)}
                className="group relative h-96 overflow-hidden rounded-[2rem] text-left shadow-xl shadow-blue-950/10 outline-none ring-red-500 transition hover:-translate-y-1 focus:ring-4"
                data-aos="zoom-in"
              >
                <Image src={album.cover} alt={album.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full bg-white px-5 py-2 font-black text-blue-950 shadow-lg">{album.title}</span>
                  <p className="mt-4 text-sm font-semibold leading-6 text-white">{album.description}</p>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-red-200">Abrir galería</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeGallery ? (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-blue-950/90 px-6 py-10 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`Galería ${activeGallery.title}`}>
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-5 shadow-2xl sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Galería</p>
                <h3 className="mt-2 text-4xl font-black text-blue-950">{activeGallery.title}</h3>
                <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-600">{activeGallery.description}</p>
              </div>
              <button type="button" onClick={closeGallery} className="rounded-full bg-blue-950 px-5 py-3 text-sm font-black text-white transition hover:bg-red-600">
                Cerrar
              </button>
            </div>
            <p className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-600">
              Tip UX/UI: haz click en cualquier foto para verla grande, con fondo oscuro y navegación entre imágenes.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {activeGallery.photos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setExpandedPhoto(photo)}
                  className="group relative h-80 overflow-hidden rounded-3xl bg-slate-100 text-left shadow-lg shadow-blue-950/10 outline-none ring-red-500 transition hover:-translate-y-1 focus:ring-4"
                >
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-950 opacity-0 shadow-lg transition group-hover:opacity-100">
                    Expandir
                  </span>
                </button>
              ))}
            </div>

            {expandedPhoto ? (
              <div className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={expandedPhoto.alt}>
                <div className="relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-black/40">
                  <Image src={expandedPhoto.src} alt={expandedPhoto.alt} fill sizes="100vw" className="object-contain" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-gradient-to-b from-black/70 to-transparent p-4 text-white">
                    <p className="text-sm font-black uppercase tracking-[0.18em]">{expandedPhoto.alt}</p>
                    <button type="button" onClick={() => setExpandedPhoto(null)} className="rounded-full bg-white px-4 py-2 text-sm font-black text-blue-950 transition hover:bg-red-600 hover:text-white">
                      Cerrar foto
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => goToAdjacentPhoto("previous")}
                    className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-blue-950 shadow-xl transition hover:bg-red-600 hover:text-white"
                    aria-label="Foto anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => goToAdjacentPhoto("next")}
                    className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-blue-950 shadow-xl transition hover:bg-red-600 hover:text-white"
                    aria-label="Foto siguiente"
                  >
                    ›
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}

