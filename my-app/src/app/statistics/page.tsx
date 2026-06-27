export default function StatisticsPage() {
  const stats = [
    { title: "Reportes Totales", value: "96.615", color: "text-blue-600" },
    { title: "Personas Únicas", value: "93.827", color: "text-indigo-600" },
    { title: "Sin Localizar", value: "77.654", color: "text-red-600" },
    { title: "Localizados", value: "18.961", color: "text-green-600" },
    { title: "Heridos", value: "4.500", color: "text-orange-500" },
    { title: "Fallecidos", value: "920", color: "text-zinc-900 dark:text-zinc-400" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center p-4 md:p-6 gap-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Estadísticas
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        Resumen detallado de la situación tras el sismo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
          >
            <h3 className="text-zinc-500 dark:text-zinc-400 font-medium text-sm uppercase tracking-wider">
              {stat.title}
            </h3>
            <p className={`text-4xl font-extrabold mt-2 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}