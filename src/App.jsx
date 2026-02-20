import React, { useState, useEffect } from 'react'
import './App.css'

// --- 1. IMÁGENES ---
import logoImg from './assets/logowhite.png'       
import searchIcon from './assets/Iconobusqueda.JPG' 
import cartIcon from './assets/Iconocompra.JPG'   
import seccion1Img from './assets/Seccion1.png'
import seccion2Img from './assets/seccion2.jpg'
import seccion3Img from './assets/seccion3.jpg'
import logoSinFondo from './assets/logobricko.png'

// --- 2. ICONOS ---
import iconEco from './assets/iconoreciclaje.png'
import iconTime from './assets/iconotiempo.png'
import iconInterior from './assets/iconointerior.png'
import iconMuro from './assets/iconomuro.png'
import iconColumna from './assets/iconocolumna.png'
import iconFachada from './assets/tcalculadora.png' 
import projectOffice from './assets/oficinap.jpg'
import projectBath from './assets/banop.jpg'
import logoWhite from './assets/logowhite.png'
import iconFb from './assets/iconofacebook.png'
import iconInsta from './assets/iconoinstagram.png'
import iconYt from './assets/iconoyoutube.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ancho, setAncho] = useState('');
  const [alto, setAlto] = useState('');
  const [tipoMuro, setTipoMuro] = useState('sencillo'); 
  const [resultado, setResultado] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [seccion1Img, seccion2Img, seccion3Img];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  useEffect(() => {
    const BRICKOS_POR_M2 = 50; 
    let factor = 1;
    if (tipoMuro === 'doble') factor = 2; 
    if (tipoMuro === 'fachada') factor = 0.8; 
    const area = (parseFloat(ancho) || 0) * (parseFloat(alto) || 0);
    setResultado(Math.ceil(area * BRICKOS_POR_M2 * factor));
  }, [ancho, alto, tipoMuro]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const calcIconStyle = { height: "40px", marginBottom: "8px", filter: "brightness(0) invert(1)" };

  return (
    <div className="main-container">
      <div className="top-bar">Envíos a todo el país 🚛</div>

      <nav className="navbar">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>{menuOpen ? '✕' : '☰'}</div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>NOSOTROS</li>
          <li>PRODUCTOS</li>
          <li>INSPIRACIÓN</li>
          <li>APRENDE</li>
          <li>CONTACTO</li>
        </ul>
        <div className="nav-icons">
          <img src={searchIcon} alt="Buscar" className="nav-icon-img"/>
          <img src={cartIcon} alt="Carrito" className="nav-icon-img"/>
        </div>
      </nav>

      <section className="hero-slider">
        {heroImages.map((img, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
        ))}
        <div className="hero-content">
          <img src={logoSinFondo} alt="Bricko" className="hero-center-logo" />
          <h1 className="hero-title">TU NUEVO ESPACIO INDUSTRIAL<br/>LISTO EN HORAS</h1>
          <p className="hero-subtitle">Olvídate del cemento. Renueva con diseño y limpieza</p>
          <button className="cta-button">Solicitar Ficha Técnica y Precios</button>
        </div>
      </section>

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

      <section className="calculator-section">
        <div className="calc-container">
          <h2>¿QUÉ CONSTRUIMOS?</h2>
          <div className="calc-options">
            <button className={`calc-btn ${tipoMuro === 'sencillo' ? 'active' : ''}`} onClick={() => setTipoMuro('sencillo')}>
              <img src={iconMuro} alt="Muro" style={calcIconStyle} /> <br/> Muro Divisorio
            </button>
            <button className={`calc-btn ${tipoMuro === 'doble' ? 'active' : ''}`} onClick={() => setTipoMuro('doble')}>
              <img src={iconColumna} alt="Columna" style={calcIconStyle} /> <br/> Estructural
            </button>
            <button className={`calc-btn ${tipoMuro === 'fachada' ? 'active' : ''}`} onClick={() => setTipoMuro('fachada')}>
              <img src={iconFachada} alt="Fachada" style={calcIconStyle} /> <br/> Fachada
            </button>
          </div>
          <div className="calc-inputs">
            <div className="input-group">
              <label>ANCHO (m)</label>
              <input type="number" placeholder="0.00" value={ancho} onChange={(e) => setAncho(e.target.value)}/>
            </div>
            <div className="input-group">
              <label>ALTO (m)</label>
              <input type="number" placeholder="0.00" value={alto} onChange={(e) => setAlto(e.target.value)}/>
            </div>
          </div>
          <div className="calc-result">
            <span className="result-number">{resultado}</span>
            <span className="result-text">BRICKOS ESTIMADOS.</span>
          </div>
          <button className="cta-button secondary">AGREGAR A CARRITO</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <img src={logoWhite} alt="Bricko" className="footer-logo-img" />
            <p>Revolución Ecológica en Construcción.</p>
          </div>
          <div className="footer-col links-col">
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Aviso de Privacidad</a>
          </div>
          <div className="footer-col contact-col">
            <p>Email: ventas@bricko.com</p>
            <div className="social-icons">
               <div className="social-circle"><img src={iconYt} alt="YT" /></div>
               <div className="social-circle"><img src={iconInsta} alt="IG" /></div>
               <div className="social-circle"><img src={iconFb} alt="FB" /></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
