"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

type Belief = {
  title: string;
  description: string;
};

const beliefs: Belief[] = [
  {
    title: "La Trinidad",
    description: "Hay un solo Dios, y que existe eternamente en tres personas: Padre, Hijo y Espíritu Santo.",
  },
  {
    title: "Dios el Padre",
    description: "Es el Creador del universo. Creó al hombre a Su propia imagen para una comunión, y lo llamó de regreso a Sí mismo a través de Cristo después de la rebelión y caída del hombre.",
  },
  {
    title: "Jesucristo",
    description: "Es eternamente Dios. Él estuvo junto con el Padre y el Espíritu Santo desde el principio, y por Él fueron hechas todas las cosas. Dejó el cielo y se encarnó por el Espíritu Santo de la Virgen María; de ahora en adelante, Él es por siempre un Cristo con dos naturalezas: Dios y el hombre, en una Persona.",
  },
  {
    title: "El Espíritu Santo",
    description: "Es Dios, el Señor y dador de vida, que estuvo activo en el Antiguo Testamento y fue dado a la Iglesia en plenitud en Pentecostés. Él da poder a los santos para el servicio y el testimonio, limpia al hombre de la vieja naturaleza y nos conforma a la imagen de Cristo.",
  },
  {
    title: "El bautismo en el Espíritu Santo",
    description: "Con evidencia de hablar en lenguas, subsecuente a la conversión, libera la plenitud del Espíritu y es evidenciado por los frutos y dones del Espíritu Santo.",
  },
  {
    title: "Las Sagradas Escrituras",
    description: "La Biblia, que contiene el Antiguo y el Nuevo Testamento, es la única Palabra infalible e inspirada de Dios, y su autoridad es suprema, final y eterna. No se puede agregar, restar ni reemplazar en ningún aspecto. Es la fuente de toda doctrina, instrucción, corrección y reprensión.",
  },
  {
    title: "La expiación",
    description: "La muerte vicaria de Cristo en la cruz pagó el castigo por los pecados del mundo entero. Sus beneficios de sanidad (cuerpo, alma y espíritu) también se proporcionan en la expiación.",
  },
  {
    title: "La salvación",
    description: "Es un don gratuito de Dios, basado en los méritos de la muerte de su Hijo, y se apropia por fe. Se ve afectada por el arrepentimiento de la persona, la fe en el Señor Jesús (justificación) y la aceptación personal de Él como Señor y Salvador (regeneración).",
  },
  {
    title: "La vida cristiana",
    description: "Debe ser en consagración, devoción y santidad. La vida cristiana está llena de pruebas, luchas y guerras contra un enemigo espiritual. Para aquellos que permanecen en Cristo hasta su muerte o Su regreso, las promesas de bendición eterna en la presencia de Dios están aseguradas.",
  },
  {
    title: "La Iglesia",
    description: "Es el Cuerpo de Cristo, la habitación de Dios entre los santos por medio del Espíritu. Todo creyente nacido del Espíritu tiene un lugar en la iglesia designado por Dios, donde Cristo llama a los ministros a la gran comisión de ir por todo el mundo y hacer discípulos en todas las naciones.",
  },
  {
    title: "Las ordenanzas",
    description: "El Bautismo es la señal externa de lo que Dios ya ha hecho en la vida del individuo, un testimonio público que se identifica con la muerte y resurrección de Jesús. La Cena del Señor es una conmemoración de Su muerte, en memoria de Él hasta que regrese.",
  },
  {
    title: "La segunda venida",
    description: "Creemos en la venida corporal y personal del Señor Jesucristo, la resurrección de los santos, el milenio y el juicio final, que determinará el estado eterno tanto de los santos como de los incrédulos, según su relación con Jesucristo.",
  },
];

export default function LoQueCreemosPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />

      <main className="overflow-hidden">
        <section className="relative isolate min-h-[480px] overflow-hidden bg-blue-950 px-6 pb-14 pt-32 text-white lg:px-8">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/banner-creemos.jpg"
              alt="Cruz sobre una colina al atardecer"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "68% 30%" }}
              priority
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/95 via-blue-950/90 to-blue-950" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(220,38,38,0.25),transparent_35%)]" />

          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950"
              >
                ← Volver al inicio
              </Link>
              <Link
                href="/nuestra-historia"
                className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950"
              >
                Nuestra historia →
              </Link>
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">Quiénes somos</p>
              <h1 className="mt-3 text-4xl font-black leading-none tracking-tight sm:text-5xl">
                Lo que creemos.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Nuestra declaración de fe.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-50 px-6 py-20 lg:px-8">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-950/5 blur-3xl" />
          <div className="absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-950/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Declaración de fe</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
                Los fundamentos de nuestra fe.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Doce convicciones bíblicas que sostienen todo lo que somos y hacemos como iglesia.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {beliefs.slice(0, 6).map((belief, index) => (
                <article
                  key={belief.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-7 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <span className="absolute -right-3 -top-3 text-7xl font-black text-blue-950/[0.05] transition group-hover:text-red-600/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative inline-flex rounded-full bg-blue-950 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-4 text-2xl font-black text-blue-950">{belief.title}</h3>
                  <p className="relative mt-3 leading-7 text-slate-600">{belief.description}</p>
                </article>
              ))}
            </div>

            <div className="relative my-14 aspect-[21/9] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/20" data-aos="fade-up">
              <Image src="/santaCena.jpeg" alt="Servicio de La Casa del Alfarero" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="max-w-2xl text-xl font-semibold italic leading-8 text-white sm:text-2xl">
                  “Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir,
                  para instruir en justicia”.
                </p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-red-300">2 Timoteo 3:16</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {beliefs.slice(6).map((belief, index) => (
                <article
                  key={belief.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-7 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <span className="absolute -right-3 -top-3 text-7xl font-black text-blue-950/[0.05] transition group-hover:text-red-600/10">
                    {String(index + 7).padStart(2, "0")}
                  </span>
                  <span className="relative inline-flex rounded-full bg-blue-950 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-white">
                    {String(index + 7).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-4 text-2xl font-black text-blue-950">{belief.title}</h3>
                  <p className="relative mt-3 leading-7 text-slate-600">{belief.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
