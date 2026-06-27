export default function MapPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-4 md:p-6 gap-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Mapa
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        Visualiza las zonas afectadas por el sismo en Venezuela.
      </p>
      <div className="w-full max-w-250 aspect-video">
        <iframe
          src="https://www.dw.com/webapi/iframes/widget/es/77702031"
          title="Mapa de sismos"
          className="w-full h-full rounded-lg shadow-md"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}