import React, { useState, useEffect } from 'react'
import './App.css'

// --- IMPORTACIÓN DE IMÁGENES ---
import logoImg from './assets/Iconologo.JPG'       
import searchIcon from './assets/Iconobusqueda.JPG' 
import cartIcon from './assets/Iconocompra.JPG'     
import bannerImg from './assets/banner.avif'
import iconEco from './assets/iconoreciclaje.png'
import iconTime from './assets/iconotiempo.png'
import iconInterior from './assets/iconointerior.png'
import projectOffice from './assets/oficinap.jpg'
import projectBath from './assets/banop.jpg'

// --- ICONOS PARA LA CALCULADORA FUNCIONAL ---
import iconMuro from './assets/iconomuro.png'
import iconColumna from './assets/iconocolumna.png'
import iconFachada from './assets/tcalculadora.png' 

// --- ICONOS DEL FOOTER ---
import logoWhite from './assets/logowhite.png'
import iconFb from './assets/iconofacebook.png'
import iconInsta from './assets/iconoinstagram.png'
import iconYt from './assets/iconoyoutube.png'

// IMAGEN PAPEL RASGADO (Nota: Respetamos la mayúscula .PNG tal cual tu archivo)
import tornPaper from './assets/papelrasgado.PNG'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // --- ESTADOS DE LA CALCULADORA ---
  const [ancho, setAncho] = useState('');
  const [alto, setAlto] = useState('');
  const [tipoMuro, setTipoMuro] = useState('sencillo'); 
  const [resultado, setResultado] = useState(0);

  // --- LÓGICA DE CÁLCULO ---
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
  const calcIconStyle = { height: "40px", marginBottom: "8px", filter: "brightness(0) invert(1)" };

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

      {/* --- AQUÍ ESTABA EL ERROR (Ya corregido) --- */}
      
      {/* IMAGEN DE PAPEL RASGADO (Separador) */}
      <div className="paper-divider">
        <img src={tornPaper} alt="Decoración papel" />
      </div>

      {/* --- SECCIÓN CALCULADORA --- */}
      <section className="calculator-section">
        <div className="calc-container">
          <h2 style={{color:'white', marginBottom:'25px', fontSize:'2rem'}}>¿QUÉ CONSTRUIMOS?</h2>
          
          <div className="calc-options">
            <button 
              className={`calc-btn ${tipoMuro === 'sencillo' ? 'active' : ''}`} 
              onClick={() => setTipoMuro('sencillo')}
            >
              <img src={iconMuro} alt="Muro" style={calcIconStyle} /> <br/>
              Muro Divisorio
            </button>

            <button 
              className={`calc-btn ${tipoMuro === 'doble' ? 'active' : ''}`} 
              onClick={() => setTipoMuro('doble')}
            >
              <img src={iconColumna} alt="Columna" style={calcIconStyle} /> <br/>
              Estructural
            </button>

            <button 
              className={`calc-btn ${tipoMuro === 'fachada' ? 'active' : ''}`} 
              onClick={() => setTipoMuro('fachada')}
            >
              <img src={iconFachada} alt="Fachada" style={calcIconStyle} /> <br/>
              Fachada
            </button>
          </div>

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

          <div className="calc-result">
            <span className="result-number">{resultado}</span>
            <span className="result-text">BRICKOS ESTIMADOS.</span>
          </div>

          <button className="cta-button secondary">AGREGAR A CARRITO</button>
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
        <div className="footer-container">
          
          {/* Columna 1: Marca */}
          <div className="footer-col brand-col">
            <img src={logoWhite} alt="Bricko White" className="footer-logo-img" />
            <p className="footer-slogan">Revolución Ecológica en Construcción.</p>
          </div>

          {/* Columna 2: Enlaces Legales */}
          <div className="footer-col links-col">
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Tiempos de Envío</a>
            <a href="#">Garantía y Devoluciones</a>
            <a href="#">Aviso de Privacidad</a>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="footer-col contact-col">
            <p>Email: ventas@bricko.com</p>
            <p>Tel: +55-55-55-55-55</p>
            <div className="social-icons">
               <div className="social-circle">
                 <img src={iconYt} alt="YouTube" />
               </div>
               <div className="social-circle">
                 <img src={iconInsta} alt="Instagram" />
               </div>
               <div className="social-circle">
                 <img src={iconFb} alt="Facebook" />
               </div>
            </div>
            <p className="copyright">Redes:</p>
          </div>

        </div>
      </footer>

    </div> 
  )
}

export default App
