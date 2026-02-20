/* 1. CONFIGURACIÓN BÁSICA */
:root {
  --font-main: "Teko", sans-serif;
  --color-green: #4CAF50;
  --color-dark: #1a1a1a;
  --color-light: #f4f4f4;
}
body { margin: 0; font-family: 'Segoe UI', sans-serif; background-color: white; overflow-x: hidden; }
h1, h2, h3 { font-family: var(--font-main); text-transform: uppercase; margin: 0; }

/* 2. NAVBAR INDUSTRIAL */
.top-bar { background: var(--color-green); color: white; text-align: center; padding: 5px 0; font-size: 0.8rem; font-weight: bold; }

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background: #111; /* Negro sólido para evitar transparencias raras */
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 2px solid var(--color-green);
}

.logo-img { height: 40px; width: auto; }

.hamburger { display: none; color: white; font-size: 2rem; cursor: pointer; }

.nav-menu {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  background: transparent; /* Eliminamos el fondo blanco de aquí */
}

/* 1. Preparamos el contenedor del texto */
.nav-menu li {
  position: relative; /* Necesario para que la línea se pegue al texto */
  color: #ffffff; 
  font-family: var(--font-main);
  font-size: 1.1rem;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 5px 0;
  transition: color 0.3s ease;
}

/* 2. Creamos la línea (invisible al inicio) */
.nav-menu li::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-green); /* Tu verde característico */
  transform: scaleX(0); /* La encogemos a cero */
  transform-origin: bottom center; /* Crece desde el centro */
  transition: transform 0.3s ease-out;
}
/* 3. El efecto al pasar el ratón */
.nav-menu li:hover {
  color: var(--color-green); /* El texto también cambia a verde suavemente */
}

.nav-menu li:hover::after {
  transform: scaleX(1); /* La línea se expande al 100% */
}

.nav-icon-img {
  height: 20px;
  filter: brightness(0) invert(1);
  margin-left: 20px;
}

/* 3. HERO SLIDER */
.hero-slider {
  position: relative;
  height: 85vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover; background-position: center;
  opacity: 0; transition: opacity 1.5s ease-in-out;
}

.slide.active { opacity: 1; }

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  text-align: center;
}

.hero-center-logo { height: 80px; margin-bottom: 10px; }
.hero-title { font-size: 3.5rem; color: #111; line-height: 1; }
.hero-subtitle { font-size: 1.2rem; margin-bottom: 20px; color: #333; }

.cta-button {
  background: var(--color-green); color: white; border: none;
  padding: 12px 30px; font-family: var(--font-main); font-size: 1.2rem;
  text-transform: uppercase; cursor: pointer; border-radius: 4px;
}

/* 4. SECCIONES DE CONTENIDO */
.paper-wrapper { background-size: cover; background-position: top; padding: 40px 0; }

.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
.benefit-card { text-align: center; }
.icon-box { background: var(--color-green); height: 100px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; }
.icon-box img { height: 50px; filter: brightness(0) invert(1); }

/* CALCULADORA */
.calculator-section { display: flex; justify-content: center; padding: 40px 20px; }
.calc-container { background: #1a1a1a; color: white; padding: 40px; border-radius: 20px; width: 100%; max-width: 450px; text-align: center; }
.calc-options { display: flex; gap: 10px; margin: 20px 0; }
.calc-btn { flex: 1; background: transparent; border: 1px solid #444; color: white; padding: 10px; border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; align-items: center; font-size: 0.7rem; }
.calc-btn.active { border-color: var(--color-green); background: rgba(76, 175, 80, 0.1); }
.calc-icon-svg { height: 30px; margin-bottom: 5px; filter: brightness(0) invert(1); }

.calc-inputs { display: flex; gap: 20px; justify-content: center; margin: 20px 0; }
.input-group input { width: 70px; height: 70px; border-radius: 50%; border: none; background: var(--color-green); color: white; text-align: center; font-size: 1.5rem; font-weight: bold; }

.calc-result { margin: 20px 0; }
.result-number { font-size: 3.5rem; display: block; font-family: var(--font-main); }

/* 5. FOOTER */
.footer { background: #050505; color: white; padding: 40px 20px; }
.footer-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 30px; }
.footer-logo-img { height: 40px; margin-bottom: 10px; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar { padding: 10px 20px; }
  .hamburger { display: block; }
  .nav-menu {
    display: none; position: absolute; top: 100%; left: 0; width: 100%;
    background: #111; flex-direction: column; padding: 20px 0;
  }
  .nav-menu.active { display: flex; }
  .hero-title { font-size: 2.2rem; }
}
