import React, { useState, useEffect } from 'react';
import './App.css';
import GaleriaAcabados from './Components/GaleriaAcabados';
import FeaturesSection from './Components/FeaturesSection';
import Calculadora from './Components/Calculadora';
import Nosotros from './Components/Nosotros'; /* LA INYECCIÓN DEL NUEVO ÓRGANO */

import { Search, ShoppingCart, Truck } from 'lucide-react';
import logoWhite from './assets/logowhite.png';
import logoSinFondo from './assets/logobricko.png';
import iconYt from './assets/iconoyoutube.png';
import iconInsta from './assets/iconoinstagram.png';
import iconFb from './assets/iconofacebook.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* --- EL INTERRUPTOR MAESTRO --- */
  /* 'inicio' = Portada | 'nosotros' = Filosofía */
  const [vistaActual, setVistaActual] = useState('inicio');

  const heroImages = [
    '/banop.jpg',
    '/oficinap.jpg',
    '/seccion2.jpg',
    '/seccion3.jpg',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <div className="main-container">
      {/* LA CABECERA PERMANECE INMUTABLE EN TODAS LAS VISTAS */}
      <div className="top-bar">
        <Truck size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
        <span>Envíos a todo el país </span>
      </div>

      <nav className="navbar">
        {/* Al hacer clic en el logo, regresamos al 'inicio' */}
        <div
          className="logo-container"
          onClick={() => setVistaActual('inicio')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logoWhite} alt="Bricko" className="logo-img" />
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {/* Al hacer clic en NOSOTROS, activamos la nueva vista */}
          <li
            onClick={() => setVistaActual('nosotros')}
            className={vistaActual === 'nosotros' ? 'active-link' : ''}
          >
            NOSOTROS
          </li>
          <li
            onClick={() => setVistaActual('inicio')}
            className={vistaActual === 'inicio' ? 'active-link' : ''}
          >
            PRODUCTOS
          </li>
          <li>INSPIRACIÓN</li>
          <li>CONTACTO</li>
        </ul>
        <div className="nav-icons">
          <Search
            color="white"
            size={22}
            strokeWidth={2.5}
            className="nav-icon"
          />
          <ShoppingCart
            color="white"
            size={22}
            strokeWidth={2.5}
            className="nav-icon"
          />
        </div>
      </nav>

      {/* --- RENDERIZADO CONDICIONAL --- */}
      {/* Si el interruptor dice 'inicio', muestra toda la maquinaria comercial */}
      {vistaActual === 'inicio' ? (
        <>
          <section className="hero-slider">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
            <div className="hero-slider-content">
              <img
                src={logoSinFondo}
                alt="Bricko"
                className="hero-center-logo"
              />
              <h1 className="hero-title">
                TU NUEVO ESPACIO INDUSTRIAL,
                <br /> LISTO EN HORAS
              </h1>
              <div className="hero-action-group">
                <button className="cta-button">Solicitar Ficha Técnica</button>
                <div className="secondary-actions">
                  <button className="btn-secondary">Ver Acabados</button>
                  <button className="btn-secondary">Solicitar Muestra</button>
                </div>
              </div>
            </div>
          </section>

          <section className="intro-section">
            <div className="intro-container">
              <h2 className="intro-title">
                <strong>BRICKO -</strong> Redefine los espacios interiores
                convirtiendo el papel reciclado en arquitectura.
              </h2>
              <p className="intro-subtitle">
                Nuestro ladrillo de celulosa ofrece un sistema constructivo
                limpio y rápido, ideal para diseño de interiores y
                remodelaciones sin impacto ambiental.
              </p>
            </div>
          </section>

          <FeaturesSection />
          <Calculadora />
          <GaleriaAcabados />
        </>
      ) : (
        /* Si el interruptor dice CUALQUIER OTRA COSA (en este caso 'nosotros'), renderiza esto: */
        <Nosotros />
      )}
      {/* --- FIN DEL RENDERIZADO CONDICIONAL --- */}

      {/* EL FOOTER TAMBIÉN ES INMUTABLE */}
      <footer className="footer">
        <div className="footer-overlay"></div>
        <div className="footer-container">
          <div className="footer-col left-col">
            <img src={logoWhite} alt="Bricko" className="footer-logo-img" />
            <p className="footer-slogan">
              Revolución Ecológica en Construcción
            </p>
          </div>
          <div className="footer-col center-col">
            <ul className="footer-links">
              <li>Preguntas Frecuentes</li>
              <li>Tiempos de Envío.</li>
              <li>Garantía y Devoluciones</li>
              <li>Aviso de Privacidad</li>
            </ul>
          </div>
          <div className="footer-col right-col">
            <p className="footer-contact">Email: ventas@bricko.com</p>
            <p className="footer-contact">Tel: -55-55-55-55-55</p>
            <p className="footer-social-label">Redes:</p>
            <div className="social-icons">
              <img src={iconYt} alt="YT" className="social-img" />
              <img src={iconInsta} alt="IG" className="social-img" />
              <img src={iconFb} alt="FB" className="social-img" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
