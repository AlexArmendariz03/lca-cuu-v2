import React from "react";


export default function Invitation(){
  return(
    <div className="bg-slate-50 text-slate-800">
      <section id="quienes-somos" data-aos="fade-up" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-950">Quiénes somos</h2>
        <p className="mt-4 text-lg">
          Somos una iglesia cristiana en Chihuahua comprometida con predicar el evangelio,
          formar discípulos y servir a nuestra comunidad con amor práctico.
        </p>
      </section>

      <section id="ministerios" data-aos="fade-up" className="mx-auto grid max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        {[
          "Jóvenes y adolescentes",
          "Ministerio de niños",
          "Nuevos conversos",
          "Alabanza y adoración",
          "Grupos en casa",
          "Servicio comunitario",
        ].map((item) => (
          <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-600">
              Espacios de crecimiento espiritual, acompañamiento y participación activa.
            </p>
          </article>
        ))}
      </section>

      <section id="eventos" data-aos="fade-up" className="bg-blue-950 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Horarios de reunión</h2>
            <ul className="mt-4 space-y-2 text-lg">
              <li>Domingo · 11:00 AM - Servicio general</li>
              <li>Miércoles · 7:00 PM - Estudio bíblico</li>
              <li>Viernes · 7:30 PM - Reunión de jóvenes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Próximos eventos</h2>
            <ul className="mt-4 space-y-2 text-lg">
              <li>Campaña de oración mensual</li>
              <li>Conferencia familiar</li>
              <li>Jornada de ayuda comunitaria</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contacto" data-aos="fade-up" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-950">Información de contacto</h2>
        <div className="mt-4 grid gap-3 text-lg md:grid-cols-2">
          <p><strong>Dirección:</strong> Chihuahua, Chihuahua, México.</p>
          <p><strong>Teléfono:</strong> +52 (614) 000 0000</p>
          <p><strong>Correo:</strong> contacto@lacasadelalfarero.org</p>
          <p>
            <strong>YouTube:</strong>{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.youtube.com/@LaCasadelAlfareroChihuahuaChih"
            >
              @LaCasadelAlfareroChihuahuaChih
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
