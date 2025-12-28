import React from 'react'
import './App.css' // IMPORTANTE: Aquí debe estar importado el CSS donde pusiste el :root

function App() {
  return (
    // Aplicamos la variable directamente aquí para probar
    <div style={{ fontFamily: 'var(--font-main)', textAlign: 'center', marginTop: '50px' }}>
      
      <h1>PRUEBA DE FUENTE TEKO</h1>
      
      <p style={{ fontSize: '1.5rem' }}>
        Si ves este texto estilizado (alto y cuadrado), <br />
        tu variable --font-main está funcionando correctamente.
      </p>

      <button style={{ fontFamily: 'var(--font-main)', fontSize: '1.2rem', padding: '10px 20px' }}>
        Botón de prueba
      </button>

    </div>
  )
}

export default App
