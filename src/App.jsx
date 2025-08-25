import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Goals from './pages/goals'
import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Halo, Saya Nur azizah !</h1>
          <nav>
            <Link to="/">Tentang Saya</Link> | <Link to="/goals">Hal yang Ingin Dicoba</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
