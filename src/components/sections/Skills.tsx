import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const skillGroups = [
  {
    title: "Backend",
    icon: "⚙",
    items: ["C#", ".NET", "ASP.NET Core Web API", "SignalR", "RESTful API"],
  },
  {
    title: "Mimari",
    icon: "◇",
    items: ["N-Katmanli Mimari", "SOLID", "Dependency Injection", "Repository Pattern"],
  },
  {
    title: "Veritabani",
    icon: "▣",
    items: ["SQL Server", "Entity Framework Core", "EF6", "Code-First", "Migration"],
  },
  {
    title: "Frontend & Mobil",
    icon: "◈",
    items: ["ASP.NET MVC", "Razor", "React Native", "TypeScript", "Git"],
  },
  {
    title: "Veri Bilimi",
    icon: "◎",
    items: ["Python", "pandas", "NumPy", "scikit-learn", "Random Forest"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        label="02 — Teknik"
        title="Yetenekler"
        description="Aktif kullandigim teknoloji yiginlari ve muhendislik pratikleri."
        center
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {skillGroups.map((group) => (
          <article key={group.title} className="card card-hover p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg" aria-hidden>
                {group.icon}
              </span>
              <h3 className="font-bold text-[var(--color-brand)]">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="tag-accent">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
