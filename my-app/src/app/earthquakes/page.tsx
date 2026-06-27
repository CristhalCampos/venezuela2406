"use client";

import { useState, useEffect } from "react";

export default function EarthquakesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const earthquakes = [
    { id: 1, location: "54 km N of El Limón, Venezuela", date: "2026-06-26T18:16:00", magnitude: 4.7 },
    { id: 2, location: "17 km WSW of Morón, Venezuela", date: "2026-06-26T00:19:00", magnitude: 4.4 },
    { id: 3, location: "5 km NE of Guatire, Venezuela", date: "2026-06-25T01:48:00", magnitude: 4.4 },
    { id: 4, location: "13 km N of Caucagüito, Venezuela", date: "2026-06-24T18:23:00", magnitude: 4.5 },
    { id: 5, location: "28 km SE of Yumare, Venezuela", date: "2026-06-24T18:05:00", magnitude: 7.5 },
    { id: 6, location: "23 km SE of Yumare, Venezuela", date: "2026-06-24T18:04:50", magnitude: 7.2 },
  ];

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInMs = now.getTime() - past.getTime();
    
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) return `hace ${days} día${days > 1 ? 's' : ''} y ${hours} h`;
    if (hours > 0) return `hace ${hours} h y ${minutes} min`;
    return `hace ${minutes} min`;
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center p-4 md:p-6 gap-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Sismos</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Monitoreo de movimientos sísmicos en Venezuela.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {earthquakes.map((earthquake) => (
          <div key={earthquake.id} className="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-blue-500 transition-all">
            {/* Badge de Magnitud */}
            <div className="w-16 h-16 flex items-center justify-center bg-red-600 text-white font-bold text-xl rounded-md mr-4 shrink-0">
              {earthquake.magnitude}
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{earthquake.location}</h3>
              <p>{isMounted ? getTimeAgo(earthquake.date) : "Cargando..."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}