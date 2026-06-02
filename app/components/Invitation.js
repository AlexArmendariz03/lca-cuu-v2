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
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl" data-aos="fade-left">
          <div className="overflow-hidden rounded-3xl bg-white text-blue-950">
            <div className="bg-gradient-to-r from-blue-950 to-blue-900 p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-300">Horarios de servicios</p>
              <h3 className="mt-2 text-3xl font-black">Toda la semana en un solo card</h3>
              <p className="mt-3 text-sm font-semibold text-blue-100">Ordenado por día, claro y fácil de leer.</p>
            </div>
            <div className="divide-y divide-blue-100 p-4">
              {[
                ["Domingo", [["9:45 AM", "Escuela dominical"], ["11:00 AM", "Servicio matutino"], ["6:00 PM", "Servicio de milagros"]]],
                ["Miércoles", [["7:00 PM", "Reunión entre semana"]]],
                ["Sábado", [["7:00 PM", "Conciertos"]]],
              ].map(([day, services]) => (
                <div key={day} className="grid gap-4 py-4 first:pt-0 last:pb-0 md:grid-cols-[140px_1fr] md:items-center">
                  <p className="inline-flex w-fit rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">{day}</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {services.map(([time, name]) => (
                      <div key={`${day}-${time}`} className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100">
                        <p className="text-2xl font-black leading-none text-blue-950">{time}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-600">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
