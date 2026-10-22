"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import type { GalleryAlbum, GalleryPhoto } from "@/lib/gallery";

type HeroSlide = {
  image: string;
  title: string;
  /** Optional looping background video; `image` is used as its poster and as the fallback. */
  video?: string;
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

type UpcomingEvent = {
  name: string;
  photo?: string;
  date?: string;
};

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+";

const slides: HeroSlide[] = [
  { image: "/banner-principal/1.webp", title: "La Casa del Alfarero Chihuahua" },
  { image: "/banner-principal/2.jpg", title: "Un lugar para volver a empezar" },
  { image: "/banner-principal/3.webp", title: "Adoración, palabra y esperanza" },
  { image: "/banner-principal/4.jpg", title: "Una familia que crece en fe" },
  { image: "/banner-principal/5.jpg", title: "Momentos de oración y avivamiento" },
  { image: "/banner-principal/6-poster.jpg", video: "/banner-principal/6.mp4", title: "Vive la experiencia en La Casa del Alfarero" },
  { image: "/banner-principal/7-poster.jpg", video: "/banner-principal/7.mp4", title: "Comunidad y fe en cada encuentro" },
];



const scheduleItems: ScheduleItem[] = [
  { day: "Domingo", time: "9:45 AM", name: "Escuela dominical", note: "Formación bíblica" },
  { day: "Domingo", time: "11:00 AM", name: "Servicio matutino", note: "Reunión familiar", featured: true },
  { day: "Domingo", time: "6:00 PM", name: "Servicio de milagros", note: "Oración y fe" },
  { day: "Miércoles", time: "7:00 PM", name: "Reunión entre semana", note: "Recarga espiritual" },
  { day: "Sábado", time: "7:00 PM", name: "Conciertos", note: "Jóvenes y comunidad" },
];

const upcomingEvents: UpcomingEvent[] = [
  { name: "Rally de jóvenes: Sin titubear", photo: "/eventos/evento-1.jpg", date: "13 Nov" },
  { name: "Día de avivamiento: Un cambio es posible", photo: "/eventos/evento-2.png", date: "15 Nov" },
  { name: "Discipulado regional para hombres", photo: "/eventos/evento-3.png", date: "16 Nov" },
];

const valueCards: ValueCard[] = [
  {
    number: "01",
    title: "Discipulado",
    description:
      "Creemos que el futuro pastor debe prepararse en todos los aspectos de la vida pastoral, siendo ante todo un buen predicador que alimenta a su congregación con la palabra de Dios. Es un proceso que desafía a los creyentes a madurar como seguidores de Cristo.",
  },
  {
    number: "02",
    title: "Evangelismo",
    description:
      "Estamos conscientes de la gran necesidad que existe en el mundo por conocer la verdad de Cristo. La función de nuestra iglesia es ser la luz del mundo (Mateo 5:14) y llevar esperanza y el mensaje de salvación a todos aquellos que aún carecen de ella.",
  },
  {
    number: "03",
    title: "Plantación de iglesias",
    description:
      "Obedecemos la Gran Comisión llevando el evangelio a otras ciudades y naciones. Preparamos pastores en un discipulado bíblico y práctico para luego enviarlos a los campos de cosecha, a las ciudades y naciones.",
  },
  {
    number: "04",
    title: "Compañerismo",
    description:
      "Nos esforzamos por que nuestra iglesia sea un lugar donde se imparta la palabra de Dios, pero también que sea una familia y un lugar de comunión y amor.",
  },
];


function handleSpotlight(event: { currentTarget: HTMLElement; clientX: number; clientY: number }) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}

export default function HomePage({ galleryAlbums }: { galleryAlbums: GalleryAlbum[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [activeGallery, setActiveGallery] = useState<GalleryAlbum | null>(null);
  const [expandedPhoto, setExpandedPhoto] = useState<GalleryPhoto | null>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const galleryCloseButtonRef = useRef<HTMLButtonElement>(null);
  const photoCloseButtonRef = useRef<HTMLButtonElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroLayerRef = useRef<HTMLDivElement>(null);
  const heroVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const isCarouselPaused = isHovering || isAutoplayPaused;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    heroVideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeSlide && !prefersReducedMotion) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeSlide]);

  useEffect(() => {
    const section = heroSectionRef.current;
    const layer = heroLayerRef.current;
    if (!section || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const progress = Math.min(Math.max(-section.getBoundingClientRect().top, 0), section.offsetHeight);
        layer.style.transform = `translateY(${progress * 0.25}px) scale(${1 + progress * 0.00015})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (isCarouselPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isCarouselPaused]);

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  const handleCarouselKeyDown = (event: { key: string; preventDefault: () => void }) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPreviousSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextSlide();
    }
  };

  const openGallery = (album: GalleryAlbum, trigger: HTMLElement) => {
    galleryTriggerRef.current = trigger;
    setActiveGallery(album);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setExpandedPhoto(null);
    galleryTriggerRef.current?.focus({ preventScroll: true });
  };

  const openPhoto = (photo: GalleryPhoto) => {
    setExpandedPhoto(photo);
  };

  const closePhoto = () => {
    setExpandedPhoto(null);
    galleryCloseButtonRef.current?.focus({ preventScroll: true });
  };

  const goToAdjacentPhoto = (direction: "previous" | "next") => {
    if (!activeGallery || !expandedPhoto) return;

    const { photos } = activeGallery;
    const step = direction === "next" ? 1 : -1;
    const currentIndex = photos.findIndex((photo) => photo.id === expandedPhoto.id);
    const nextIndex = (currentIndex + step + photos.length) % photos.length;

    setExpandedPhoto(photos[nextIndex]);
  };

  useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (expandedPhoto) {
          closePhoto();
        } else {
          closeGallery();
        }
        return;
      }

      if (!expandedPhoto) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToAdjacentPhoto("previous");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToAdjacentPhoto("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery, expandedPhoto]);

  useEffect(() => {
    if (activeGallery) {
      galleryCloseButtonRef.current?.focus({ preventScroll: true });
    }
  }, [activeGallery]);

  useEffect(() => {
    if (expandedPhoto) {
      photoCloseButtonRef.current?.focus({ preventScroll: true });
    }
  }, [expandedPhoto]);

  useEffect(() => {
    if (!activeGallery) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousOverflow;
    };
  }, [activeGallery]);

  return (
    <main id="main-content" className="overflow-hidden bg-slate-50 text-slate-950">
      <section
        ref={heroSectionRef}
        id="inicio"
        className="relative isolate min-h-[600px] w-full overflow-hidden bg-blue-950 sm:min-h-[720px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
        onKeyDown={handleCarouselKeyDown}
      >
        <div aria-live="polite" className="sr-only">
          {slides[activeSlide].title}
        </div>
        <div id="carouselExampleCaptions" className="absolute inset-0">
          <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-3">
            <div className="flex list-none items-center gap-1 sm:gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className="group flex h-8 w-7 items-center justify-center sm:w-10"
                  aria-current={activeSlide === index ? "true" : undefined}
                  aria-label={`Diapositiva ${index + 1}`}
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all duration-300 sm:group-hover:w-12 sm:group-hover:bg-white ${activeSlide === index ? "w-7 bg-white sm:w-12" : "w-5 bg-white/75 sm:w-8"}`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsAutoplayPaused((paused) => !paused)}
              aria-pressed={isAutoplayPaused}
              aria-label={isAutoplayPaused ? "Reanudar carrusel automático" : "Pausar carrusel automático"}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white sm:h-8 sm:w-8"
            >
              {isAutoplayPaused ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M8 5.14v13.72c0 .83.91 1.34 1.62.9l10.98-6.86a1.06 1.06 0 0 0 0-1.8L9.62 4.24A1.06 1.06 0 0 0 8 5.14Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M7 5.5A1.5 1.5 0 0 1 8.5 4h1A1.5 1.5 0 0 1 11 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 7 18.5v-13Zm7 0A1.5 1.5 0 0 1 15.5 4h1A1.5 1.5 0 0 1 18 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-13Z" />
                </svg>
              )}
            </button>
          </div>

          <div ref={heroLayerRef} className="relative h-full w-full overflow-hidden after:clear-both after:block after:content-['']">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={`absolute inset-0 h-full w-full transition-opacity duration-[900ms] ease-in-out motion-reduce:transition-none ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={activeSlide !== index}
              >
                {slide.video ? (
                  <video
                    ref={(node: HTMLVideoElement | null) => {
                      heroVideoRefs.current[index] = node;
                      if (node) node.muted = true;
                    }}
                    src={slide.video}
                    poster={slide.image}
                    autoPlay={index === activeSlide}
                    muted
                    loop
                    playsInline
                    preload={index === 0 || index === activeSlide ? "auto" : "metadata"}
                    className="h-full w-full object-cover"
                    aria-hidden="true"
                  />
                ) : (
                  <Image
                    src={slide.image}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className={`object-cover ${activeSlide === index ? "animate-ken-burns" : ""}`}
                    alt={slide.title}
                  />
                )}
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

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-5 pb-40 pt-28 sm:min-h-[720px] sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
          <div className="animate-hero-in max-w-3xl text-white">
            <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/90 shadow-2xl backdrop-blur-md sm:text-sm sm:tracking-[0.24em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
              Iglesia cristiana en Chihuahua
            </div>
            <h1 className="text-[2.1rem] font-black leading-[1.05] tracking-tight [text-wrap:balance] sm:text-5xl sm:leading-[0.95] md:text-6xl lg:text-7xl">
              Donde Jesucristo está cambiando vidas.
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a href="#servicios" className="magnetic-btn rounded-full bg-red-600 px-6 py-3.5 text-center font-bold text-white shadow-xl shadow-red-950/30 hover:bg-red-500 sm:px-8 sm:py-4">
                Ver horarios
              </a>
              <a href="#conocenos" className="magnetic-btn rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur-md hover:bg-white hover:text-blue-950 sm:px-8 sm:py-4">
                Conócenos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative z-20 -mt-10 px-4 sm:-mt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-white/70 bg-white/95 p-2.5 shadow-2xl shadow-blue-950/10 backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
          <div className="relative isolate overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-blue-100">
            <div className="animate-blob-float absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="animate-blob-float absolute -bottom-24 left-12 -z-10 h-64 w-64 rounded-full bg-blue-900/10 blur-3xl" style={{ animationDelay: "-7s" }} />

            <div className="grid gap-6 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 p-7 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:p-8">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.26em] text-red-300">Horarios</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Reuniones de la semana</h2>
              </div>
              <div className="max-w-2xl lg:ml-auto lg:text-right">
                <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                  Todas las semanas
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-blue-100">
                 Elige la reunión ideal para tu familia.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="relative rounded-[1.45rem] border border-blue-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-3 shadow-inner shadow-blue-950/5 sm:p-4">
                <div
                  className="pointer-events-none absolute inset-y-3 left-3 z-10 w-8 bg-gradient-to-r from-white to-transparent lg:hidden"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-y-3 right-3 z-10 w-8 bg-gradient-to-l from-slate-50 to-transparent lg:hidden"
                  aria-hidden="true"
                />
                <div className="flex items-stretch gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
                  {scheduleItems.map((service, index) => (
                    <article
                      key={`${service.day}-${service.time}`}
                      data-aos="fade-up-blur"
                      data-aos-delay={index * 80}
                      onMouseMove={handleSpotlight}
                      className={`spotlight-card group relative flex min-w-[235px] flex-col overflow-hidden rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:min-w-0 ${
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
                <a href="#contacto" className="magnetic-btn rounded-2xl bg-red-600 p-4 text-white shadow-lg shadow-red-950/20 hover:bg-red-500">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-100">¿Dudas?</p>
                  <p className="mt-2 text-sm font-black">Contáctanos y planea tu visita →</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eventos" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up-blur">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Agenda especial</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl md:text-5xl">Próximos eventos</h2>
            </div>
            <p className="max-w-xl text-slate-600">Conciertos, conferencias y actividades especiales fuera de la reunión semanal.</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div key={event.name} data-aos="fade-up-blur" data-aos-delay={index * 100}>
                {event.date ? (
                  <span className="mb-3 inline-flex rounded-full bg-blue-950 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg">
                    {event.date}
                  </span>
                ) : null}
                <article
                  onMouseMove={handleSpotlight}
                  className="spotlight-card overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {event.photo ? (
                    <div className="relative aspect-[4/5] w-full bg-slate-100">
                      <Image
                        src={event.photo}
                        alt={event.name}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-red-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-red-200">{event.name}</p>
                      <p className="text-xs font-semibold text-blue-100">Detalles próximamente</p>
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conocenos" className="px-6 pb-10 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up-blur">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Nuestra misión</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
              Predicar el evangelio a toda criatura.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              La misión principal de La Casa del Alfarero es llevar a cabo la comisión de Cristo de predicar el
              evangelio a toda criatura. Para esto, nuestras iglesias se enfocan en el discipulado, la plantación
              de iglesias y el evangelismo mundial. Fue Cristo mismo quien dejó este mandato, y gracias a la
              obediencia a este mandato es que nosotros mismos estamos aquí.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Constantemente nos esforzamos por llegar a toda clase de gente que no conoce el evangelio de
              Jesucristo, ya sea por medio de predicación, bandas de música, películas, teatro, evangelismos,
              visitas casa por casa, cruzadas de milagros y muchas actividades más. Nuestra misión es ayudar a
              otras personas a tener una relación personal y verdadera con el Salvador y Señor, Cristo Jesús.
            </p>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5">
              <p className="text-lg font-semibold italic leading-8 text-blue-950">
                “Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura”.
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-red-600">Marcos 16:15</p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((value, index) => (
              <div
                key={value.number}
                data-aos="fade-up-blur"
                data-aos-delay={index * 90}
                onMouseMove={handleSpotlight}
                className="spotlight-card rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <span className="text-3xl font-black text-red-600">{value.number}</span>
                <h3 className="mt-3 font-black text-blue-950">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-14 aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-[2rem] shadow-xl shadow-blue-950/10" data-aos="fade-up-blur">
            <Image
              src="/iglesiaGente2.jpg"
              alt="Congregación de La Casa del Alfarero en un servicio"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="galeria" className="px-6 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up-blur">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Galería</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl md:text-5xl">Elige una sección para abrir sus fotos.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryAlbums.map((album, index) => (
              <button
                key={album.title}
                type="button"
                onClick={(event: { currentTarget: HTMLElement }) => openGallery(album, event.currentTarget)}
                onMouseMove={handleSpotlight}
                className="spotlight-card group relative h-96 overflow-hidden rounded-[2rem] text-left shadow-xl shadow-blue-950/10 outline-none ring-red-500 transition hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-4"
                data-aos="scale-in-blur"
                data-aos-delay={index * 110}
              >
                {album.cover ? (
                  album.cover.isVideo ? (
                    <video
                      src={`${album.cover.src}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={album.cover.src}
                      alt={album.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  )
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-blue-200 bg-slate-100 text-slate-400">
                    <span className="text-3xl">＋</span>
                    <span className="text-xs font-black uppercase tracking-[0.16em]">Cargar foto de portada</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full bg-white px-5 py-2 font-black text-blue-950 shadow-lg">{album.title}</span>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-red-200">Abrir galería</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeGallery ? (
        <div
          className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-blue-950/90 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería ${activeGallery.title}`}
          onClick={closeGallery}
        >
          <div className="mx-auto max-w-6xl rounded-[1.5rem] bg-white p-4 shadow-2xl sm:rounded-[2rem] sm:p-8" onClick={(event: { stopPropagation: () => void }) => event.stopPropagation()}>
            <div className="flex flex-row items-start justify-between gap-3">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Galería</p>
                <h3 className="mt-2 text-3xl font-black text-blue-950 sm:text-4xl">{activeGallery.title}</h3>
              </div>
              <button ref={galleryCloseButtonRef} type="button" onClick={closeGallery} className="shrink-0 rounded-full bg-blue-950 px-4 py-2.5 text-sm font-black text-white transition hover:bg-red-600 sm:px-5 sm:py-3">
                Cerrar
              </button>
            </div>
            <p className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-600">
              Haz clic en cualquier foto para verla completa.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {activeGallery.photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => openPhoto(photo)}
                  className="group relative h-60 overflow-hidden rounded-3xl bg-slate-100 text-left shadow-lg shadow-blue-950/10 outline-none ring-red-500 transition hover:-translate-y-1 focus-visible:ring-4 sm:h-80"
                >
                  {photo.src ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : photo.video ? (
                    <video
                      src={`${photo.video}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <div className={`absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent transition ${photo.video ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  {photo.video ? (
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-2xl text-blue-950 shadow-xl transition group-hover:scale-110">
                        ▶
                      </span>
                    </span>
                  ) : (
                    <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-950 opacity-0 shadow-lg transition group-hover:opacity-100">
                      Expandir
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {expandedPhoto ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={expandedPhoto.alt}
          onClick={closePhoto}
        >
          <div
            className="relative h-[72svh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-slate-950 shadow-2xl shadow-black/40 sm:h-[82vh] sm:rounded-[2rem]"
            onClick={(event: { stopPropagation: () => void }) => event.stopPropagation()}
          >
            {expandedPhoto.video ? (
              <video
                src={expandedPhoto.video}
                poster={expandedPhoto.src}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            ) : expandedPhoto.src ? (
              <Image
                src={expandedPhoto.src}
                alt={expandedPhoto.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-contain"
              />
            ) : null}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-gradient-to-b from-black/70 to-transparent p-4 text-white">
              {activeGallery ? (
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  {activeGallery.photos.findIndex((photo) => photo.id === expandedPhoto.id) + 1} / {activeGallery.photos.length}
                </span>
              ) : <span />}
              <button ref={photoCloseButtonRef} type="button" onClick={closePhoto} className="rounded-full bg-white px-4 py-2 text-sm font-black text-blue-950 transition hover:bg-red-600 hover:text-white">
                Cerrar foto
              </button>
            </div>
            <button
              type="button"
              onClick={() => goToAdjacentPhoto("previous")}
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-blue-950 shadow-xl transition hover:bg-red-600 hover:text-white sm:left-4 sm:h-12 sm:w-12"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goToAdjacentPhoto("next")}
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-blue-950 shadow-xl transition hover:bg-red-600 hover:text-white sm:right-4 sm:h-12 sm:w-12"
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

