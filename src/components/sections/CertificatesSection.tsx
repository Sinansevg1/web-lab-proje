const certificates = [
  {
    title: "Bilgi Teknolojilerine Giris - Tamamlama Sertifikasi",
    detail:
      "Temel bilgisayar sistemleri, yazilim ve dijital teknoloji konularinda BTK tarafindan verilen egitimi tamamladim (26 Nisan 2024).",
  },
  {
    title: "Temelden Ileri Seviyeye Java Programlama",
    detail:
      "OOP, veri yapilari, istisna yonetimi, dosya islemleri ve koleksiyonlar ile uygulama gelistirme odakli kapsamli egitim.",
  },
  {
    title: "A'dan Z'ye C# Programlama",
    detail:
      "Windows Forms, dosya yonetimi, veritabani entegrasyonu ve pratik yazilim gelistirme tekniklerini kapsayan uygulamali program.",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center md:text-left mb-2">
          Sertifikalar
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center md:text-left text-sm sm:text-base">
          Teknik yetkinligimi destekleyen tamamlanmis egitimler.
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">{certificate.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{certificate.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
