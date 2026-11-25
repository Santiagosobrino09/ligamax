"use client";

import { useState } from "react"

export default function Login() {
    const [correo, setcorreo] = useState("");
    const [clave, setclave] = useState("");

    function enviar(e: React.FormEvent) {
    e.preventDefault();
    // Aqui se conectara con la api de autentificacion (backend)
    console.log("Intento de inicio de sección:", correo);
    } 

return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <form 
        onSubmit={enviar} 
        className="w-full max-w-sm rounded-2x1 border border-slate-700 bg-slate-900 p-8"
    >
        <h1 className="mb-6 text-center text-2x1 font-bold">Iniciar sesión</h1>
        
        <label className="mb-1 block text-sm text-slate-300">Correo electrónico</label>
        <input
            type="email"
            value={correo}
            onChange={(e) => setcorreo(e.target.value)}
            required
            className="mb-4 w-full rounded-lg bg-slate-800 px-3 py-2 outline-none"

                />
        <label className="mb-1 block text-sm text-slate-300">Contraseña</label>
                <input
                    type="password"
                    value={clave}
                    onChange={(e) => setclave(e.target.value)}
                    required
                    className="mb-6 w-full rounded-lg bg-slate-800 px-3 py-2 outline-none"  
                />

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
