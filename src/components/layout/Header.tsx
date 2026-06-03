import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkimda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#education", label: "Egitim" },
  { href: "#certificates", label: "Sertifikalar" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "Iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 relative">
      <nav className="max-w-6xl mx-auto px-2 sm:px-4 h-14 flex items-center justify-end">
        <a
          href="#hero"
          className="absolute left-1 top-1 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-[13px] font-semibold shadow-sm"
        >
          <span>
            SS
          </span>
        </a>

        <ul className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="block w-6 h-0.5 bg-gray-600 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600" />
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 bg-white dark:bg-gray-900 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
