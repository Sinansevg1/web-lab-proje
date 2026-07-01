import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../context/useContent";

export default function EducationSection() {
  const { content } = useContent();
  if (!content) return null;

  const { education } = content;

  return (
    <Section id="education" alt>
      <SectionTitle label={education.sectionLabel} title={education.title} description={education.description} center />

      <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        <article className="card p-6 sm:p-8">
          <p className="section-label mb-3">Universite</p>
          <h3 className="text-xl font-bold text-[var(--color-brand)]">{education.school}</h3>
          <p className="mt-2 text-[var(--color-ink-muted)]">{education.department}</p>
          <p className="mt-4 text-sm font-mono text-[var(--color-ink-muted)]">{education.date}</p>
          <p className="text-sm text-[var(--color-ink-muted)]">{education.city}</p>
        </article>

        <article className="card p-6 sm:p-8">
          <p className="section-label mb-3">Diller</p>
          <ul className="space-y-4">
            {education.languages.map((language) => (
              <li key={language.name} className="flex items-center justify-between rounded-xl bg-[var(--color-brand-light)] px-4 py-3">
                <span className="font-semibold text-[var(--color-brand)]">{language.name}</span>
                <span className="tag">{language.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
