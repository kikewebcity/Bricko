import React from 'react';
import './Navbar.css'; // Crearemos este archivo ahora

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BRICKO</div>
      <ul className="nav-links">
        <li>Manifiesto</li>
        <li>Catálogo</li>
        <li>Proyectos</li>
        <li>Blog</li>
        <li>Contacto</li>
      </ul>
      <div className="nav-icons">
        <span>🔍</span> {/* Usamos emojis por ahora como placeholder de iconos */}
        <span>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
