import Image from "next/image";
import React from "react";

export default function Invitation() {
  return (
    <section id="servicios" className="relative isolate overflow-hidden bg-blue-950 px-6 py-24 text-white lg:px-8">
      <Image
        src="/nestylServicios.webp"
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-35"
        alt="Invitación a los servicios de La Casa del Alfarero"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/50" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">Te invitamos</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Visítanos este fin de semana.</h2>
          <p className="mt-6 text-lg text-blue-100">
            Aparta un momento para adorar, recibir palabra y conectar con una familia espiritual. Tenemos un lugar preparado para ti.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl" data-aos="fade-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 text-blue-950">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">Domingo</p>
              <h3 className="mt-3 text-3xl font-black">11:00 AM</h3>
              <p className="mt-2 text-slate-600">Servicio familiar</p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-blue-950">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">Miércoles</p>
              <h3 className="mt-3 text-3xl font-black">7:00 PM</h3>
              <p className="mt-2 text-slate-600">Reunión entre semana</p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@LaCasadelAlfareroChihuahuaChih"
            className="mt-6 flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-center font-black text-white shadow-xl shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-500"
          >
            Ver mensajes en YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
