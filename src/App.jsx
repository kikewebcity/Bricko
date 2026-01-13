import React, { useState, useEffect } from 'react'
import './App.css'

// --- 1. CORRECCIÓN DE IMPORTACIONES (Nombres Exactos) ---
// Fíjate que ahora coinciden con tu captura de GitHub (Mayúsculas y .JPG)
import logoImg from './assets/Iconologo.JPG'       
import searchIcon from './assets/Iconobusqueda.JPG' 
import cartIcon from './assets/Iconocompra.JPG'     

// --- 2. ICONOS PARA LA CALCULADORA ---
import iconMuro from './assets/iconomuro.png'
import iconColumna from './assets/iconocolumna.png'
// Usaremos tcalculadora como icono de la 3ra opción
import iconCalc from './assets/tcalculadora.png' 

// --- 3. IMÁGENES RESTANTES ---
import bannerImg from './assets/banner.avif'
import iconEco from './assets/iconoreciclaje.png'
import iconTime from './assets/iconotiempo.png'
import iconInterior from './assets/iconointerior.png'
import projectOffice from './assets/oficinap.jpg'
import projectBath from './assets/banop.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Estados de la Calculadora
  const [ancho, setAncho] = useState('');
  const [alto, setAlto] = useState('');
  const [tipoMuro, setTipoMuro] = useState('sencillo'); 
  const [resultado, setResultado] = useState(0);

  // Lógica de cálculo
  useEffect(() => {
    const BRICKOS_POR_M2 = 50; 
    let factor = 1;
    if (tipoMuro === 'doble') factor = 2; 
    if (tipoMuro === 'fachada') factor = 0.8; 

    const area = (parseFloat(ancho) || 0) * (parseFloat(alto) || 0);
    const total = Math.ceil(area * BRICKOS_POR_M2 * factor);
    setResultado(total);
  }, [ancho, alto, tipoMuro]);

  const toggleMenu = () => { setMenuOpen(!menuOpen); };

  // Estilo para los iconos dentro de los botones de la calculadora
  const calcIconStyle = { height: "40px", marginBottom: "10px", filter: "brightness(0) invert(1)" }; 
  // Nota: El filtro los vuelve blancos para que se vean bien sobre el fondo negro/gris del botón.

  return (
    <div className="main-container">
      
      {/* TOP BAR */}
      <div className="top-bar">Envíos a todo el país 🚛</div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="dropdown-item">
            <span>NOSOTROS ▾</span>
            <ul className="dropdown-content">
              <li>Manifiesto</li>
              <li>Tecnología</li>
              <li>Ventajas</li>
            </ul>
          </li>
          <li>CATÁLOGO</li>
          <li>CALCULADORA</li>
          <li>ECO-HUB</li>
          <li>CONTACTO</li>
        </ul>

        <div className="nav-icons">
          <img src={searchIcon} alt="Buscar" className="nav-icon-img"/>
          <img src={cartIcon} alt="Carrito" className="nav-icon-img"/>
        </div>
      </nav>

      {/* BANNER */}
      <section className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
         <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-text">LA REVOLUCIÓN ECOLÓGICA</span> <br/>
            EN CONSTRUCCIÓN
          </h1>
          <button className="cta-button">Cotiza Ahora</button>
         </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits-section">
        <div className="benefits-grid">
           <div className="benefit-card">
             <div className="icon-box"><img src={iconTime} alt="Tiempo"/></div>
             <h3>RAPIDEZ</h3><p>Ahorro de tiempo.</p>
           </div>
           <div className="benefit-card">
             <div className="icon-box"><img src={iconEco} alt="Eco"/></div>
             <h3>ECOLÓGICO</h3><p>Papel reciclado.</p>
           </div>
           <div className="benefit-card">
             <div className="icon-box"><img src={iconInterior} alt="Diseño"/></div>
             <h3>DISEÑO</h3><p>Acabados limpios.</p>
           </div>
        </div>
      </section>

      {/* --- SECCIÓN CALCULADORA --- */}
      <section className="calculator-section">
        <div className="calc-container">
          <h2 style={{color:'white', marginBottom:'20px'}}>¿QUÉ CONSTRUIMOS?</h2>
          
          {/* BOTONES CON TUS ICONOS NUEVOS */}
          <div className="calc-options">
            
            {/* Opción 1: Muro Divisorio */}
            <button 
              className={`calc-btn ${tipoMuro === 'sencillo' ? 'active' : ''}`} 
              onClick={() => setTipoMuro('sencillo')}
            >
              <img src={iconMuro} alt="Muro" style={calcIconStyle} /> <br/>
              Muro Divisorio
            </button>

            {/* Opción 2: Muro Estructural */}
            <button 
              className={`calc-btn ${tipoMuro === 'doble' ? 'active' : ''}`} 
              onClick={() => setTipoMuro('doble')}
            >
              <img src={iconColumna} alt="Columna" style={calcIconStyle} /> <br/>
              Muro Estructural
            </button>

            {/* Opción 3: Fachada */}
            <button 
              className={`calc-btn ${tipoMuro === 'fachada' ? 'active' : ''}`} 
              onClick={() => setTipoMuro('fachada')}
            >
              <img src={iconCalc} alt="Fachada" style={calcIconStyle} /> <br/>
              Fachada
            </button>
          </div>

          {/* INPUTS */}
          <div className="calc-inputs">
            <div className="input-group">
              <label>ANCHO DE PARED (m)</label>
              <input 
                type="number" 
                placeholder="0.00" 
                value={ancho}
                onChange={(e) => setAncho(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>ALTO DE PARED (m)</label>
              <input 
                type="number" 
                placeholder="0.00" 
                value={alto}
                onChange={(e) => setAlto(e.target.value)}
              />
            </div>
          </div>

          {/* RESULTADO */}
          <div className="calc-result">
            <span className="result-number">{resultado}</span>
            <span className="result-text">BRICKOS ESTIMADOS</span>
          </div>

          <button className="cta-button secondary">AGREGAR AL CARRITO</button>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="projects-section">
         <h2 className="section-title">TRANSFORMA TUS ESPACIOS</h2>
         <div className="projects-grid">
            <div className="project-card">
              <img src={projectBath} alt="Baño"/>
              <div className="project-label">HOGAR</div>
            </div>
            <div className="project-card">
              <img src={projectOffice} alt="Oficina"/>
              <div className="project-label">OFICINA</div>
            </div>
            <div className="project-card">
              <img src={projectOffice} alt="Comercial"/>
              <div className="project-label">COMERCIAL</div>
            </div>
         </div>
      </section>
      
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
           <div className="footer-logo">🧱 BRICKO</div>
           <p>© 2026 Bricko. Revolución Ecológica.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
