import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Iletisim</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Birlikte calismak veya soru sormak icin formu doldurabilirsin.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

