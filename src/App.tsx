import './App.css'

function App() {
  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <h1>Sinan Sevgi</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">

        {/* ── Hakkimda ── */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          <figure>
            <img
              src="https://placehold.co/150x150"
              alt="Sinan Sevgi'nin vesikalik fotografi"
            />
            <figcaption>Sinan Sevgi</figcaption>
          </figure>

          <p>
            Merhaba! Ben Sinan Sevgi, web tasarimi ve yazilim gelistirme alaninda
            kendini gelistiren bir ogrenciyim. Kullanici dostu, erişilebilir ve
            performansli arayuzler olusturmaya odaklaniyorum.
          </p>

          <h3>Kullandiğim Teknolojiler</h3>
          <ul>
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>Git &amp; GitHub</li>
          </ul>
        </section>

        {/* ── Projelerim ── */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Kisisel Portfolyo Sitesi</h3>
            <figure>
              <img
                src="https://placehold.co/400x225"
                alt="Kisisel portfolyo sitesinin ana sayfa ekran gorüntüsü"
              />
              <figcaption>Portfolyo – Ana Sayfa</figcaption>
            </figure>
            <p>
              Semantik HTML5, erişilebilirlik ilkeleri ve temel CSS kullanilarak
              gelistirilen tek sayfali kisisel tanitim sitesi.
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
            </ul>
          </article>

          <article>
            <h3>Görev Takip Uygulamasi</h3>
            <figure>
              <img
                src="https://placehold.co/400x225"
                alt="Görev takip uygulamasinin görev listesi ekran gorüntüsü"
              />
              <figcaption>Görev Takip – Liste Görünümü</figcaption>
            </figure>
            <p>
              Kullanicilarin görev ekleyip, tamamlanmis olarak isaretleyebildiği
              basit bir yapilacaklar listesi uygulamasi.
            </p>
            <ul>
              <li>JavaScript</li>
              <li>LocalStorage</li>
              <li>CSS3</li>
            </ul>
          </article>
        </section>

        {/* ── Iletisim ── */}
        <section id="iletisim">
          <h2>Iletisim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2025 Sinan Sevgi. Tum haklari saklidir.</p>
        <ul>
          <li><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
