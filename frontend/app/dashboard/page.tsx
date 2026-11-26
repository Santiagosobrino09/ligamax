import Link from "next/link";
import { partidos } from "@/app/partidos";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-6 text-white">
      <header className="mb-10 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Liga<span className="text-emerald-400">max</span>
        </Link>
        <span className="text-sm text-slate-400">Plan Premium</span>
      </header>

      <h1 className="mb-6 text-3xl font-bold">Partidos</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {partidos.map((p) => (
          // Cada tarjeta lleva a la página principal con ese partido ya cargado en el reproductor
          <Link
            key={p.id}
            href={`/?partido=${p.id}#reproductor`}
            className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-colors hover:border-emerald-500"
          >
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{p.liga}</span>
              <span className="text-xs">Calidad {p.calidad}</span>
            </div>

            <h2 className="mt-1 text-xl font-bold">{p.titulo}</h2>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-300">{p.marcador}</span>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-950">
                {p.estado}
              </span>
            </div>

            <p className="mt-4 text-sm text-emerald-400 transition-transform group-hover:translate-x-1">
              Ver partido →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
