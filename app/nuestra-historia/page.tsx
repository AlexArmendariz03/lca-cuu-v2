"use client";

import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

type PastorInfo = {
  name: string;
  photoSrc: string;
};

type ChurchNode = {
  name: string;
  location: string;
  note: string;
  pastor: PastorInfo;
  children?: ChurchNode[];
};

const rootPath: ChurchNode[] = [
  {
    name: "Prescott",
    location: "Arizona, EUA",
    note: "Raíz del compañerismo y referencia de envío.",
    pastor: { name: "Nombre del pastor", photoSrc: "" },
  },
  {
    name: "Nogales",
    location: "Sonora, México",
    note: "Puente de la visión hacia México.",
    pastor: { name: "Nombre del pastor", photoSrc: "" },
  },
  {
    name: "Los Mochis",
    location: "Sinaloa, México",
    note: "Etapa de siembra y formación.",
    pastor: { name: "Nombre del pastor", photoSrc: "" },
  },
];

const chihuahuaTree: ChurchNode = {
  name: "La Casa del Alfarero Chihuahua",
  location: "Chihuahua, México",
  note: "Iglesia madre desde donde se desprenden nuevas obras y ciudades.",
  pastor: { name: "Pastores de Chihuahua", photoSrc: "" },
  children: [
    {
      name: "Sol de Oriente",
      location: "Chihuahua",
      note: "Obra desprendida de La Casa del Alfarero Chihuahua.",
      pastor: { name: "Nombre del pastor", photoSrc: "" },
    },
    {
      name: "Corredor",
      location: "Chihuahua",
      note: "Extensión para alcanzar nuevas familias y comunidades.",
      pastor: { name: "Nombre del pastor", photoSrc: "" },
    },
    {
      name: "Aldama",
      location: "Chihuahua",
      note: "Iglesia hija con enfoque local y evangelístico.",
      pastor: { name: "Nombre del pastor", photoSrc: "" },
    },
    {
      name: "Torreón",
      location: "Coahuila",
      note: "Obra enviada desde Chihuahua con una nueva rama de crecimiento.",
      pastor: { name: "Nombre del pastor", photoSrc: "" },
      children: [
        {
          name: "Jiménez",
          location: "Chihuahua",
          note: "Iglesia que se desprende de la obra en Torreón.",
          pastor: { name: "Nombre del pastor", photoSrc: "" },
        },
      ],
    },
  ],
};

export default function NuestraRaizPage() {
  return (
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <Navigation />

        <main className="overflow-hidden">
          <section className="relative isolate bg-blue-950 px-6 pb-20 pt-36 text-white lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.28),transparent_32%)]" />

            <div className="mx-auto max-w-7xl">
              <Link
                  href="/"
                  className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950"
              >
                ← Volver al inicio
              </Link>

              <div className="mt-10 max-w-5xl">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">
                  Nuestra historia
                </p>

                <h1 className="mt-4 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
                  Historia de nuestro compañerismo
                </h1>

                <div className="mt-8 space-y-6 max-w-5xl text-lg leading-8 text-blue-100">
                  <p>
                    En 1970, el pastor Wayman y Nelda Mitchell llegaron a
                    Prescott, Arizona, para dirigir una pequeña iglesia. Poco
                    después, muchos jóvenes hippies se convirtieron a Cristo, y
                    Dios comenzó a derramar un avivamiento en la congregación.
                  </p>

                  <p>
                    El pastor Mitchell utilizó los conciertos evangelísticos como
                    una herramienta para alcanzar a los jóvenes. El primer
                    concierto reunió a más de 200 asistentes y muchas personas
                    entregaron su vida a Jesús. Desde entonces, el evangelismo
                    personal y la participación activa de los nuevos creyentes se
                    convirtieron en pilares fundamentales de la iglesia.
                  </p>

                  <p>
                    Posteriormente surgieron los equipos de impacto, grupos que
                    viajaban a otras ciudades para evangelizar y apoyar a otras
                    iglesias, mientras Dios revelaba una visión clara de
                    discipulado, preparando a jóvenes y matrimonios para el
                    ministerio.
                  </p>

                  <p>
                    En 1973 se envió la primera pareja a plantar una iglesia en
                    otra ciudad, iniciando un movimiento de plantación de iglesias
                    por el suroeste de Estados Unidos.
                  </p>

                  <p>
                    En 1978 se estableció la primera iglesia internacional en
                    Australia, demostrando que el Evangelio tenía el mismo poder
                    en cualquier nación. Después se expandió a países como México,
                    Holanda y Alemania, y posteriormente a todo el mundo.
                  </p>

                  <div className="rounded-2xl border border-red-400/20 bg-white/10 p-6 backdrop-blur">
                    <p className="text-red-300 font-black uppercase tracking-widest text-sm">
                      Hoy
                    </p>

                    <p className="mt-3 text-xl font-semibold text-white leading-8">
                      Actualmente la Fraternidad cuenta con{" "}
                      <span className="text-red-300">
                      más de 3,000 iglesias
                    </span>{" "}
                      establecidas en{" "}
                      <span className="text-red-300">
                      más de 120 naciones
                    </span>
                      , manteniendo como base el evangelismo, el discipulado y la
                      plantación de iglesias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
}