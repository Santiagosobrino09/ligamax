import Image from "next/image";

export default function Home() {
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
        "Estadisticas en tiempo real",
      ],
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between px-8 py-5">
        <span className="text-2xl font-bold"> Ligamax</span>
        <a
          href="/login"
          className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Iniciar sesión
        </a>
      </header>

      <section className="mx-auto max-w-3x1 px-8 py-24 text-center">
        <h1 className="text-5x1 font-extrabold" >
          Todas las ligas.<span className="text-emerald-400"> Un sola suscripción.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Mira los mejores partidos en vivo o cuando quieras, con marcadores y estadisticas en tiempo real.
          </p>
          <a
            href="/planes"
            className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Ver planes
          </a>
      </section>

      <section id="planes" className="mx-auto max-w-4x1 px-8 pb-24">
        <h2 className="mb-10 text-center text-3x1 font-bold">Elige tu plan</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {planes.map((plan) => (
            <div
              key={plan.Nombre}
              className="rounded-2x1 border border-slate-700 bg-slate-900 p-8"
            >
              <h3 className="text-2x1 font-bold">{plan.Nombre}</h3>
              <p className="mt-2 text-3x1 font-extrabold text-emerald-400">
                {plan.Precio}
                <span className="text-base font-normal text-slate-400">/mes</span>
              </p>
              <ul className="mt-6 space-y-2 text-slate-300">
                {plan.detalles.map((d) => (
                  <li key={d}>✓ {d}</li>
                ))}
              </ul>
              </div>
          ))}
        </div>
      </section>
    </main>
  );
}
