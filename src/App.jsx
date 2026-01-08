import React from 'react'
import './App.css'

// IMÁGENES
import foto1 from './assets/banner.avif' 
import foto2 from './assets/iconoreciclaje.png'
import foto3 from './assets/iconotiempo.png'
import foto4 from './assets/iconointerior.png'
import foto5 from './assets/oficinap.jpg'
import foto6 from './assets/tcalculadora.png'
import foto7 from './assets/banop.jpg'

function App() {
  const iconStyle = { objectFit: "contain", padding: "25px" };

  return (
    <div className="portfolio-container">
      
      {/* --- NUEVA BARRA DE NAVEGACIÓN --- */}
      <nav className="navbar">
        <div className="logo">🧱 BRICKO</div>
        <ul className="nav-menu">
          <li>Manifiesto</li>
          <li>Catálogo</li>
          <li>Proyectos</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
        <div className="nav-icons">
          <span>🔍</span> {/* Lupa */}
          <span>🛒</span> {/* Carrito */}
        </div>
      </nav>

      {/* --- CABECERA PRINCIPAL --- */}
      <header>
        <h1 className="main-title">LA REVOLUCIÓN ECOLÓGICA <br/> EN CONSTRUCCIÓN</h1>
        <button className="cta-button">Cotiza Ahora</button>
      </header>

      {/* --- GRID DE BENEFICIOS/PROYECTOS --- */}
      <div className="gallery-grid">
        
        {/* TARJETA 1 - INSTALACIÓN */}
        <div className="card">
          <div className="image-box">
             {/* Usamos el icono del reloj (foto3) para simular "Instalación Rápida" */}
             <img src={foto3} alt="Instalación Rápida" style={iconStyle} />
          </div>
          <h2>INSTALACIÓN RÁPIDA</h2>
          <p>Ahorro hasta 50% de tiempo en obra.</p>
        </div>

        {/* TARJETA 2 - ECOLÓGICO */}
        <div className="card">
          <div className="image-box">
             <img src={foto2} alt="100% Ecológico" style={iconStyle} />
          </div>
          <h2>100% ECOLÓGICO</h2>
          <p>Hecho de papel reciclado comprimido.</p>
        </div>

        {/* TARJETA 3 - ESTÉTICA */}
        <div className="card">
          <div className="image-box">
             <img src={foto4} alt="Estética Interior" style={iconStyle} />
          </div>
          <h2>ESTÉTICA INTERIOR</h2>
          <p>Acabados modernos y limpios.</p>
        </div>

      </div>
    </div>
  )
}

export default App
