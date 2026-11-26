
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
        "Estadísticas en tiempo real",
      ],
    },
  ];

  const beneficios = [
    {
      titulo: "Partidos en vivo",
      descripcion:
        "Disfruta de los eventos deportivos disponibles desde la plataforma.",
      icono: "⚽",
    },
    {
      titulo: "Varios deportes",
      descripcion:
        "Encuentra contenido de fútbol, baloncesto y otras competencias.",
      icono: "🏆",
    },
    {
      titulo: "Buena calidad",
      descripcion:
        "Disfruta de tus eventos con opciones de calidad HD y 4K.",
      icono: "📺",
    },
    {
      titulo: "Repeticiones",
      descripcion:
        "Vuelve a disfrutar de los eventos disponibles cuando quieras.",
      icono: "▶️",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
        <span className="text-2xl font-bold text-white">
          Liga<span className="text-emerald-400">max</span>
        </span>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#beneficios" className="hover:text-emerald-400">
            Beneficios
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

      {/* Presentación principal */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Todas las ligas.{" "}
          <span className="text-emerald-400">
            Una sola suscripción.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Mira los mejores eventos deportivos en un solo lugar.
          Disfruta de tus deportes favoritos con diferentes opciones
          de suscripción.
        </p>

      </section>

      {/* Beneficios */}
      <section
        id="beneficios"
        className="mx-auto max-w-5xl px-6 py-12"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">
          ¿Qué encontrarás en LigaMax?
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.titulo}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <span className="text-4xl">
                {beneficio.icono}
              </span>

              <h3 className="mt-4 text-lg font-bold">
                {beneficio.titulo}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section
        id="planes"
        className="mx-auto max-w-4xl px-6 py-16"
      >
        <h2 className="mb-10 text-center text-3xl font-bold">
          Elige tu plan
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {planes.map((plan) => (
            <div
              key={plan.Nombre}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-bold">
                {plan.Nombre}
              </h3>

              <p className="mt-2 text-3xl font-extrabold text-emerald-400">
                {plan.Precio}
                <span className="text-base font-normal text-slate-400">
                  /mes
                </span>
              </p>

              <ul className="mt-6 space-y-2 text-slate-300">
                {plan.detalles.map((detalle) => (
                  <li key={detalle}>✓ {detalle}</li>
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

      {/* Pie de página */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        LigaMax - Proyecto de desarrollo web
      </footer>
    </main>
  );
}
