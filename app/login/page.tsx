"use client";

import { useState } from "react"
import { useRouter } from "next/navigation";

const CODIGO_ACCESO = "LIGAMAX2026";

export default function Login() {
    const router = useRouter();
    const [codigo, setCodigo] = useState("");
    const [error, setError] = useState("");

    function enviar(e: React.FormEvent) {
  e.preventDefault();
  if (codigo === CODIGO_ACCESO) {
    sessionStorage.setItem("ligamax_acceso", "ok");
    router.push("/dashboard");
  } else {
    setError("Código incorrecto");
  }
}

return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <form 
        onSubmit={enviar} 
        className="w-full max-w-sm rounded-2x1 border border-slate-700 bg-slate-900 p-8"
    >
        <h1 className="mb-6 text-center text-2x1 font-bold">Iniciar sesión</h1>
        
        <label className="mb-1 block text-sm text-slate-300">Código de acceso</label>
<input
  type="password"
  value={codigo}
  onChange={(e) => setCodigo(e.target.value)}
  required
  className="mb-2 w-full rounded-lg bg-slate-800 px-3 py-2 outline-none"
/>
{error && <p className="mb-4 text-sm text-red-400">{error}</p>}

            <button
                type="submit"
                className="w-full rouded-lg bg-emerald-500 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
            >
                Iniciar sesión
            </button>
        </form>
    </main>
);

}
