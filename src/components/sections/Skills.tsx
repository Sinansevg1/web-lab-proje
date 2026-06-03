const skillGroups = [
  {
    title: "Backend",
    items: ["C#", ".NET", "ASP.NET Core Web API", "SignalR", "RESTful API"],
  },
  {
    title: "Mimari ve Prensipler",
    items: ["N-Katmanli Mimari", "SOLID", "Dependency Injection", "Repository Pattern"],
  },
  {
    title: "Veritabani",
    items: ["SQL Server", "Entity Framework Core", "EF6", "Code-First", "Migration"],
  },
  {
    title: "Frontend ve Diger",
    items: ["ASP.NET MVC", "Razor", "React Native", "TypeScript", "Git"],
  },
  {
    title: "Veri Bilimi",
    items: ["Python", "pandas", "NumPy", "scikit-learn", "Random Forest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center md:text-left mb-2">
          Yetenekler
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left text-sm sm:text-base">
          Uzerinde aktif calistigim teknoloji yiginlari ve muhendislik pratikleri.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-5"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="bg-blue-700 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
