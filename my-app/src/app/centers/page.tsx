"use client";

import { useEffect, useState } from "react";

interface Center {
  id: number;
  name: string;
  address: string;
  schedule: string;
}

export default function CentersPage() {
  // const [centers, setCenters] = useState<Center[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getCenters();
  //       setCenters(data);
  //     } catch (error) {
  //       console.error("Error al cargar centros:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p className="text-zinc-500">Cargando...</p>;

  return (
    <div className="grid gap-4 mt-6">
      {/* <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100">Centros de Acopio</h3>
      {centers.map((center) => (
        <div key={center.id} className="p-4 bg-white dark:bg-zinc-800 border rounded-lg shadow-sm">
          <h4 className="font-bold text-blue-600">{center.name}</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{center.address}</p>
          <p className="text-xs text-zinc-500 mt-2 italic">Horario: {center.schedule}</p>
        </div>
      ))} */}
    </div>
  );
}