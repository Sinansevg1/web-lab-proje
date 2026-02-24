import './App.css'

function App() {
  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <h1>Sinan Sevgi | Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="https://placehold.co/150x150"
              alt="Sinan Sevgi'nin vesikalik fotografi"
            />
            <figcaption>Sinan Sevgi</figcaption>
          </figure>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Proje 1</h3>
            <figure>
              <img
                src="https://placehold.co/400x225"
                alt="Proje 1 uygulama ekran goruntüsü"
              />
              <figcaption>Proje 1 - Ekran Görüntüsü</figcaption>
            </figure>
          </article>

          <article>
            <h3>Proje 2</h3>
            <figure>
              <img
                src="https://placehold.co/400x225"
                alt="Proje 2 uygulama ekran goruntüsü"
              />
              <figcaption>Proje 2 - Ekran Görüntüsü</figcaption>
            </figure>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Sinan Sevgi. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App
