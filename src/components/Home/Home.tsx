import logo from "../../assets/images/logos/logo2.png";
import callUp from "../../assets/documents/convocatoria.pdf";
import { FaWhatsapp, FaChromecast, FaCloudDownloadAlt } from "react-icons/fa";

import {
  Container,
  Logo,
  Title,
  Subtitle,
  Description,
  SectionTitle,
  Contact,
  CallUpContainer,
  CallUpButton,
  Footer,
} from "./styles";

const message =
  "Hola me podria pasar mas informacion sobre el campeonato municipal de San Lucas por favor?";

const contacts = [
  { name: "Correa Delio", phone: "5491141957971" },
  { name: "Rodríguez Hernán", phone: "5491150171880" },
  { name: "Segarra Tomás", phone: "5491136531909" },
  { name: "Acuña Gerardo", phone: "5491127305021" },
  { name: "Alvarado Beto", phone: "5491151762134" },
];

function Home() {
  return (
    <Container>
      <Logo src={logo} alt="Logo campeonato" />

      <Title>Campeonato de Fútbol Intercomunal</Title>
      <Subtitle>Municipio San Lucas - 2026</Subtitle>

      <Description>
        Aquí encontrarás toda la información sobre los equipos, jugadores y
        estadísticas del campeonato.
      </Description>

      <SectionTitle>Contactos e inscripciones</SectionTitle>

      {contacts.map((contact) => (
        <Contact
          key={contact.phone}
          href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          {contact.name} - {contact.phone}
        </Contact>
      ))}

      <SectionTitle>Convocatoria</SectionTitle>

      <CallUpContainer>
        <CallUpButton href='/call-up'>
          <FaChromecast />
          Mostrar
        </CallUpButton>

        <CallUpButton href={callUp} download="Convocatoria 2026.pdf">
          <FaCloudDownloadAlt />
          Descargar
        </CallUpButton>
      </CallUpContainer>

      <SectionTitle>Organiza</SectionTitle>

      <Description>
        Monte Pampa - Rodeo Cocha - Tambo K’asa - Sabala - Huayllani Grande
      </Description>

      <Footer>
        Xavi Innovation Technology © 2026. All rights reserved.
        <br />
        Contact us at: 1130918821
      </Footer>
    </Container>
  );
}

export default Home;
