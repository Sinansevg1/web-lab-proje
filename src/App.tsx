import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          {/* icerik buraya */}
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* icerik buraya */}
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
