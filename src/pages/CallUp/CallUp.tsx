// src/pages/CallUp/index.tsx
import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  Highlight,
  ButtonsContainer,
} from "./styles";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import convocatoria from "../../assets/documents/convocatoria.pdf";

const CallUp: React.FC = () => {
  return (
    <Container>
      <Title>🏆 CONVOCATORIA</Title>
      <Subtitle>
        Campeonato Intercomunal de Fútbol de Distrito 6 – Puca Loma 2025
      </Subtitle>

      <Paragraph>
        La comunidad de Puca Loma, en coordinación con su comité organizador,
        convoca cordialmente a todas las comunidades del Distrito 6 a participar
        del Campeonato Intercomunal de Fútbol 2025 en categorías{" "}
        <strong>Juvenil, Senior, Damas y Niños</strong>, que se llevará a cabo
        con el objetivo de fortalecer la unidad, la confraternidad y el deporte
        entre los pueblos hermanos.
      </Paragraph>

      <Paragraph>
        <strong>📅 Fecha de comienzo de evento (Inauguración):</strong> Domingo
        14 de septiembre de 2025
      </Paragraph>
      <Paragraph>
        <strong>📍 Lugar:</strong> Buenos Aires – Longchamps, Complejo deportivo
        “Berraca”.
      </Paragraph>

      <Subtitle>⚽ Bases del campeonato:</Subtitle>

      <Paragraph>
        <strong>Inscripciones:</strong>
      </Paragraph>
      <List>
        <ListItem>Fecha límite: hasta el 14 de septiembre de 2025</ListItem>
        <ListItem>
          Cuota de inscripción por equipo:{" "}
          <Highlight>$200.000 (Juvenil)</Highlight>,{" "}
          <Highlight>$150.000 (Senior y Damas)</Highlight>,{" "}
          <Highlight>$100.000 (Niños)</Highlight>
        </ListItem>
        <ListItem>Contacto para inscripciones: +54 9 11 5979-7870</ListItem>
      </List>

      <Paragraph>
        <strong>Requisitos:</strong>
      </Paragraph>
      <List>
        <ListItem>
          Cada equipo debe presentar una lista con los datos de los jugadores.
        </ListItem>
        <ListItem>
          Plantilla mínima: 11 jugadores / máxima: 20 jugadores (Juvenil).
        </ListItem>
        <ListItem>
          Plantilla mínima: 7 jugadores / máxima: 15 jugadores (Senior, Damas y
          Niños).
        </ListItem>
        <ListItem>
          Cada equipo debe tener uniforme deportivo más su balón
          correspondiente.
        </ListItem>
      </List>

      <Paragraph>
        <strong>Premiación:</strong>
      </Paragraph>
      <List>
        <ListItem>🥇 1er lugar</ListItem>
        <ListItem>🥈 2do lugar</ListItem>
        <ListItem>🥉 3er lugar</ListItem>
        <ListItem>🏅 Reconocimiento al mejor jugador y mejor arquero</ListItem>
      </List>

      <Paragraph>
        <strong>Reglamento:</strong> Se regirá a todos los reglamentos que emana
        nuestra organización distrital.
      </Paragraph>

      <Paragraph>
        <strong>
          📣 ¡Participa con tu equipo y representa a tu comunidad!
        </strong>
      </Paragraph>

      <Paragraph>
        <em>¡Sí al deporte, no a las drogas!</em>
      </Paragraph>
      <Paragraph>Buenos Aires, 17 de agosto de 2025</Paragraph>

      <ContactInfo>
        <strong>Firmas:</strong>
        <br />
        <br />
        Yona Clemente – Strio. Actas
        <br />
        Sixto Flores – Strio. Economía
        <br />
        <br />
        Xavier M. Acuña – Strio. Tecnología de la Información
        <br />
        Nestor A. Rodriguez – Vicepresidente
        <br />
        Oscar D. Moscoso – Presidente
      </ContactInfo>

      <ButtonsContainer>
        <Button
          onClick={() => {
            window.open("/inscriptions");
          }}
          variant="contained"
          color="primary"
          rel="noopener noreferrer"
          startIcon={<BorderColorIcon />}
        >
          Inscribirse Ahora
        </Button>

        <Button
          variant="contained"
          color="primary"
          component="a"
          href={convocatoria}
          download="Convocatoria_Campeonato_Puca_Loma_2025.pdf"
          style={{ marginLeft: "10px" }}
          startIcon={<FileDownloadIcon />}
        >
          Descargar
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default CallUp;
