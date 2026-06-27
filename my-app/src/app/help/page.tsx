export default function HelpPage() {
  const psychologicalSupport = [
    {
      organization: "Grupo Social CESAP - UNIANDES",
      phones: ["0416-6119284", "0412-2668716", "0416-6119283", "0424-7481889", "0414-7513969", "0424-1350179"],
      schedule: "8:00am a 5:00pm"
    },
    {
      organization: "PsicoLínea",
      phones: ["0414-1217882", "0424-1723981"],
      schedule: "8:00am a 5:00pm"
    },
    {
      organization: "Tinta Violeta",
      phones: ["0412-6924062", "0412-6924073"],
      schedule: "Atención remota"
    },
    {
      organization: "Federación de Psicólogos de Venezuela",
      phones: ["0212-4163116", "0212-41631118", "0424-2907338"],
      schedule: ""
    },
    {
      organization: "Psicólogos Sin Fronteras",
      phones: ["0412-9270304", "0414-7225080"],
      schedule: ""
    },
    {
      organization: "ODISEF",
      phones: ["0422-0209179"],
      schedule: ""
    },
    {
      organization: "FUNDANA",
      phones: ["0422-1257897", "0424-2643825", "0414-1553540", "0412-3529560", "0424-2381669", "0412-3211028", "0412-3135556", "0414-2891425", "0416-9012751", "0412-9046710", "0412-8211400", "0414-9203585", "0424-2517618"],
      schedule: "Apoyo y gestoría"
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center p-4 md:p-6 gap-4">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Ayuda
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        Aquí puedes encontrar información y recursos de ayuda.
      </p>

      <h3 className="mt-4 text-lg font-semibold text-zinc-600 dark:text-zinc-400">
        Atención psicológica
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {psychologicalSupport.map((item, index) => (
          <div key={index} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">{item.organization}</h3>
            <p className="text-sm text-zinc-500 mb-4 font-medium">{item.schedule}</p>
            <div className="grid grid-cols-3 gap-2">
              {item.phones.map((phone, i) => (
                <span
                  key={i}
                  className="text-sm bg-zinc-100 dark:bg-zinc-700 p-2 rounded hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors text-center"
                >
                  {phone}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}