"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function MapPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center p-4">
        <Loader2 className="animate-spin text-zinc-500" size={40} />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center w-full p-4 md:p-6 gap-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Mapa
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        Visualiza las zonas afectadas por el sismo en Venezuela.
      </p>

      <div className="w-full max-w-250 aspect-video relative bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-500 z-10">
            <Loader2 className="animate-spin" size={40} />
            <p className="text-sm font-medium">Cargando mapa interactivo...</p>
          </div>
        )}

        <iframe
          src="https://www.dw.com/webapi/iframes/widget/es/77702031"
          title="Mapa de sismos"
          className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}