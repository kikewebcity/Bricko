import React, { useState, useEffect } from 'react'
import './App.css'

// --- 1. IMÁGENES ---
import logoWhite from './assets/logowhite.png' 
import searchIcon from './assets/Iconobusqueda.JPG' 
import cartIcon from './assets/Iconocompra.JPG'   
import logoSinFondo from './assets/logobicko.png' 

// --- 2. SLIDER ---
import seccion1Img from './assets/Seccion1.png'
import seccion2Img from './assets/seccion2.jpg'
import seccion3Img from './assets/seccion3.jpg' // <-- Corregido para evitar el error de declaración

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [seccion1Img, seccion2Img, seccion3Img];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <div className="main-container">
      <div className="top-bar">Envíos a todo el país 🚛</div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logoWhite} alt="Bricko" className="logo-img" />
        </div>
        <ul className="nav-menu">
          <li>NOSOTROS</li>
          <li>PRODUCTOS</li>
          <li>INSPIRACIÓN</li>
          <li>CONTACTO</li>
        </ul>
        <div className="nav-icons">
          <img src={searchIcon} alt="Buscar" className="nav-icon-img"/>
          <img src={cartIcon} alt="Carrito" className="nav-icon-img"/>
        </div>
      </nav>

      <section className="hero-slider">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-content">
          <img src={logoSinFondo} alt="Bricko" className="hero-center-logo" />
          <h1 className="hero-title">TU NUEVO ESPACIO INDUSTRIAL,<br/> LISTO EN HORAS</h1>
          <p className="hero-subtitle">Olvídate del cemento. Renueva con diseño y limpieza</p>
          <button className="cta-button">Solicitar Ficha Técnica y Precios</button>
        </div>
      </section>
    </div>
  );
}

export default App;
