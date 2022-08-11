import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>E- commerce de <strong>café</strong></h2>
        <p>
          Bueno en está primera entrega, voy a presentar mi idea. Como dice el titulo es un e-commerce de productos de <strong>café</strong> y por su puesto de <strong>café</strong>. Sí, me gusta mucho el <strong>café</strong> ¿Cómo te diste cuenta?
        </p>
        <p>Tambien con esta primera presentación me gustaria probar está paleta de colores, ya que, siento que combinan muy bien. Me gustan mucho las paginas con una sola paleta de colores, pero capaz en esta ocasion experimente un poco con los colores. Estoy ansioso por aprender como implementar scss, ya que, ME ENCANTA. Tambien librerias como Animate.css, Three.js, etc</p>
        <a
          className="App-link"
          href="https://joacosangio.github.io/E-commerce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto JS
        </a>
      </header>
    </div>
  );
}

export default App;
