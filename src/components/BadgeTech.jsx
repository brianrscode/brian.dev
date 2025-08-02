export function BadgeTech({ icono, texto }) {
  // Mapeo de iconos a colores con clases completas de Tailwind
  const colorClasses = {
    python: "bg-yellow-50 text-yellow-800 ring-yellow-600/50",
    django: "bg-green-50 text-green-800 ring-green-600/50",
    react: "bg-sky-50 text-sky-800 ring-sky-600/50",
    javascript: "bg-amber-50 text-amber-800 ring-amber-600/50",
    html5: "bg-orange-50 text-orange-800 ring-orange-600/50",
    css: "bg-indigo-50 text-indigo-800 ring-indigo-600/50",
    git: "bg-red-50 text-red-800 ring-red-600/50",
    github: "bg-gray-50 text-gray-800 ring-gray-600/50",
    mysql: "bg-blue-50 text-blue-800 ring-blue-600/50",
    postgresql: "bg-blue-50 text-blue-800 ring-blue-600/50",
    mediapipe: "bg-blue-50 text-blue-800 ring-blue-600/50",
    bootstrap: "bg-purple-50 text-purple-800 ring-purple-600/50",
    opencv: "bg-red-50 text-red-800 ring-red-600/50",
    drf: "bg-gray-50 text-[#802420] ring-gray-600/50",
    tailwind: "bg-teal-50 text-teal-800 ring-teal-600/50",
  };

  // Clase base común para todos los badges
  const claseBase = "gap-1 inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset";

  // Selecciona el estilo o usa uno por defecto (gray)
  const estiloBadge = colorClasses[icono] || "bg-gray-50 text-gray-800 ring-gray-600/20";

  return (
    <span className={`${claseBase} ${estiloBadge}`}>
      <img
        src={`${import.meta.env.BASE_URL}assets/icons/${icono}.svg`}
        alt={icono}
        className="w-6 h-6 object-contain"
      />
      <span>{texto}</span>
    </span>
  );
}