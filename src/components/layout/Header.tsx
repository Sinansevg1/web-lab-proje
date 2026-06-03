import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Hakkimda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "Iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/85 backdrop-blur-md">
      <nav className="container-main h-16 md:h-[4.5rem] flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 shrink-0 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white shadow-md shadow-[var(--color-brand)]/25 transition-transform group-hover:scale-105">
            SS
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold text-[var(--color-brand)] leading-tight">
              Sinan Sevgi
            </span>
            <span className="block text-[10px] font-mono text-[var(--color-ink-muted)]">
              sinansevgi.com.tr
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-brand-light)] hover:text-[var(--color-brand)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
          Iletisime Gec
        </a>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-brand-light)]"
          aria-label="Menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="block w-6 h-0.5 bg-[var(--color-brand)] mb-1.5 rounded" />
          <span className="block w-6 h-0.5 bg-[var(--color-brand)] mb-1.5 rounded" />
          <span className="block w-6 h-0.5 bg-[var(--color-brand)] rounded" />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg py-3 text-center text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-brand-light)] hover:text-[var(--color-brand)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                Iletisime Gec
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
