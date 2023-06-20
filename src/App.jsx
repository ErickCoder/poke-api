import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const handleDarkMode = () => setIsDark(!isDark)
  return (
    <section className="font-['Inter']">
      <Routes>
        <Route path="/" element={<Home isDark={isDark} handleDarkMode={handleDarkMode} />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex isDark={isDark} handleDarkMode={handleDarkMode} />} />

          <Route path="/pokedex/:pokemonName" element={<PokemonId isDark={isDark} handleDarkMode={handleDarkMode} />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
