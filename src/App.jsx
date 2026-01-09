import React from 'react'
import './App.css'

// --- IMÁGENES ---
import bannerImg from './assets/banner.avif'       // Foto 1
import iconEco from './assets/iconoreciclaje.png'  // Foto 2
import iconTime from './assets/iconotiempo.png'    // Foto 3
import iconInterior from './assets/iconointerior.png' // Foto 4
import projectOffice from './assets/oficinap.jpg'  // Foto 5
import calcImg from './assets/tcalculadora.png'    // Foto 6
import projectBath from './assets/banop.jpg'       // Foto 7

function App() {
  
  // Estilo para que los iconos no se deformen
  const iconStyle = { objectFit: "contain", padding: "10px" };

  return (
    <div className="main-container">
      
      {/* 1. BARRA DE NAVEGACIÓN */}
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
          <span>🔍</span> 
          <span>🛒</span> 
        </div>
      </nav>

      {/* 2. BANNER PRINCIPAL (Slider) */}
         {/* 2. BANNER PRINCIPAL (Slider) */}
         {/* 2. BANNER PRINCIPAL (Slider) */}
      <section className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="hero-content">
          
          {/* TÍTULO MODIFICADO ESTILO CARTEL */}
          <h1 className="hero-title">
            <span className="highlight-text">LA REVOLUCIÓN ECOLÓGICA</span> <br/>
            EN CONSTRUCCIÓN
          </h1>

          <button className="cta-button">Cotiza Ahora</button>
        </div>
      </section>
      {/* 3. TRES TARJETAS (BENEFICIOS) */}
         {/* 3. TRES TARJETAS (BENEFICIOS) */}
      <section className="benefits-section">
        <div className="benefits-grid">
          
          {/* Tarjeta 1: TIEMPO (Instalación Rápida) */}
          <div className="benefit-card">
            <div className="icon-box">
               {/* Si tus iconos son negros, el CSS los volverá blancos automáticamente */}
               <img src={iconTime} alt="Instalación" />
            </div>
            <h3>INSTALACIÓN RÁPIDA</h3>
            <p>Ahorro hasta 50% de tiempo en obra.</p>
          </div>

          {/* Tarjeta 2: RECICLAJE (100% Ecológico) */}
          <div className="benefit-card">
            <div className="icon-box">
               <img src={iconEco} alt="Ecológico" />
            </div>
            <h3>100% ECOLÓGICO</h3>
            <p>Hecho de papel reciclado comprimido.</p>
          </div>

          {/* Tarjeta 3: INTERIOR (Estética Interior) */}
          <div className="benefit-card">
             <div className="icon-box">
               <img src={iconInterior} alt="Estética" />
             </div>
            <h3>ESTÉTICA INTERIOR</h3>
            <p>Acabados modernos y limpios.</p>
          </div>
        </div>
      </section>
      {/* 4. CALCULADORA */}
      <section className="calculator-section">
        <h2 className="section-title">CALCULA TU PROYECTO</h2>
        <div className="calc-container">
          {/* Aquí ponemos la imagen de la calculadora que subiste */}
          <img src={calcImg} alt="Calculadora de Materiales" className="calc-image" />
          <button className="cta-button secondary">Empezar Cálculo</button>
        </div>
      </section>

      {/* 5. GRID DE 3 IMÁGENES (PROYECTOS) */}
      <section className="projects-section">
        <h2 className="section-title">TRANSFORMA TUS ESPACIOS</h2>
        <div className="projects-grid">
          
          <div className="project-card">
            <img src={projectBath} alt="Hogar" />
            <div className="project-label">HOGAR</div>
          </div>

          <div className="project-card">
            <img src={projectOffice} alt="Oficina" />
            <div className="project-label">OFICINA</div>
          </div>

          <div className="project-card">
            {/* Reutilizo Oficina porque nos falta una foto, cámbiala cuando puedas */}
            <img src={projectOffice} alt="Comercial" />
            <div className="project-label">COMERCIAL</div>
          </div>

        </div>
      </section>

      {/* 6. FOOTER NEGRO */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">🧱 BRICKO</div>
          <p>Revolución Ecológica en Construcción.</p>
          <div className="socials">
            <span>Instagram</span> | <span>Facebook</span> | <span>LinkedIn</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Bricko. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
