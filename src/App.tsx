import logo from "../src/assets/images/logos/logo.png";
import callUp from "../src/assets/documents/convocatoria.pdf";
import "./App.css";
import { FaWhatsapp, FaChromecast, FaCloudDownloadAlt } from "react-icons/fa";

const message =
  "Hola me podria pasar mas informacion sobre el campeonato municipal de San Lucas por favor?";

const contacts = [
  { name: "Correa Delio", phone: "5491141957971" },
  { name: "Rodríguez Hernán", phone: "5491150171880" },
  { name: "Segarra Tomás", phone: "5491136531909" },
  { name: "Acuña Gerardo", phone: "5491127305021" },
  { name: "Alvarado Beto", phone: "5491151762134" },
];

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Logo campeonato" />
      </div>

      <h3>Campeonato de Fútbol Intercomunal</h3>
      <h4>Municipio San Lucas - 2026</h4>

      <p className="read-the-docs">
        Aquí encontrarás toda la información sobre los equipos, jugadores y
        estadísticas del campeonato.
      </p>

      <h5>Organiza:</h5>

      <p className="read-the-docs">
        Monte Pampa - Rodeo Cocha - Tambo K’asa - Sabala - Huayllani Grande
      </p>

      <h5>Contactos:</h5>

      {contacts.map((contact) => (
        <p key={contact.phone} className="contact">
          <a
            href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(
              message,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            {contact.name} - {contact.phone}
          </a>
        </p>
      ))}
            <h5>Convocatoria:</h5>
      <div className="call-up-container">
        <a
          href={callUp}
          // target="_blank"
          rel="noopener noreferrer"
          className="call-up-button"
        >
          <FaChromecast />
          Mostrar
        </a>

        <a
          href={callUp}
          download="Convocatoria 2026.pdf"
          className="call-up-button download"
        >
          <FaCloudDownloadAlt />
          Descargar
        </a>
      </div>

      <p className="footer">
        Xavi Innovation Technology © 2026. All rights reserved.
      </p>
    </>
  );
}

export default App;
