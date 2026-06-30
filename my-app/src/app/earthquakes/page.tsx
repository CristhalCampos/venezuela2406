"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/earthquakeMap'), {
  ssr: false,
  loading: () => <div className="h-64 w-full bg-zinc-100 animate-pulse rounded-lg" />
});

export interface Earthquake {
  id: string;
  location: string;
  date: string;
  magnitude: number;
  lat: number;
  lon: number;
  depth: number;
  source: string;
}

export default function EarthquakesPage() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const data: Earthquake[] = [
      { id: "1", location: "27 km N of Caraballeda, Venezuela", date: "2026-06-29T11:01:03.516Z", magnitude: 4.6, lat: 10.8601, lon: -66.8435, depth: 10, source: "USGS" },
      { id: "2", location: "19 km WSW of Morón, Venezuela", date: "2026-06-28T09:33:58.852Z", magnitude: 4.3, lat: 10.4497, lon: -68.3766, depth: 10, source: "USGS" },
      { id: "3", location: "20 km W of Boca de Aroa, Venezuela", date: "2026-06-28T08:46:10.376Z", magnitude: 4.5, lat: 10.6806, lon: -68.4901, depth: 10, source: "USGS" },
      { id: "4", location: "35 km NNE of El Limón, Venezuela", date: "2026-06-27T19:20:36.606Z", magnitude: 4.8, lat: 10.6023, lon: -67.5112, depth: 10, source: "USGS" },
      { id: "5", location: "54 km N of El Limón, Venezuela", date: "2026-06-26T22:16:11.931Z", magnitude: 4.7, lat: 10.8, lon: -67.5993, depth: 10, source: "USGS" },
      { id: "6", location: "17 km WSW of Morón, Venezuela", date: "2026-06-26T04:19:30.378Z", magnitude: 4.4, lat: 10.4537, lon: -68.3607, depth: 10, source: "USGS" },
      { id: "7", location: "5 km NE of Guatire, Venezuela", date: "2026-06-25T05:48:23.136Z", magnitude: 4.4, lat: 10.5111, lon: -66.5057, depth: 10, source: "USGS" },
      { id: "8", location: "12 km NNE of Caucagüito, Venezuela", date: "2026-06-24T22:23:53.774Z", magnitude: 4.5, lat: 10.5911, lon: -66.6976, depth: 10, source: "USGS" },
      { id: "9", location: "28 km SE of Yumare, Venezuela", date: "2026-06-24T22:05:11.566Z", magnitude: 7.5, lat: 10.4351, lon: -68.4716, depth: 10, source: "USGS" },
      { id: "10", location: "23 km SE of Yumare, Venezuela", date: "2026-06-24T22:04:33.389Z", magnitude: 7.2, lat: 10.436, lon: -68.5277, depth: 20.294, source: "USGS" }
    ];
    setEarthquakes(data);
  }, []);

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
    <div className="flex flex-col flex-1 items-center justify-center p-4 md:p-6 gap-2">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Sismos</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
        Monitoreo de movimientos sísmicos en Venezuela.
      </p>

      {/* Mapa */}
      <div className="h-96 w-full rounded-2xl overflow-hidden border border-zinc-200">
        <Map earthquakes={earthquakes} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {earthquakes.map((earthquake) => (
          <div key={earthquake.id} className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-blue-500 transition-all flex gap-4">
            <div className="flex flex-col items-center justify-center bg-red-700 px-3 py-2 rounded-lg">
              <span className="text-2xl font-black text-white">{earthquake.magnitude}</span>
              <span className="text-[10px] text-zinc-300 font-bold uppercase">Prof: {earthquake.depth}km</span>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm leading-tight mb-1">
                {earthquake.location}
              </h3>
              <div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  {earthquake.source}. {isMounted ? getTimeAgo(earthquake.date) : "Cargando..."}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}