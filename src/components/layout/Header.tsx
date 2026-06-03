import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Hakkimda" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "Iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4 pl-12 md:pl-14">
        <a
          href="#hero"
          className="absolute left-3 sm:left-4 top-2.5 md:top-3 inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 text-white text-[11px] md:text-[13px] font-semibold shadow-sm"
          aria-label="Ana sayfa"
        >
          SS
        </a>

        <a
          href="#hero"
          className="hidden sm:block text-sm md:text-base font-bold text-blue-600 truncate"
        >
          Sinan Sevgi
        </a>

        <ul className="hidden md:flex gap-5 lg:gap-6 ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 ml-auto"
          aria-label="Menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 space-y-1">
          <li className="sm:hidden pb-2 border-b border-gray-100 dark:border-gray-800">
            <span className="font-bold text-blue-600">Sinan Sevgi</span>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-center text-gray-600 dark:text-gray-300 hover:text-blue-600"
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
