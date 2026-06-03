import ContactForm from "../forms/ContactForm";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const contacts = [
  {
    label: "E-posta",
    value: "9a.sinansevgi@gmail.com",
    href: "mailto:9a.sinansevgi@gmail.com",
  },
  {
    label: "Telefon",
    value: "+90 530 487 93 47",
    href: "tel:+905304879347",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sinan-sevgi-8a26a025b",
    href: "https://www.linkedin.com/in/sinan-sevgi-8a26a025b",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "WhatsApp'tan Ulasin",
    href: "https://wa.me/905304879347?text=Merhaba%20Sinan%20Bey%2C%20portfolyonuz%20uzerinden%20ulasiyorum.",
    external: true,
    accent: true,
  },
];

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle
        label="06 — Iletisim"
        title="Bana Ulasin"
        description="Isbirligi, proje teklifi veya teknik sorular icin mesaj birakin."
        center
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className={`card card-hover p-4 block ${
                item.accent ? "border-emerald-200 bg-emerald-50/50" : ""
              }`}
            >
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">
                {item.label}
              </p>
              <p
                className={`mt-1 font-semibold text-sm break-all ${
                  item.accent ? "text-emerald-700" : "text-[var(--color-brand)]"
                }`}
              >
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="card p-6 sm:p-8">
          <h3 className="font-bold text-[var(--color-brand)] mb-1">Mesaj Gonder</h3>
          <p className="text-sm text-[var(--color-ink-muted)] mb-6">
            Formu doldurun, en kisa surede donus yapayim.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
