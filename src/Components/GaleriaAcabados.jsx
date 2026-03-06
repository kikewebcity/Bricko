import React, { useRef } from 'react';

const GaleriaAcabados = () => {
  const sliderRef = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(0);
  let scrollLeft = useRef(0);

  // La física del arrastre
  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add('active');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // El multiplicador define la sensibilidad del arrastre
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // La matriz visual. Según tus capturas anteriores, tienes fotos como oficinap.jpg o seccion2.jpg
  // Sustituye estos nombres por los archivos exactos que quieras mostrar en tu carpeta public.
  const fotos = [
    '/oficinap.jpg',
    '/seccion2.jpg',
    '/seccion3.jpg',
    '/noticia1.jpg',
  ];

  return (
    <section className="galeria-wrapper">
      <div
        className="galeria-scroll-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {fotos.map((foto, index) => (
          <div key={index} className="galeria-item">
            <img
              src={foto}
              alt={`Acabado Bricko ${index + 1}`}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GaleriaAcabados;
