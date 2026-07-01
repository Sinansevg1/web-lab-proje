import ContactForm from "../forms/ContactForm";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../context/useContent";

export default function ContactSection() {
  const { content } = useContent();
  if (!content) return null;

  const { contact } = content;

  return (
    <Section id="contact">
      <SectionTitle label={contact.sectionLabel} title={contact.title} description={contact.description} center />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {contact.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className={`card card-hover p-4 block ${
                item.accent ? "border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20" : ""
              }`}
            >
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">{item.label}</p>
              <p className={`mt-1 font-semibold text-sm break-all ${item.accent ? "text-emerald-700 dark:text-emerald-400" : "text-[var(--color-brand)]"}`}>
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="card p-6 sm:p-8">
          <h3 className="font-bold text-[var(--color-brand)] mb-1">{contact.formTitle}</h3>
          <p className="text-sm text-[var(--color-ink-muted)] mb-6">{contact.formSubtitle}</p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
