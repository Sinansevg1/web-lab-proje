export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Portfolyo
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            Uste don
          </a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            Projeler
          </a>
        </div>
      </div>
    </footer>
  );
}

