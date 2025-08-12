import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Halo, Saya Nur azizah !</h1>
        <p>Instagram | Tiktok</p>
      </header>

      <main>
        <section className="card">
          <div className='about-content'>
            <img src="src/assets/foto1.jpeg" alt="yoi" className="profile-img" />
            <div className='text'>
          <h2>Tentang saya</h2>
          <p>
            Saya adalah seorang pelajar di smk,<br></br>
            dan mengambil jurusan "Rekayasa Perangkat lunak"
          </p>
          </div>
          </div>
        </section>

        <section className="card">
          <div className='about-content'>
            <img src="src/assets/pacarku.jpeg" alt="pacarku" className="profile-img" />
            <div className='text'>
          <h2>Hal yang ingin aku coba</h2>
          <ul>
            <li>Travelling ke luar kota atau pulau</li>
            <li>Ingin menjadi konten kreator</li>
            <li>Public speaking didepan banyak orang</li>
            <li>Saya suka mie ayam dan Iqbal ramadhan</li>
          </ul>
          </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App