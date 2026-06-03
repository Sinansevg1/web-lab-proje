import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const quickFacts = [
  { label: "Rol", value: "Yazilim Muhendisi" },
  { label: "Konum", value: "Mersin, Turkiye" },
  { label: "Odak", value: "Backend & Fullstack" },
  { label: "Stack", value: ".NET 8 · EF Core · SignalR" },
];

export default function About() {
  return (
    <Section id="about" alt>
      <SectionTitle
        label="01 — Tanitim"
        title="Hakkimda"
        description="Olceklenebilir yazilim cozumleri ureten, ogrenmeye acik bir muhendis."
        center
      />

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-brand)] opacity-40 blur-sm" />
            <img
              src="/profile-photo.png"
              alt="Sinan Sevgi"
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-xl"
              loading="lazy"
            />
          </div>
          <p className="mt-4 font-bold text-[var(--color-brand)]">Sinan Sevgi</p>
          <p className="text-sm text-[var(--color-ink-muted)] font-mono">Fullstack Developer</p>
        </div>

        <div className="flex-1 min-w-0 w-full space-y-6 text-center lg:text-left">
          <p className="text-[var(--color-ink-muted)] leading-relaxed text-sm sm:text-base">
            Backend ve fullstack gelistirme odaginda, olceklenebilir uygulama tasarimi konusunda deneyim
            kazanan bir Yazilim Muhendisligi ogrencisiyim. C# ve .NET ile ASP.NET Core Web API, RESTful
            servisler ve SignalR uzerinde aktif calisiyorum. N-katmanli mimari, SOLID prensipleri,
            Dependency Injection, Repository Pattern ve Entity Framework ile temiz ve surdurulebilir kod
            uretmeye odaklaniyorum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="card p-4 text-left">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">
                  {fact.label}
                </p>
                <p className="mt-1 font-semibold text-[var(--color-brand)] text-sm">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
