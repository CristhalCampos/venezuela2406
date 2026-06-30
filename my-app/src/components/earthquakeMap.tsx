"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Earthquake } from '@/app/earthquakes/page';

// Definimos el icono fuera o dentro, pero asegurando que no ejecute lógica de DOM al importar
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Map({ earthquakes }: { earthquakes: Earthquake[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si no estamos en el cliente, no renderizamos el MapContainer
  if (!isClient) return <div className="h-full w-full bg-zinc-100 animate-pulse" />;

  return (
    <MapContainer center={[10.48, -66.90]} zoom={6} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map(eq => (
        <Marker key={eq.id} position={[eq.lat, eq.lon] as [number, number]} icon={icon}>
          <Popup>
            <div className="text-xs">
              <p className="font-bold">Mag: {eq.magnitude}</p>
              <p>{eq.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}