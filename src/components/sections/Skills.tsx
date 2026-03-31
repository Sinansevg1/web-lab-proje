const skills = ["React", "TypeScript", "Tailwind", "Vite", "Node.js", "Git", "REST API"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Yetenekler</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sik kullandigim araclar ve teknolojiler.
        </p>

        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1.5 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

