"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    pastor: PastorInfo;
    children?: ChurchNode[];
};

const rootPath: ChurchNode[] = [
    {
        name: "Prescott",
        location: "Arizona, EUA",
        pastor: { name: "Greg Y Lisa Mitchell", photoSrc: "/prescott.jpg" },
    },
    {
        name: "Nogales",
        location: "Sonora, México",
        pastor: { name: "Jose Luis y Lucy Gaxiola", photoSrc: "/nogales.jpg" },
    },
    {
        name: "Los Mochis",
        location: "Sinaloa, México",
        pastor: { name: "Victor y Lupita Higuera", photoSrc: "/mochis.jpg" },
    },
];

const chihuahuaTree: ChurchNode = {
    name: "La Casa del Alfarero Chihuahua",
    location: "Chihuahua, México",
    pastor: { name: "Jorge y Abigail Covarrubias", photoSrc: "/pastores/JorgePalomar.jpg" },
    children: [
        {
            name: "Sol de Oriente",
            location: "Chihuahua",
            pastor: { name: "Jhobanny y Leslie Blanco", photoSrc: "/pastores/JioSol.jpg" },
        },
        {
            name: "Corredor",
            location: "Chihuahua",
            pastor: { name: "Juan y Ana Reyes", photoSrc: "/pastores/JuaReyesCorredor.jpg" },
        },
        {
            name: "Aldama",
            location: "Chihuahua",
            pastor: { name: "Armando y Blanca Mendoza", photoSrc: "/pastores/ArmandoAldama.jpg" },
        },
        {
            name: "Torreón",
            location: "Coahuila",
            pastor: { name: "Caleb y Adriana Marquez", photoSrc: "/pastores/CalebTorreon.jpg" },
            children: [
                {
                    name: "Jiménez",
                    location: "Chihuahua",
                    pastor: { name: "Alberto y Ericka Mendez", photoSrc: "/pastores/AlbertoJimenez.jpg" },
                },
            ],
        },
    ],
};

const zoomLevels = [0.75, 0.9, 1, 1.1, 1.25];

function PastorPhoto({ pastor, featured = false, showLabel = true }: { pastor: PastorInfo; featured?: boolean; showLabel?: boolean }) {
    return (
        <div className="mx-auto w-full max-w-[8.5rem]">
            <div
                className={`relative mx-auto aspect-square overflow-hidden rounded-[1.25rem] border-2 ${
                    featured ? "border-white/20 bg-white/10" : "border-dashed border-blue-200 bg-slate-50"
                }`}
            >
                {pastor.photoSrc ? (
                    <Image src={pastor.photoSrc} alt={`Foto de ${pastor.name}`} fill sizes="136px" className="object-cover" />
                ) : (
                    <div
                        className={`flex h-full flex-col items-center justify-center p-3 text-center ${
                            featured ? "text-blue-100" : "text-slate-500"
                        }`}
                    >
                        <span className="text-2xl">＋</span>
                        <span className="mt-2 text-[0.62rem] font-black uppercase tracking-[0.16em]">Cargar foto</span>
                    </div>
                )}
            </div>
            {showLabel ? (
                <p className={`mt-2 text-[0.68rem] font-black uppercase tracking-[0.16em] ${featured ? "text-red-100" : "text-red-600"}`}>
                    {pastor.name}
                </p>
            ) : null}
        </div>
    );
}

function ChurchCard({
                        node,
                        step,
                        featured = false,
                        compact = false,
                    }: {
    node: ChurchNode,
    step?: string,
    featured?: boolean,
    compact?: boolean,
}) {
    return (
        <article
            className={`relative mx-auto w-full rounded-[1.6rem] border p-4 text-center shadow-xl transition hover:-translate-y-1 sm:p-5 ${
                featured
                    ? "max-w-2xl border-red-200 bg-blue-950 text-white shadow-blue-950/20"
                    : "max-w-md border-blue-100 bg-white text-slate-950 shadow-blue-950/5"
            }`}
        >
            {step ? (
                <div className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-red-600 text-xs font-black text-white shadow-lg shadow-red-950/20">
                    {step}
                </div>
            ) : null}
            <div className={`grid gap-5 ${compact ? "sm:grid-cols-[7.5rem_1fr] sm:items-center sm:text-left" : ""}`}>
                <PastorPhoto pastor={node.pastor} featured={featured} showLabel={!compact} />
                <div>
                    <p className={`text-xs font-black uppercase tracking-[0.18em] ${featured ? "text-red-200" : "text-red-600"}`}>
                        {node.location}
                    </p>
                    <h3 className={`mt-3 font-black ${featured ? "text-3xl text-white" : "text-xl text-blue-950"}`}>{node.name}</h3>
                    {compact ? (
                        <p className="mt-2 text-sm font-bold text-red-600">{node.pastor.name}</p>
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export default function OrganigramaPage() {
    const [zoom, setZoom] = useState(0.9);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

        updateIsDesktop();
        mediaQuery.addEventListener("change", updateIsDesktop);
        return () => mediaQuery.removeEventListener("change", updateIsDesktop);
    }, []);

    const zoomIn = () => {
        setZoom((currentZoom) => zoomLevels[Math.min(zoomLevels.indexOf(currentZoom) + 1, zoomLevels.length - 1)]);
    };

    const zoomOut = () => {
        setZoom((currentZoom) => zoomLevels[Math.max(zoomLevels.indexOf(currentZoom) - 1, 0)]);
    };

    const resetZoom = () => setZoom(0.9);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-950">
            <Navigation />

            <main id="main-content" className="overflow-hidden">
                {/* Hero */}
                <section className="relative isolate bg-blue-950 px-6 pb-8 pt-32 text-white lg:px-8">
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
                                href="/nuestra-historia"
                                className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md transition hover:bg-white hover:text-blue-950"
                            >
                                Ver nuestra historia →
                            </Link>
                        </div>

                        <div data-aos="fade-up" className="mt-10 max-w-5xl">
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">
                                Organigrama
                            </p>
                            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl sm:leading-none lg:text-7xl">
                                De la raíz al fruto de Chihuahua.
                            </h1>
                            <p className="mt-8 max-w-3xl text-lg leading-8 text-blue-100">
                                La línea principal muestra Prescott, Nogales y Los Mochis hasta llegar a Chihuahua; debajo
                                se integran las obras que se desprenden de Chihuahua y la rama de Torreón hacia Jiménez.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Organigrama */}
                <section className="px-6 pb-20 pt-8 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="rounded-[2.5rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-950/10 sm:p-8 lg:p-10">

                            <div className="rounded-[2.5rem] bg-slate-100 p-4 ring-1 ring-blue-100 sm:p-6 lg:p-8">
                                {/* Controles de zoom (solo escritorio) */}
                                <div className="mb-5 hidden gap-3 rounded-3xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-950/5 lg:flex lg:items-center lg:justify-between">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Vista del organigrama</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-600">
                                            Usa los controles para alejar o acercar y revisarlo mejor en pantalla completa.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            type="button"
                                            onClick={zoomOut}
                                            className="grid h-10 w-10 place-items-center rounded-full bg-blue-950 text-lg font-black text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-900"
                                            aria-label="Alejar organigrama"
                                        >
                                            −
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetZoom}
                                            className="rounded-full border border-blue-100 px-4 py-2 text-sm font-black text-blue-950 transition hover:border-red-200 hover:text-red-600"
                                        >
                                            {Math.round(zoom * 100)}%
                                        </button>
                                        <button
                                            type="button"
                                            onClick={zoomIn}
                                            className="grid h-10 w-10 place-items-center rounded-full bg-red-600 text-lg font-black text-white shadow-lg shadow-red-950/20 transition hover:bg-red-500"
                                            aria-label="Acercar organigrama"
                                        >
                                            ＋
                                        </button>
                                    </div>
                                </div>

                                <div className="rounded-[2rem] bg-white/70 p-4 shadow-inner shadow-blue-950/5 lg:max-h-[82vh] lg:overflow-auto">
                                    <div
                                        className="relative mx-auto w-full transition-transform duration-300 lg:min-w-[980px] lg:max-w-5xl"
                                        style={isDesktop ? { transform: `scale(${zoom})`, transformOrigin: "top center" } : undefined}
                                    >
                                        <div
                                            className="absolute left-1/2 top-10 hidden h-[31rem] w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-red-600 via-blue-950 to-blue-950/20 md:block"
                                            aria-hidden="true"
                                        />

                                        <div className="relative z-10 grid gap-0">
                                            {rootPath.map((node, index) => (
                                                <div key={node.name} data-aos="zoom-in" className="flex flex-col items-center">
                                                    <ChurchCard node={node} step={String(index + 1).padStart(2, "0")} compact />
                                                    <div className="flex h-14 flex-col items-center justify-center" aria-hidden="true">
                                                        <span className="h-full w-1 bg-blue-950/20" />
                                                        <span className="-mt-3 grid h-8 w-8 place-items-center rounded-full bg-red-600 text-white shadow-lg shadow-red-950/20">
                                                            ↓
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}

                                            <div data-aos="zoom-in" className="flex flex-col items-center">
                                                <ChurchCard node={chihuahuaTree} step="04" featured />
                                                <div className="h-12 w-1 bg-blue-950/20" aria-hidden="true" />
                                                <div className="mb-8 h-1 w-full max-w-5xl rounded-full bg-blue-950/20" aria-hidden="true" />
                                            </div>
                                        </div>

                                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                            {chihuahuaTree.children?.map((branch, index) => (
                                                <div key={branch.name} data-aos="zoom-in" className="flex flex-col items-center">
                                                    <ChurchCard node={branch} step={String(index + 1).padStart(2, "0")} />

                                                    {branch.children?.length ? (
                                                        <div className="mt-5 w-full">
                                                            <div className="mx-auto h-10 w-1 bg-blue-950/20" aria-hidden="true" />
                                                            <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.18em] text-blue-950">
                                                                Se desprende
                                                            </p>
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}