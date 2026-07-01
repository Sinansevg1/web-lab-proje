import { useState } from "react";
import { useContent } from "../../context/useContent";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  onOpenAdmin: () => void;
}

export default function Header({ onOpenAdmin }: HeaderProps) {
  const { content } = useContent();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!content) return null;

  const { header, profile } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-header)] backdrop-blur-md">
      <nav className="container-main h-16 md:h-[4.5rem] flex items-center justify-between gap-2">
        <a href="#hero" className="flex items-center gap-3 shrink-0 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white shadow-md transition-transform group-hover:scale-105">
            {header.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold text-[var(--color-brand)] leading-tight">
              {profile.name}
            </span>
            <span className="block text-[10px] font-mono text-[var(--color-ink-muted)]">
              {header.domain}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {header.navLinks.map((link) => (
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

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenAdmin}
            className="btn-outline text-sm py-2 px-3"
          >
            Yonetim
          </button>
          <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-4">
            {header.ctaLabel}
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
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
          <ul className="space-y-1">
            {header.navLinks.map((link) => (
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
            <li className="pt-2 flex gap-2">
              <button type="button" onClick={() => { setMenuOpen(false); onOpenAdmin(); }} className="btn-outline flex-1 text-sm">
                Yonetim
              </button>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary flex-1">
                {header.ctaLabel}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
