// src/pages/CallUp/index.tsx

import React from "react";
import {
  Container,
  Subtitle,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  Highlight,
  ButtonsContainer,
} from "./styles";

import { Button } from "@mui/material";
import { Title as CallTitle } from "../../components";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import BorderColorIcon from "@mui/icons-material/BorderColor";

import convocatoria from "../../assets/documents/convocatoria.pdf";

const CallUp: React.FC = () => {
  return (
    <Container>
      <CallTitle title="Convocatoria Campeonato San Lucas 2026" />

      <Paragraph>
        Las comunidades <strong>Monte Pampa, Rodeo Cocha, Tambo K’asa, Sabala y
        Huayllani Grande</strong> convocan al Campeonato Intercomunal del
        Municipio de San Lucas, en las categorías <strong>Varones, Damas,
        Niños y Seniors</strong>.
      </Paragraph>

      <Paragraph>
        Con el objetivo de fortalecer la amistad, la confraternidad y la unión
        entre las familias de nuestro municipio, comunidades y distritos.
      </Paragraph>

      <Subtitle>INSCRIPCIONES</Subtitle>

      <Paragraph>
        Las inscripciones quedan abiertas desde la fecha hasta el{" "}
        <Highlight>28 de marzo de 2026</Highlight>.
      </Paragraph>

      <Subtitle>INAUGURACIÓN</Subtitle>

      <Paragraph>
        La inauguración del campeonato se realizará el día{" "}
        <Highlight>domingo 29 de marzo de 2026 a horas 08:00 a.m.</Highlight>
      </Paragraph>

      <Subtitle>REUNIÓN DE DELEGADOS</Subtitle>

      <Paragraph>
        La reunión con los delegados de cada equipo se realizará el día{" "}
        <Highlight>21 de marzo de 2026 a horas 15:00</Highlight> en el Complejo
        Deportivo Sudamericano “Ex Company”.
      </Paragraph>

      <Paragraph>
        En la misma reunión se realizará el sorteo del campeonato.
      </Paragraph>

      <Subtitle>COSTO DE INSCRIPCIONES</Subtitle>

      <Paragraph>
        <strong>1. Categoría Juvenil</strong>
      </Paragraph>

      <List>
        <ListItem>
          Costo de inscripción: <Highlight>$400.000</Highlight>
        </ListItem>
        <ListItem>Mínimo: 11 jugadores</ListItem>
        <ListItem>Máximo: 20 jugadores</ListItem>
      </List>

      <Paragraph>
        <strong>2. Categoría Damas y Senior</strong>
      </Paragraph>

      <List>
        <ListItem>
          Costo de inscripción: <Highlight>$300.000</Highlight>
        </ListItem>
        <ListItem>Mínimo: 7 jugadores</ListItem>
        <ListItem>Máximo: 15 jugadores</ListItem>
      </List>

      <Paragraph>
        <strong>3. Categoría Niños</strong>
      </Paragraph>

      <List>
        <ListItem>
          Costo de inscripción: <Highlight>$200.000</Highlight>
        </ListItem>
        <ListItem>Mínimo: 5 jugadores</ListItem>
        <ListItem>Máximo: 10 jugadores</ListItem>
        <ListItem>Categorías permitidas: 2015 / 2016 / 2017 / 2018</ListItem>
      </List>

      <Subtitle>PARTICIPACIÓN DE FAMILIARES</Subtitle>

      <Paragraph>
        Se permitirá <Highlight>1 yerno de nacionalidad boliviana</Highlight>.
      </Paragraph>

      <List>
        <ListItem>
          Presentar certificado de matrimonio o certificado de hijo/a.
        </ListItem>
        <ListItem>DNI de papá y mamá.</ListItem>
        <ListItem>No se aceptarán testigos.</ListItem>
      </List>

      <Paragraph>
        También se permitirá la participación de <strong>padre, madre y
        nietos</strong>.
      </Paragraph>

      <Paragraph>
        Para la categoría damas se permitirán <Highlight>2 nueras</Highlight>
        con los mismos requisitos.
      </Paragraph>

      <Subtitle>REGLAMENTOS</Subtitle>

      <Paragraph>
        <strong>Uniforme</strong>
      </Paragraph>

      <List>
        <ListItem>
          Cada equipo debe presentarse con uniforme completo y numeración
          visible.
        </ListItem>
        <ListItem>No se permitirá repetir números.</ListItem>
      </List>

      <Paragraph>
        <strong>Accesorios</strong>
      </Paragraph>

      <List>
        <ListItem>
          Se prohíbe el uso de aretes, pulseras o collares durante el partido.
        </ListItem>
      </List>

      <Paragraph>
        <strong>Canilleras</strong>
      </Paragraph>

      <List>
        <ListItem>
          Cada jugador debe presentarse con canilleras.
        </ListItem>
        <ListItem>
          Multa por incumplimiento: <Highlight>$10.000</Highlight>
        </ListItem>
      </List>

      <Subtitle>SANCIONES</Subtitle>

      <List>
        <ListItem>Tarjeta amarilla: $3.000</ListItem>
        <ListItem>Tarjeta roja: $6.000</ListItem>
        <ListItem>Soborno a árbitro: multa $200.000</ListItem>
        <ListItem>No asistir a reunión: multa $80.000</ListItem>
      </List>

      <Subtitle>INFORMACIÓN Y CONTACTO</Subtitle>

      <ContactInfo>
        Correa Delio – 1141957971 <br />
        Rodríguez Hernán – 1150171880 <br />
        Segarra Tomás – 1136531909 <br />
        Acuña Gerardo – 1127305021 <br />
        Alvarado Beto – 1151762134
      </ContactInfo>

      <Paragraph>
        🌐 Nuestro sitio web: https://san-lucas.netlify.app
      </Paragraph>

      <ButtonsContainer>
        {/* <Button
          variant="contained"
          color="primary"
          startIcon={<BorderColorIcon />}
          onClick={() => window.open("/inscriptions")}
        >
          Inscribirse
        </Button> */}

        <Button
          variant="contained"
          color="primary"
          component="a"
          href={convocatoria}
          download="Convocatoria_San_Lucas_2026.pdf"
          startIcon={<FileDownloadIcon />}
        >
          Descargar PDF
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default CallUp;
