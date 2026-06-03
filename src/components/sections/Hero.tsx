export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative">
        <div className="max-w-3xl mx-auto text-center lg:max-w-4xl">
          <p className="section-label mb-4">Portfolio · Fullstack Developer</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--color-brand)] tracking-tight leading-[1.1]">
            Sinan Sevgi
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--color-ink-muted)] font-medium">
            Yazilim Muhendisi · .NET &amp; Olceklenebilir Sistemler
          </p>
          <p className="mt-6 text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed max-w-2xl mx-auto">
            ASP.NET Core, SignalR ve temiz mimari ile uretime hazir web uygulamalari gelistiriyorum.
            Gercek zamanli is akislari ve surdurulebilir backend cozumleri odagimda.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs sm:text-sm font-mono text-[var(--color-ink-muted)]">
            <span className="tag">Mersin, TR</span>
            <a href="mailto:9a.sinansevgi@gmail.com" className="tag hover:bg-[var(--color-accent-soft)]">
              9a.sinansevgi@gmail.com
            </a>
            <a href="tel:+905304879347" className="tag hover:bg-[var(--color-accent-soft)]">
              +90 530 487 93 47
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Projelerimi Gor
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Iletisime Gec
            </a>
            <a
              href="https://wa.me/905304879347?text=Merhaba%20Sinan%20Bey%2C%20portfolyonuz%20uzerinden%20ulasiyorum."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/sinan-sevgi-8a26a025b"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-brand)] hover:text-[var(--color-accent)] transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="https://restorant.sinansevgi.com.tr/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-brand)] hover:text-[var(--color-accent)] transition-colors"
            >
              QuickOrder Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
