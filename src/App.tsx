function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Projelerim
        </h2>
        {/* Mobil:1 sutun, Tablet:2 sutun, Desktop:3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 text-sm">
                React ve Node.js ile.
              </p>
            </div>
          </article>

          {/* Diger kartlar ayni yapiyla... */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Hava Durumu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Hava Durumu Uygulaması</h3>
              <p className="text-gray-600 text-sm">
                API entegrasyonu ile.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Portfolyo" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Portfolyo Sitesi</h3>
              <p className="text-gray-600 text-sm">
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
