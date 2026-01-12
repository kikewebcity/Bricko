import React, { useState } from 'react' // Importamos useState para el menú
import './App.css'

// --- IMÁGENES ---
// 1. Nuevos Iconos del Navbar
import logoImg from './assets/Iconologo.png'
import searchIcon from './assets/Iconobusqueda.png'
import cartIcon from './assets/Iconocompra.png'

// 2. Imágenes del resto de la página
import bannerImg from './assets/banner.avif'
import iconEco from './assets/iconoreciclaje.png'
import iconTime from './assets/iconotiempo.png'
import iconInterior from './assets/iconointerior.png'
import projectOffice from './assets/oficinap.jpg'
import calcImg from './assets/tcalculadora.png'
import projectBath from './assets/banop.jpg'

function App() {
  // Estado para controlar si el menú hamburguesa está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para abrir/cerrar menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const iconStyle = { objectFit: "contain", padding: "10px" };

  return (
    <div className="main-container">
      
      {/* 1. TOP BAR (Franja Verde de Envío) */}
      <div className="top-bar">
        Envíos a todo el país 🚛
      </div>

      {/* 2. BARRA DE NAVEGACIÓN */}
      <nav className="navbar">
        
        {/* Logo Imagen */}
        <div className="logo-container">
          <img src={logoImg} alt="Bricko Logo" className="logo-img" />
        </div>

        {/* Botón Hamburguesa (Solo visible en móvil) */}
        <div className="hamburger" onClick={toggleMenu}>
          {/* Si está abierto muestra X, si no muestra ☰ */}
          {menuOpen ? '✕' : '☰'}
        </div>
        
        {/* Menú Principal (Se activa clase "active" si menuOpen es true) */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          
          {/* ÍTEM CON DESPLEGABLE (NOSOTROS) */}
          <li className="dropdown-item">
            <span>NOSOTROS ▾</span>
            <ul className="dropdown-content">
              <li>Manifiesto</li>
              <li>Tecnología (Patente)</li>
              <li>Ventajas</li>
            </ul>
          </li>

          <li>CATÁLOGO</li>
          <li>CALCULADORA</li>
          <li>ECO-HUB</li>
          <li>CONTACTO</li>
        </ul>

        {/* Iconos Búsqueda y Compra */}
        <div className="nav-icons">
          <img src={searchIcon} alt="Buscar" className="nav-icon-img" />
          <img src={cartIcon} alt="Carrito" className="nav-icon-img" />
        </div>
      </nav>

      {/* 3. BANNER PRINCIPAL */}
      <section className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-text">LA REVOLUCIÓN ECOLÓGICA</span> <br/>
            EN CONSTRUCCIÓN
          </h1>
          <button className="cta-button">Cotiza Ahora</button>
        </div>
      </section>

      {/* 4. TRES TARJETAS (BENEFICIOS) */}
      <section className="benefits-section">
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-box">
               <img src={iconTime} alt="Instalación" />
            </div>
            <h3>INSTALACIÓN RÁPIDA</h3>
            <p>Ahorro hasta 50% de tiempo en obra.</p>
          </div>
          <div className="benefit-card">
            <div className="icon-box">
               <img src={iconEco} alt="Ecológico" />
            </div>
            <h3>100% ECOLÓGICO</h3>
            <p>Hecho de papel reciclado comprimido.</p>
          </div>
          <div className="benefit-card">
             <div className="icon-box">
               <img src={iconInterior} alt="Estética" />
             </div>
            <h3>ESTÉTICA INTERIOR</h3>
            <p>Acabados modernos y limpios.</p>
          </div>
        </div>
      </section>

      {/* 5. CALCULADORA */}
      <section className="calculator-section">
        <div className="calc-container">
          <h2 style={{color:'white', marginBottom:'20px'}}>CALCULA TU PROYECTO</h2>
          <img src={calcImg} alt="Calculadora" className="calc-image" />
          <button className="cta-button secondary">Empezar Cálculo</button>
        </div>
      </section>

      {/* 6. GRID DE PROYECTOS */}
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
            <img src={projectOffice} alt="Comercial" />
            <div className="project-label">COMERCIAL</div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
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
