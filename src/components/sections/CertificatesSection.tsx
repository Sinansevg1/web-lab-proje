import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const certificates = [
  {
    title: "Bilgi Teknolojilerine Giris",
    org: "BTK · 26 Nisan 2024",
    detail: "Temel bilgisayar sistemleri, yazilim ve dijital teknoloji konularinda tamamlama sertifikasi.",
  },
  {
    title: "Temelden Ileri Seviyeye Java",
    org: "Online Egitim",
    detail: "OOP, veri yapilari, istisna yonetimi ve koleksiyonlar ile uygulama gelistirme.",
  },
  {
    title: "A'dan Z'ye C# Programlama",
    org: "Uygulamali Egitim",
    detail: "Windows Forms, veritabani entegrasyonu ve pratik yazilim gelistirme teknikleri.",
  },
];

export default function CertificatesSection() {
  return (
    <Section id="certificates">
      <SectionTitle
        label="04 — Sertifikalar"
        title="Sertifikalar"
        description="Teknik yetkinligimi destekleyen tamamlanmis programlar."
        center
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.title}
            className="card card-hover p-5 sm:p-6 flex flex-col"
          >
            <span className="font-mono text-xs text-[var(--color-accent)] mb-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-bold text-[var(--color-brand)] leading-snug">{certificate.title}</h3>
            <p className="mt-1 text-xs font-mono text-[var(--color-ink-muted)]">{certificate.org}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">
              {certificate.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
