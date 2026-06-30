import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";

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

function PastorPhoto({ pastor, featured = false }: { pastor: PastorInfo; featured?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-[11rem]">
      <div className={`relative mx-auto aspect-square overflow-hidden rounded-[1.5rem] border-2 ${featured ? "border-white/20 bg-white/10" : "border-dashed border-blue-200 bg-slate-50"}`}>
        {pastor.photoSrc ? (
          <Image src={pastor.photoSrc} alt={`Foto de ${pastor.name}`} fill sizes="176px" className="object-cover" />
        ) : (
          <div className={`flex h-full flex-col items-center justify-center p-4 text-center ${featured ? "text-blue-100" : "text-slate-500"}`}>
            <span className="text-3xl">＋</span>
            <span className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.16em]">Cargar foto</span>
          </div>
        )}
      </div>
      <p className={`mt-3 text-xs font-black uppercase tracking-[0.16em] ${featured ? "text-red-100" : "text-red-600"}`}>{pastor.name}</p>
    </div>
  );
}

function ChurchCard({ node, step, featured = false, compact = false }: { node: ChurchNode; step?: string; featured?: boolean; compact?: boolean; key?: string }) {
  return (
    <article className={`relative mx-auto w-full rounded-[2rem] border p-5 text-center shadow-xl transition hover:-translate-y-1 sm:p-6 ${featured ? "max-w-3xl border-red-200 bg-blue-950 text-white shadow-blue-950/20" : "max-w-xl border-blue-100 bg-white text-slate-950 shadow-blue-950/5"}`}>
      {step ? (
        <div className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-red-600 text-xs font-black text-white shadow-lg shadow-red-950/20">
          {step}
        </div>
      ) : null}
      <div className={`grid gap-5 ${compact ? "sm:grid-cols-[9rem_1fr] sm:items-center sm:text-left" : ""}`}>
        <PastorPhoto pastor={node.pastor} featured={featured} />
        <div>
          <p className={`text-xs font-black uppercase tracking-[0.18em] ${featured ? "text-red-200" : "text-red-600"}`}>{node.location}</p>
          <h3 className={`mt-3 font-black ${featured ? "text-4xl text-white" : "text-2xl text-blue-950"}`}>{node.name}</h3>
          <p className={`mt-3 text-sm font-semibold leading-6 ${featured ? "text-blue-100" : "text-slate-600"}`}>{node.note}</p>
        </div>
      </div>
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
                Organigrama completo de la iglesia.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Una página especial para documentar la raíz, las obras que se desprenden de Chihuahua y los espacios donde podrás cargar las fotos de los pastores.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2.5rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-950/10 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Organigrama</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
                  De la raíz al fruto de Chihuahua.
                </h2>
                <p className="mt-5 text-slate-600">
                  La línea principal muestra Prescott, Nogales y Los Mochis hasta llegar a Chihuahua; debajo se integran las obras que se desprenden de Chihuahua y la rama de Torreón hacia Jiménez.
                </p>
              </div>

              <div className="mt-12 rounded-[2.5rem] bg-slate-100 p-5 ring-1 ring-blue-100 sm:p-8 lg:p-10">
                <div className="relative mx-auto max-w-5xl">
                  <div className="absolute left-1/2 top-10 hidden h-[36rem] w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-red-600 via-blue-950 to-blue-950/20 md:block" aria-hidden="true" />

                  <div className="relative z-10 grid gap-0">
                    {rootPath.map((node, index) => (
                      <div key={node.name} className="flex flex-col items-center">
                        <ChurchCard node={node} step={String(index + 1).padStart(2, "0")} compact />
                        <div className="flex h-14 flex-col items-center justify-center" aria-hidden="true">
                          <span className="h-full w-1 bg-blue-950/20" />
                          <span className="-mt-3 grid h-8 w-8 place-items-center rounded-full bg-red-600 text-white shadow-lg shadow-red-950/20">↓</span>
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-col items-center">
                      <ChurchCard node={chihuahuaTree} step="04" featured />
                      <div className="h-12 w-1 bg-blue-950/20" aria-hidden="true" />
                      <div className="mb-8 h-1 w-full max-w-5xl rounded-full bg-blue-950/20" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-4">
                    {chihuahuaTree.children?.map((branch, index) => (
                      <div key={branch.name} className="flex flex-col items-center">
                        <ChurchCard node={branch} step={String(index + 1).padStart(2, "0")} />

                        {branch.children?.length ? (
                          <div className="mt-6 w-full">
                            <div className="mx-auto h-10 w-1 bg-blue-950/20" aria-hidden="true" />
                            <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.18em] text-blue-950">Se desprende</p>
                            <div className="grid gap-4">
                              {branch.children.map((child) => (
                                <ChurchCard key={child.name} node={child} featured />
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-dashed border-red-200 bg-red-50/70 p-5 text-center">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">Nota para edición</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  Para cargar fotos, reemplaza cada <span className="font-black text-blue-950">photoSrc vacío</span> por la ruta de la imagen del pastor dentro de <span className="font-black text-blue-950">/public</span>, por ejemplo <span className="font-black text-blue-950">/pastores/sol-de-oriente.webp</span>.
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
