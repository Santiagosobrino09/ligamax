
"use client";

import { useState } from "react";
import Link from "next/link";
import { partidos } from "@/app/partidos";

export default function Dashboard() {
  const [partidoActual, setPartidoActual] = useState(partidos[0]);

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-6 text-white">
      <header className="mb-10 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Liga<span className="text-emerald-400">max</span>
        </Link>

        <span className="text-sm text-slate-400">
          Plan Premium
        </span>
      </header>

      <h1 className="mb-6 text-3xl font-bold">
        Partidos
      </h1>

      {/* Reproductor */}
      <section className="mb-10">
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <div className="aspect-video w-full">
            <iframe

              key={partidoActual.id}
              src={partidoActual.video}
              title={partidoActual.titulo}
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen
            />
          </div>

          <div className="p-5">
            <p className="text-sm text-emerald-400">
              {partidoActual.liga} · {partidoActual.calidad}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {partidoActual.titulo}
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-slate-300">
                {partidoActual.marcador}
              </span>

              <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-950">
                {partidoActual.estado}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de partidos */}
      <h2 className="mb-5 text-2xl font-bold">
        Todos los partidos
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {partidos.map((p) => (
          <button
            key={p.id}
            onClick={() => setPartidoActual(p)}
            className={`group rounded-2xl border p-6 text-left transition-colors ${
              partidoActual.id === p.id
                ? "border-emerald-500 bg-slate-800"
                : "border-slate-700 bg-slate-900 hover:border-emerald-500"
            }`}
          >
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{p.liga}</span>
              <span className="text-xs">
                Calidad {p.calidad}
              </span>
            </div>

            <h3 className="mt-2 text-xl font-bold">
              {p.titulo}
            </h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-300">
                {p.marcador}
              </span>

              <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-950">
                {p.estado}
              </span>
            </div>

            <p className="mt-4 text-sm text-emerald-400">
              {partidoActual.id === p.id
                ? "Reproduciendo"
                : "Ver partido →"}
            </p>
          </button>
        ))}
      </div>
    </main>
  );
}
