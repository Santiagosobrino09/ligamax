"use client";

import { useState } from "react";

export default function Home() {
  const partidos = [
    {
      id: 1,
      titulo: "Real Madrid vs. Manchester City",
      liga: "Champions League",
      estado: "EN VIVO",
      marcador: "2 - 2",
      calidad: "4K",
      video:"https://www.youtube.com/embed/LlzG9LIqqvg"
    },
    {
      id: 2,
      titulo: "Junior FC vs. Atlético Nacional",
      liga: "Liga BetPlay",
      estado: "EN VIVO",
      marcador: "1 - 0",
      calidad: "Full HD",
      video: "https://www.youtube.com/embed/EW3atK2GKiY",
    },
    {
      id: 3,
      titulo: "Lakers vs. Golden State Warriors",
      liga: "NBA",
      estado: "DESTACADO",
      marcador: "114 - 110",
      calidad: "HD",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      titulo: "Gran Premio de Mónaco",
      liga: "Fórmula 1",
      estado: "REPETICIÓN",
      marcador: "Finalizado",
      calidad: "4K",
      video: "https://www.youtube.com/embed/ipOT9ruRobc",
    },
  ];

  const planes = [
    {
      Nombre: "Standard",
      Precio: "$29.900",
      detalles: ["Partido en vivo", "Calidad HD", "1 dispositivo"],
    },
    {
      Nombre: "Premium",
      Precio: "$49.900",
      detalles: [
        "Partido en vivo y repeticiones",
        "Calidad 4K",
        "Hasta 4 dispositivos",
        "Estadísticas en tiempo real",
      ],
    },
  ];

  const [partidoActual, setPartidoActual] = useState(partidos[0]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
        <span className="text-2xl font-bold text-white">
          Liga<span className="text-emerald-400">max</span>
        </span>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#reproductor" className="hover:text-emerald-400">
            En vivo
          </a>
          <a href="#cartelera" className="hover:text-emerald-400">
            Partidos
          </a>
          <a href="#planes" className="hover:text-emerald-400">
            Planes
          </a>
        </nav>

        <a
          href="/login"
          className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Iniciar sesión
        </a>
      </header>

      <section id="reproductor" className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Todas las ligas.{" "}
            <span className="text-emerald-400">Una sola suscripción.</span>
          </h1>
          <p className="mt-3 text-slate-300">
            Mira los mejores partidos en vivo o cuando quieras, con marcadores
            en tiempo real.
          </p>
        </div>

        {/* Caja del video */}
<div className="overflow-hidden rounded-xl border border-slate-800 bg-black">
  <div className="aspect-video w-full bg-black">
    <iframe
      key={partidoActual.video}
      className="h-full w-full"
      src={`${partidoActual.video}?autoplay=1&mute=1`}
      title={partidoActual.titulo}
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Datos del partido que se está reproduciendo */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-bold">
              {partidoActual.estado}
            </span>
            <span className="ml-3 text-sm text-slate-400">
              {partidoActual.liga}
            </span>
            <h2 className="mt-1 text-2xl font-bold">{partidoActual.titulo}</h2>
          </div>

          <div className="text-right">
            <p className="text-2xl font-extrabold text-emerald-400">
              {partidoActual.marcador}
            </p>
            <p className="text-xs text-slate-400">
              Calidad {partidoActual.calidad}
            </p>
          </div>
        </div>
      </section>

      {/* Lista de partidos para cambiar el video */}
      <section id="cartelera" className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold">Partidos disponibles</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {partidos.map((partido) => (
            <div
              key={partido.id}
              onClick={() => setPartidoActual(partido)}
              className={`cursor-pointer rounded-xl border p-5 transition ${
                partidoActual.id === partido.id
                  ? "border-emerald-500 bg-slate-900"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{partido.liga}</span>
                <span className="font-semibold text-emerald-400">
                  {partido.estado}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-lg font-bold">{partido.titulo}</h3>
                <span className="rounded bg-slate-800 px-2.5 py-1 text-sm font-bold">
                  {partido.marcador}
                </span>
              </div>

              <p className="mt-3 text-xs text-emerald-400">
                {partidoActual.id === partido.id
                  ? "Reproduciendo ahora"
                  : "Clic para ver este partido →"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de planes. */}
      <section id="planes" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">Elige tu plan</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {planes.map((plan) => (
            <div
              key={plan.Nombre}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-bold">{plan.Nombre}</h3>
              <p className="mt-2 text-3xl font-extrabold text-emerald-400">
                {plan.Precio}
                <span className="text-base font-normal text-slate-400">
                  /mes
                </span>
              </p>
              <ul className="mt-6 space-y-2 text-slate-300">
                {plan.detalles.map((d) => (
                  <li key={d}>✓ {d}</li>
                ))}
              </ul>
              <a
                href="/login"
                className="mt-6 block rounded-lg bg-emerald-500 py-2.5 text-center font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Seleccionar plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        Ligamax - Proyecto de desarrollo web
      </footer>
    </main>
  );
}