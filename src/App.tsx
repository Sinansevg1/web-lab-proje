function App() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Projelerim
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <img src="https://placehold.co/600x400" alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                React ve Node.js ile.
              </p>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <img src="https://placehold.co/600x400" alt="Hava Durumu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Hava Durumu Uygulaması</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                API entegrasyonu ile.
              </p>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <img src="https://placehold.co/600x400" alt="Portfolyo" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Portfolyo Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tailwind CSS v4 ile.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
