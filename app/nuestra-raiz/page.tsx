import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";

type RootChurch = {
  name: string;
  location: string;
  note: string;
};

type DaughterChurch = {
  name: string;
  location: string;
  note: string;
  children?: DaughterChurch[];
};

const originPath: RootChurch[] = [
  {
    name: "Prescott",
    location: "Arizona, EUA",
    note: "Raíz del compañerismo y referencia de envío.",
  },
  {
    name: "Nogales",
    location: "Sonora, México",
    note: "Puente de la visión hacia México.",
  },
  {
    name: "Los Mochis",
    location: "Sinaloa, México",
    note: "Etapa de siembra y formación.",
  },
];

const chihuahuaBranches: DaughterChurch[] = [
  {
    name: "Sol de Oriente",
    location: "Chihuahua",
    note: "Obra desprendida de La Casa del Alfarero Chihuahua.",
  },
  {
    name: "Corredor",
    location: "Chihuahua",
    note: "Extensión para alcanzar nuevas familias y comunidades.",
  },
  {
    name: "Aldama",
    location: "Chihuahua",
    note: "Iglesia hija con enfoque local y evangelístico.",
  },
  {
    name: "Torreón",
    location: "Coahuila",
    note: "Obra enviada desde Chihuahua con una nueva rama de crecimiento.",
    children: [
      {
        name: "Jiménez",
        location: "Chihuahua",
        note: "Iglesia que se desprende de la obra en Torreón.",
      },
    ],
  },
];

function BranchCard({ branch, index }: { branch: DaughterChurch; index: number; key?: string }) {
  return (
    <article className="relative flex h-full flex-col rounded-[2rem] border border-blue-100 bg-white p-6 text-center shadow-xl shadow-blue-950/5 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-blue-950/10">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-lg font-black text-white shadow-lg shadow-red-950/20">
        {String(index + 1).padStart(2, "0")}
      </div>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-red-600">{branch.location}</p>
      <h3 className="mt-3 text-2xl font-black text-blue-950">{branch.name}</h3>
      <p className="mt-3 flex-1 text-sm font-semibold leading-6 text-slate-600">{branch.note}</p>

      {branch.children?.length ? (
        <div className="mt-8 border-t border-dashed border-blue-200 pt-8">
          <div className="mx-auto mb-4 h-8 w-1 rounded-full bg-blue-950/20" aria-hidden="true" />
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-blue-950">Se desprende</p>
          <div className="grid gap-4">
            {branch.children.map((child) => (
              <div key={child.name} className="rounded-3xl bg-blue-950 p-5 text-white shadow-lg shadow-blue-950/20">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{child.location}</p>
                <h4 className="mt-2 text-2xl font-black">{child.name}</h4>
                <p className="mt-2 text-sm font-semibold leading-6 text-blue-100">{child.note}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function NuestraRaizPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="overflow-hidden">
        <section className="relative isolate bg-blue-950 px-6 pb-20 pt-36 text-white lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.28),transparent_32%)]" />
          <div className="mx-auto max-w-7xl">
            <Link href="/" className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950">
              ← Volver al inicio
            </Link>
            <div className="mt-10 max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">Nuestra raíz</p>
              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Organigrama de la iglesia en Chihuahua.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Una página especial para documentar la raíz, descendencia y obras que se desprenden de La Casa del Alfarero Chihuahua.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2.5rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-950/10 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Ruta histórica</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
                  De la raíz al envío en Chihuahua.
                </h2>
                <p className="mt-5 text-slate-600">
                  Esta parte queda como referencia editable para completar nombres, fechas y testimonios de cada etapa.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-4 md:items-stretch">
                {originPath.map((item, index) => (
                  <article key={item.name} className="rounded-[2rem] border border-blue-100 bg-slate-50 p-5 text-center">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Paso {index + 1}</p>
                    <h3 className="mt-3 text-2xl font-black text-blue-950">{item.name}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-500">{item.location}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{item.note}</p>
                  </article>
                ))}
                <article className="rounded-[2rem] border border-red-200 bg-blue-950 p-5 text-center text-white shadow-xl shadow-blue-950/20">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Casa actual</p>
                  <h3 className="mt-3 text-2xl font-black">Chihuahua</h3>
                  <p className="mt-1 text-sm font-bold text-blue-100">Chihuahua, México</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-blue-100">Desde aquí se desprenden nuevas obras y ciudades.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Organigrama</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
                Obras que se desprenden de Chihuahua.
              </h2>
              <p className="mt-5 text-slate-600">
                Chihuahua queda como iglesia madre en esta sección; debajo se muestran sus obras hijas y la rama que nace desde Torreón.
              </p>
            </div>

            <div className="mt-12 rounded-[2.5rem] bg-slate-100 p-5 ring-1 ring-blue-100 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl rounded-[2rem] bg-blue-950 p-8 text-center text-white shadow-2xl shadow-blue-950/20">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200">Iglesia madre</p>
                <h3 className="mt-3 text-4xl font-black">La Casa del Alfarero Chihuahua</h3>
                <p className="mt-3 text-blue-100">Punto de envío para las obras de Sol de Oriente, Corredor, Aldama y Torreón.</p>
              </div>

              <div className="mx-auto h-12 w-1 bg-blue-950/20" aria-hidden="true" />
              <div className="mx-auto mb-8 h-1 max-w-5xl rounded-full bg-blue-950/20" aria-hidden="true" />

              <div className="grid gap-6 lg:grid-cols-4">
                {chihuahuaBranches.map((branch, index) => (
                  <BranchCard key={branch.name} branch={branch} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
