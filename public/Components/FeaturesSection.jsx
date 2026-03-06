import React, { useState } from 'react';

const FeaturesSection = () => {
  const [active, setActive] = useState(0);

  // La matriz purgada. Solo los datos crudos, sin distracciones visuales.
  const features = [
    {
      title: 'Instalación Limpia',
      desc: 'Nuestro sistema constructivo permite un proceso seco, rápido y sin escombros, ideal para reformas de interiores.',
    },
    {
      title: 'Seguridad Ignífuga',
      desc: 'El ladrillo de celulosa Bricko es altamente resistente al fuego, proporcionando seguridad pasiva en tus construcciones.',
    },
    {
      title: 'Manejabilidad Total',
      desc: 'Se corta, clava y atornilla con la misma facilidad que la madera, simplificando la instalación y los acabados.',
    },
    {
      title: 'Aislamiento Acústico',
      desc: 'Privacidad total. Su matriz fibrosa absorbe el ruido ambiental, ideal para oficinas y habitaciones.',
    },
    {
      title: 'Ligereza Extrema',
      desc: 'Reduce drásticamente la carga estructural y facilita el transporte, permitiendo construcciones mucho más ágiles.',
    },
  ];

  return (
    <section
      className="features-viewport"
      // Aquí anclamos la textura inmutable.
      // He puesto 'muro.png', pero puedes cambiarlo por la imagen de textura que prefieras.
      style={{ backgroundImage: "url('/fabrica.png')" }}
    >
      <div className="features-overlay-dark"></div>

      <div className="features-inner-container">
        {/* Columna Izquierda: El Menú */}
        <div className="pill-menu">
          {features.map((f, i) => (
            <button
              key={i}
              className={`pill-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span style={{ fontWeight: 'bold' }}>{f.title}</span>
              <span
                style={{
                  color: active === i ? '#22c55e' : '#666',
                  fontSize: '1.5rem',
                }}
              >
                ⊕
              </span>
            </button>
          ))}
        </div>

        {/* Columna Derecha: El Contenido */}
        <div className="glass-feature-card">
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            {features[active].title}
          </h2>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.6', margin: 0 }}>
            {features[active].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
