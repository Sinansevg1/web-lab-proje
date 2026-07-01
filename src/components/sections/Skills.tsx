import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../context/useContent";

export default function Skills() {
  const { content } = useContent();
  if (!content) return null;

  const { skills } = content;

  return (
    <Section id="skills">
      <SectionTitle label={skills.sectionLabel} title={skills.title} description={skills.description} center />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {skills.groups.map((group) => (
          <article key={group.title} className="card card-hover p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg" aria-hidden>{group.icon}</span>
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
