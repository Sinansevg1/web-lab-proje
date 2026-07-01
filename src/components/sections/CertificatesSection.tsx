import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../context/useContent";

export default function CertificatesSection() {
  const { content } = useContent();
  if (!content) return null;

  const { certificates } = content;

  return (
    <Section id="certificates">
      <SectionTitle label={certificates.sectionLabel} title={certificates.title} description={certificates.description} center />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.items.map((certificate, index) => (
          <article key={certificate.title} className="card card-hover p-5 sm:p-6 flex flex-col">
            <span className="font-mono text-xs text-[var(--color-accent)] mb-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-bold text-[var(--color-brand)] leading-snug">{certificate.title}</h3>
            <p className="mt-1 text-xs font-mono text-[var(--color-ink-muted)]">{certificate.org}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">{certificate.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
