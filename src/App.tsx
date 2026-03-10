import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
// import Alert from './components/Alert'; // might not be used here but good to have

function App() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Sinan Sevgi
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Iletisim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="https://placehold.co/160x160"
                alt="Sinan Sevgi vesikalik fotografi"
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Frontend gelistirici olarak modern web teknolojileriyle kullanici dostu
                arayuzler olusturuyorum. Erişilebilirlik ve performans odaklı çalışıyorum.
              </p>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim Bölümü */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="E-Ticaret"
                image="https://placehold.co/600x400"
                imageAlt="E-Ticaret anasayfa gorunumu"
              >
                React ve Node.js ile tam kapsamli uygulama.
              </Card>
              <Card
                variant="elevated"
                title="Hava Durumu"
                image="https://placehold.co/600x400"
                imageAlt="Hava durumu uygulaması"
              >
                Real-time veri çekme ve görselleştirme.
              </Card>
              <Card
                variant="elevated"
                title="Görev Takip"
                image="https://placehold.co/600x400"
                imageAlt="Görev takip uygulaması"
              >
                LocalStorage ile veri saklayan ToDo app.
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim Formu */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required placeholder="Adınız Soyadınız" />
              <Input id="email" label="E-posta" type="email" required placeholder="ornek@mail.com" />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gonder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
        <p>&copy; 2025 Sinan Sevgi. Tum haklari saklidir.</p>
      </footer>
    </div>
  );
}

export default App;
