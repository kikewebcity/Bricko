import React from 'react'
import './App.css'

// --- IMPORTACIÓN DE IMÁGENES ---
import foto1 from './assets/banner.avif' 
import foto2 from './assets/iconoreciclaje.png'
import foto3 from './assets/iconotiempo.png'
import foto4 from './assets/iconointerior.png'
import foto5 from './assets/oficinap.jpg'
import foto6 from './assets/tcalculadora.png'
import foto7 from './assets/banop.jpg'

function App() {
  
  // Estilo especial para que los iconos no se recorten
  const iconStyle = { objectFit: "contain", padding: "25px" };

  return (
    <div className="portfolio-container">
      
      <header>
        <h1>MI PORTAFOLIO</h1>
        <p className="subtitle">UX DESIGNER | CYBERPUNK WRITER</p>
      </header>

      <div className="gallery-grid">
        
        {/* TARJETA 1 - BANNER (Novela/Destacado) */}
        {/* Al ser foto, dejamos que llene todo el cuadro */}
        <div className="card">
          <div className="image-box">
             <img src={foto1} alt="Banner Principal" />
          </div>
          <h2>NOVELA CIBERPUNK</h2>
          <p>Proyecto literario y narrativa visual.</p>
        </div>

        {/* TARJETA 2 - RECICLAJE (Icono) */}
        <div className="card">
          <div className="image-box">
             <img src={foto2} alt="App Reciclaje" style={iconStyle} />
          </div>
          <h2>APP RECICLAJE</h2>
          <p>Diseño UX/UI para sostenibilidad.</p>
        </div>

        {/* TARJETA 3 - TIEMPO (Icono) */}
        <div className="card">
          <div className="image-box">
             <img src={foto3} alt="Gestión de Tiempo" style={iconStyle} />
          </div>
          <h2>TIME MANAGER</h2>
          <p>Herramienta de productividad.</p>
        </div>

        {/* TARJETA 4 - INTERIORISMO (Icono) */}
        <div className="card">
          <div className="image-box">
             <img src={foto4} alt="Interiorismo" style={iconStyle} />
          </div>
          <h2>INTERIORISMO</h2>
          <p>Conceptos de espacios.</p>
        </div>

        {/* TARJETA 5 - OFICINA (Foto) */}
        <div className="card">
          <div className="image-box">
             <img src={foto5} alt="Diseño de Oficina" />
          </div>
          <h2>OFICINA</h2>
          <p>Proyecto de espacio corporativo.</p>
        </div>

        {/* TARJETA 6 - CALCULADORA (Icono/UI) */}
        <div className="card">
          <div className="image-box">
             <img src={foto6} alt="Calculadora App" style={iconStyle} />
          </div>
          <h2>CALCULADORA</h2>
          <p>Desarrollo de herramientas web.</p>
        </div>

        {/* TARJETA 7 - BAÑO (Foto) */}
        <div className="card">
          <div className="image-box">
             <img src={foto7} alt="Diseño Residencial" />
          </div>
          <h2>RESIDENCIAL</h2>
          <p>Diseño de baño y acabados.</p>
        </div>

      </div>
    </div>
  )
}

export default App
