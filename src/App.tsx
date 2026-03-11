import logo from "../src/images/logos/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h3>Campeonato de Fútbol intercomunal</h3>
      <h5>San Lucas - 2026</h5>
      <p className="read-the-docs">
        Aquí encontrarás toda la información sobre los equipos, jugadores y
        estadísticas del campeonato.
      </p>
      <p>Xavi Innovation Technology © 2026. All rights reserved.</p>
    </>
  );
}

export default App;
