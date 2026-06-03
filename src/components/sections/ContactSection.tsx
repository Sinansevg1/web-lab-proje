import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center md:text-left mb-2">
          Iletisim
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-center md:text-left text-sm sm:text-base mx-auto md:mx-0">
          Isbirligi, proje teklifi veya teknik sorular icin benimle dogrudan iletisime gecebilirsin.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <article className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">E-posta</p>
              <a
                href="mailto:9a.sinansevgi@gmail.com"
                className="text-blue-600 dark:text-blue-300 font-medium hover:underline"
              >
                9a.sinansevgi@gmail.com
              </a>
            </article>

            <article className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Telefon</p>
              <a
                href="tel:+905304879347"
                className="text-blue-600 dark:text-blue-300 font-medium hover:underline"
              >
                +90 530 487 93 47
              </a>
            </article>

            <article className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sinan-sevgi-8a26a025b"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-300 font-medium hover:underline break-all"
              >
                linkedin.com/in/sinan-sevgi-8a26a025b
              </a>
            </article>

            <article className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">WhatsApp</p>
              <a
                href="https://wa.me/905304879347?text=Merhaba%20Sinan%20Bey%2C%20portfolyonuz%20uzerinden%20ulasiyorum."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline"
              >
                WhatsApp'tan Ulasin
              </a>
            </article>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

