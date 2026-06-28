import { Person } from "@/services/personService";

export function PersonCard({ person }: { person: Person }) {
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-zinc-800 flex gap-4 items-start">
      {/* Foto o Inicial */}
      <div className="flex shrink-0">
        {person.photo_url ? (
          <img src={person.photo_url} alt={person.full_name} className="w-16 h-16 rounded-full object-cover border-2 border-zinc-200" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-zinc-300 dark:bg-zinc-600 flex items-center justify-center text-2xl font-bold text-zinc-700 dark:text-zinc-200 border-2 border-zinc-400">
            {getInitial(person.full_name)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg">{person.full_name}</h4>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 text-[10px] rounded-full uppercase ${person.status === 'encontrado' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {person.status}
            </span>
            <span className={`w-3 h-3 rounded-full ${person.sex === 'F' ? 'bg-red-500' : 'bg-blue-500'}`} title={person.sex} />
          </div>
        </div>
        
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {person.age} años | CI: {person.id_number}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Lugar de residencia: {person.origin}</p>

        {person.status === 'encontrado' && person.current_location && (
          <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded border border-blue-200">
            <span className="font-semibold text-[10px] uppercase block">Ubicación actual:</span>
            <p className="text-sm">{person.current_location}</p>
          </div>
        )}
      </div>
    </div>
  );
}