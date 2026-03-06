import React from 'react';
import { Leaf, TrendingUp, Cuboid } from 'lucide-react';
import logoWhite from '../assets/logowhite.png';

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      {/* 1. HERO MANIFIESTO */}
      <section
        className="nosotros-hero"
        // Cambia 'textura-celulosa.jpg' por la imagen real de la borra de papel que subas a public
        style={{ backgroundImage: "url('/textura-celulosa.jpg')" }}
      >
        <div className="nosotros-overlay"></div>
        <div className="nosotros-hero-content">
          <img src={logoWhite} alt="Bricko" />
          <h1 className="nosotros-title">
            NO VENDEMOS LADRILLOS.
            <br />
            REINVENTAMOS LA BASURA.
          </h1>
          <p className="nosotros-subtitle">
            Somos Bricko. Transformamos desechos de papel en arquitectura de
            vanguardia mediante ingeniería patentada.
          </p>
        </div>
      </section>

      {/* 2. MISIÓN, VISIÓN, VALORES */}
      <section className="mvv-section">
        <div className="mvv-grid">
          <div className="mvv-card">
            <div className="mvv-icon-wrapper">
              <Leaf size={60} strokeWidth={1.5} />
            </div>
            <h3>Misión</h3>
            <h2>Transformar</h2>
            <p>
              Somos Bricko. Transformamos desechos de papel en arquitectura de
              vanguardia mediante ingeniería patentada.
            </p>
          </div>

          <div className="mvv-card">
            <div className="mvv-icon-wrapper">
              <TrendingUp size={60} strokeWidth={1.5} />
            </div>
            <h3>Visión</h3>
            <h2>Liderar</h2>
            <p>
              Ser la referencia mundial en arquitectura sostenible, demostrando
              que la economía circular es el único camino viable para el futuro
              de la construcción.
            </p>
          </div>

          <div className="mvv-card">
            <div className="mvv-icon-wrapper">
              <Cuboid size={60} strokeWidth={1.5} />
            </div>
            <h3>Valores</h3>
            <h2>Innovar</h2>
            <p>
              <strong>Innovación:</strong> Cuestionamos lo establecido.
              <br />
              <br />
              <strong>Sostenibilidad:</strong> El planeta es primero.
              <br />
              <br />
              <strong>Calidad:</strong> Seguridad sin compromisos.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INGENIERÍA MEXICANA (Blueprint) */}
      <section
        className="blueprint-section"
        // Cambia 'blueprint.jpg' por la imagen de tu plano de AutoCAD
        style={{ backgroundImage: "url('/blueprint.jpg')" }}
      >
        <div className="blueprint-overlay"></div>
        <div className="blueprint-content">
          <h2 className="blueprint-title">INGENIERÍA 100% MEXICANA.</h2>
          <p className="blueprint-subtitle">
            Creemos que el futuro de la construcción{' '}
            <strong>no es gris es verde</strong>
          </p>
        </div>
      </section>

      {/* 4. MUNDO REAL */}
      <section className="realworld-section">
        <h2 className="realworld-title">NUESTRA TECNOLOGÍA EN EL MUNDO REAL</h2>
        <div className="realworld-grid">
          {/* Reemplaza con tus imágenes reales de public/ */}
          <img src="/oficinap.jpg" alt="Aplicación Bricko 1" />
          <img src="/seccion2.jpg" alt="Aplicación Bricko 2" />
          <img src="/banop.jpg" alt="Aplicación Bricko 3" />
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
