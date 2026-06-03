export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-brand)] text-white py-10">
      <div className="container-main flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg">Sinan Sevgi</p>
          <p className="text-sm text-white/70 mt-1">
            © {new Date().getFullYear()} Tum haklari saklidir.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center text-sm font-medium">
          <a href="#hero" className="text-white/80 hover:text-white transition-colors">
            Uste don
          </a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">
            Projeler
          </a>
          <a
            href="https://www.linkedin.com/in/sinan-sevgi-8a26a025b"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
