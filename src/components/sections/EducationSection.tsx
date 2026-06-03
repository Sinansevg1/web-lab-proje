const education = {
  school: "Firat Universitesi",
  department: "Yazilim Muhendisligi",
  date: "08/2022 - 07/2027",
  city: "Elazig / Turkiye",
};

const languages = [{ name: "Ingilizce", level: "B1" }];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Egitim ve Diller</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Akademik altyapim ve aktif kullandigim yabanci dil seviyesi.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{education.school}</h3>
            <p className="text-gray-700 dark:text-gray-200">{education.department}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{education.date}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{education.city}</p>
          </article>

          <article className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Diller</h3>
            <ul className="space-y-2">
              {languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-200">{language.name}</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-300">{language.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
