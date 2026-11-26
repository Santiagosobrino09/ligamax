"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Dashboard() {
    const router = useRouter();
  const [autorizado, setAutorizado] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ligamax_acceso") === "ok") {
      setAutorizado(true);
    } else {
      router.replace("/login");
    }
  }, [router]);
    const partidos = [
        { id: 1, liga: "LaLiga", local:"Real Madrid", visitante: "Barcelona", Hora: "15:00", estado: "En vivo" },
        { id: 2, liga: "Premier League", local:"Liverpool", visitante: "Manchester City", Hora: "14:00", estado: "Próximo" },
        { id: 3, liga: "Liga Betplay", local:"Junior", visitante: "Nacional", Hora: "16:00", estado: "Próximo" },
        { id: 4, liga: "Serie A", local:"Juventus", visitante: "Inter de Milán", Hora: "17:00", estado: "Próximo" }
    ];
    if (!autorizado) return null;
    return (
     <main className="min-h-screen bg-slate-950 px-8 text-white">
        <header className="mb-10 flex items-center justify-between">
            <span className="text-2xl font-bold"> LigaMax</span>
            <span className="text-sm text-slate-400">Plan Premium</span>
        </header>

        <h1 className="mb-6 text-3xl font-bold">Partidos</h1>

        <div className="grid gap-4 md:grid-cols-2">
          {partidos.map((p) => (
            <div key={p.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">{p.liga}</p>
              <h2 className="mt-1 text-xl font-bold">
                          {p.local} vs {p.visitante}
                            </h2>
                             <div className="mt-4 flex items-center justify-between">
                                 <span className="text-slate-300">{p.Hora}</span>
                                 <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-950">{p.estado}</span>
                             </div>
                            </div>
                       ))}
      </div>      
             </main>
          ); 
}

