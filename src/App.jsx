import React from 'react'
import './App.css'

// 1. IMPORTA TUS IMÁGENES AQUÍ
// Cambia los nombres de archivo por los que subiste
import foto1 from './assets/banner.avif' 
import foto2 from './assets/iconoreciclaje.png'
import foto3 from './assets/iconotiempo.png'
import foto4 from './assets/iconointerior.png'
import foto5 from './assets/oficinap.jpg'
import foto6 from './assets/tcalculadora.png'
import foto7 from './assets/banop.jpg'
// Si tienes más, sigue importando: import foto3 from ...

function App() {
  return (
    <div className="portfolio-container">
      
      <header>
        <h1>MI PORTAFOLIO</h1>
        <p className="subtitle">UX DESIGNER | CYBERPUNK WRITER</p>
      </header>

      <div className="gallery-grid">
        
        {/* TARJETA 1 */}
        <div className="card">
          <div className="image-box">
             <img src={foto1} alt="Proyecto 1" />
          </div>
          <h2>NOMBRE PROYECTO 1</h2>
          <p>Descripción breve del proyecto (ej. Novela).</p>
        </div>

        {/* TARJETA 2 */}
        <div className="card">
          <div className="image-box">
             <img src={foto2} alt="Proyecto 2" />
          </div>
          <h2>NOMBRE PROYECTO 2</h2>
          <p>Descripción breve (ej. App Bricko).</p>
        </div>

        {/* Puedes copiar y pegar más bloques "div className=card" aquí */}

      </div>
    </div>
  )
}

export default App