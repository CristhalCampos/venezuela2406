export default function EarthquakesPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-64px)] p-4 md:p-6 gap-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Sismos
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6">
        Consulta los sismos recientes en Venezuela y sus alrededores.
      </p>
    </div>
  );
}