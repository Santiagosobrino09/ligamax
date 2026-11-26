"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CODIGO_ACCESO = "LIGAMAX2026";

// A dónde va el usuario después de iniciar sesión.
// "/" es la página principal. Si prefieres el dashboard, cámbialo a "/dashboard".
const DESTINO = "/dashboard";

export default function Login() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState("");

  // Si ya inició sesión antes, no tiene sentido pedirle el código otra vez.
  useEffect(() => {
    if (sessionStorage.getItem("ligamax_acceso") === "ok") {
      router.replace(DESTINO);
    }
  }, [router]);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (codigo.trim() === CODIGO_ACCESO) {
      sessionStorage.setItem("ligamax_acceso", "ok");
      router.push(DESTINO);
    } else {
      setError("Código incorrecto. Revísalo e inténtalo de nuevo.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-slate-400 transition-colors hover:text-emerald-400"
        >
          ← Volver al inicio
        </Link>

        <form
          onSubmit={enviar}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl"
        >
          <p className="text-center text-2xl font-bold">
            Liga<span className="text-emerald-400">max</span>
          </p>
          <h1 className="mt-4 text-center text-xl font-semibold">
            Iniciar sesión
          </h1>
          <p className="mb-6 mt-1 text-center text-sm text-slate-400">
            Ingresa tu código de acceso para ver los partidos.
          </p>

          <label htmlFor="codigo" className="mb-1 block text-sm text-slate-300">
            Código de acceso
          </label>

          <div className="relative">
            <input
              id="codigo"
              type={mostrar ? "text" : "password"}
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value);
                setError("");
              }}
              required
              autoFocus
              autoComplete="off"
              aria-invalid={error !== ""}
              aria-describedby={error ? "codigo-error" : undefined}
              className={`w-full rounded-lg bg-slate-800 px-3 py-2 pr-20 outline-none ring-1 focus:ring-2 ${
                error
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-slate-700 focus:ring-emerald-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setMostrar(!mostrar)}
              className="absolute inset-y-0 right-3 text-xs text-slate-400 transition-colors hover:text-emerald-400"
            >
              {mostrar ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          {error && (
            <p
              id="codigo-error"
              role="alert"
              className="mt-2 text-sm text-red-400"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-emerald-500 py-2 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}