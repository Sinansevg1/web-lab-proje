import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../context/useContent";

export default function About() {
  const { content } = useContent();
  if (!content) return null;

  const { about, profile } = content;

  return (
    <Section id="about" alt>
      <SectionTitle label={about.sectionLabel} title={about.title} description={about.description} center />

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-brand)] opacity-40 blur-sm" />
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-[var(--color-surface)] shadow-xl"
              loading="lazy"
            />
          </div>
          <p className="mt-4 font-bold text-[var(--color-brand)]">{profile.name}</p>
          <p className="text-sm text-[var(--color-ink-muted)] font-mono">{profile.photoRole}</p>
        </div>

        <div className="flex-1 min-w-0 w-full space-y-6 text-center lg:text-left">
          <p className="text-[var(--color-ink-muted)] leading-relaxed text-sm sm:text-base">{about.bio}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {about.quickFacts.map((fact) => (
              <div key={fact.label} className="card p-4 text-left">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">{fact.label}</p>
                <p className="mt-1 font-semibold text-[var(--color-brand)] text-sm">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
