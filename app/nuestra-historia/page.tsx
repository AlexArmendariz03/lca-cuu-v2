"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

const historicalPhotos: string[] = ["/historia/historia-02.jpg", "/historia/historia-01.jpg"];

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
              <div className="flex flex-wrap gap-3">
                <Link
                    href="/"
                    className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950"
                >
                  ← Volver al inicio
                </Link>
                <Link
                    href="/organigrama"
                    className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950"
                >
                  Ver organigrama →
                </Link>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">
                    Nuestra historia
                  </p>

                  <h1 className="mt-4 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
                    Historia de nuestro compañerismo
                  </h1>

                  <p className="mt-8 text-lg leading-8 text-blue-100">
                    En 1970, el pastor Wayman y Nelda Mitchell llegaron a
                    Prescott, Arizona, para dirigir una pequeña iglesia. Poco
                    después, muchos jóvenes hippies se convirtieron a Cristo, y
                    Dios comenzó a derramar un avivamiento en la congregación.
                  </p>
                </div>

                <div className="relative aspect-[780/506] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/30">
                  <Image src="/historia/historia-intro.jpg" alt="Pastor Wayman Mitchell predicando" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
                </div>
              </div>

              <div className="mt-10 max-w-5xl">
                <div className="space-y-6 max-w-5xl text-lg leading-8 text-blue-100">
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
                      Actualmente el Compañerismo cuenta con{" "}
                      <span className="text-red-300">
                      más de 4,500 iglesias
                    </span>{" "}
                      establecidas en{" "}
                      <span className="text-red-300">
                      más de 150 países
                    </span>
                      , manteniendo como base el evangelismo, el discipulado y la
                      plantación de iglesias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Galería histórica</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                Momentos que marcaron el inicio de esta historia.
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {historicalPhotos.map((photo) => (
                  <div key={photo} className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-blue-950/10">
                    <Image src={photo} alt="Fotografía histórica de la fraternidad" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-50 px-6 py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="order-2 mx-auto w-full max-w-sm lg:order-1">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.6rem] shadow-xl shadow-blue-950/10">
                  <Image src="/historia/mitchell-fundadores.webp" alt="Wayman y Nelda Mitchell" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Fundadores del movimiento</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
                  Wayman y Nelda Mitchell.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Wayman y Nelda Mitchell fueron los fundadores de este movimiento. Estuvieron casados
                    por 63 años, hasta que Nelda partió con el Señor en 2016.
                  </p>
                  <p>
                    Antes de llegar a Prescott, Arizona, en 1970, ambos ya habían experimentado una
                    conversión poderosa a mediados de sus veintes y sirvieron pastoreando congregaciones
                    en distintos estados de EUA y en Canadá.
                  </p>
                  <p>
                    El pastor Mitchell continuó viajando por el mundo llevando la visión del compañerismo
                    hasta principios de 2020. Partió con el Señor el 21 de septiembre de 2020.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
}