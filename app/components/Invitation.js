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
          <div className="mb-5">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-300">Horarios de servicios</p>
            <h3 className="mt-2 text-2xl font-black">Elige la reunión ideal para tu familia</h3>
          </div>
          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            <div className="flex min-h-[260px] flex-col rounded-3xl bg-white p-6 text-blue-950">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">Domingo</p>
              <h4 className="mt-3 text-2xl font-black">Servicios dominicales</h4>
              <div className="mt-5 grid flex-1 gap-3">
                {[
                  ["9:45 AM", "Escuela dominical"],
                  ["11:00 AM", "Servicio matutino"],
                  ["6:00 PM", "Servicio de milagros"],
                ].map(([time, name]) => (
                  <div key={time} className="flex items-center justify-between gap-4 rounded-2xl bg-blue-50 px-4 py-3">
                    <p className="text-xl font-black text-blue-950">{time}</p>
                    <p className="text-right text-sm font-semibold text-slate-600">{name}</p>
                  </div>
                ))}
              </div>
            </div>
            {[
              ["Miércoles", "7:00 PM", "Reunión entre semana"],
              ["Sábado", "7:00 PM", "Conciertos"],
            ].map(([day, time, name]) => (
              <div key={`${day}-${time}-${name}`} className="flex min-h-[260px] flex-col rounded-3xl bg-white p-6 text-blue-950">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">{day}</p>
                <h4 className="mt-3 text-2xl font-black">{name}</h4>
                <div className="mt-auto pt-10">
                  <p className="text-5xl font-black tracking-tight text-blue-950">{time}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-500">Te esperamos en casa</p>
                </div>
              </div>
            ))}
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
