import React, { useState } from "react";
import portada1 from "../../assets/images/portada/por1.png";
import portada2 from "../../assets/images/portada/por2.png";
import portada3 from "../../assets/images/portada/por3.png";
import ArticleIcon from "@mui/icons-material/Article";
//import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
// import BorderColorIcon from "@mui/icons-material/BorderColor";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
// import CallIcon from '@mui/icons-material/Call';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Header, Hero, Footer } from "../../components";
import notifications from "../../constants/notifications";
import {
  Cards,
  CardsContainer,
  TitleContainer,
  TitleText,
  NotificationIconWrapper,
  NotificationDot,
  FooterContainer,
  PageContainer
} from "./styles";

const portada = [portada1, portada2, portada3];

const LAST_SEEN_KEY = "lastSeenNotificationId";

const Home: React.FC = () => {
  const [lastSeenId, setLastSeenId] = useState<number | null>(() => {
    const storedId = localStorage.getItem(LAST_SEEN_KEY);
    return storedId ? Number(storedId) : null;
  });

  const hasNewNotifications = (() => {
    if (notifications.length === 0) return false;
    const latestId = notifications[notifications.length - 1].id;
    return !lastSeenId || latestId > lastSeenId;
  })();

  const handleOpenNotifications = () => {
    if (notifications.length > 0) {
      const latestId = notifications[notifications.length - 1].id;
      setLastSeenId(latestId);
      localStorage.setItem(LAST_SEEN_KEY, String(latestId)); // persistimos
    }
  };

  return (
  <PageContainer>
    <Header />

    <Hero images={portada} />

    <div style={{ textAlign: "center" }}>
      <TitleContainer>
        <TitleText>
          Campeonato de Fútbol Intercomunal | San Lucas 2026
        </TitleText>

        <p>
          Aquí encontrarás toda la información sobre los equipos,
          jugadores y estadísticas del campeonato intercomunal
          municipio San Lucas.
        </p>
      </TitleContainer>

      <CardsContainer>
        <Cards to="/notifications" onClick={handleOpenNotifications}>
          <NotificationIconWrapper>
            <NotificationsIcon fontSize="large" />
            {hasNewNotifications && <NotificationDot />}
          </NotificationIconWrapper>
          <span>Notificaciones</span>
        </Cards>

        <Cards to="/call-up">
          <ArticleIcon fontSize="large" />
          <span>Convocatoria</span>
        </Cards>

        <Cards to="/about">
          <QuestionAnswerIcon fontSize="large" />
          <span>Contactos</span>
        </Cards>
      </CardsContainer>
    </div>

    <FooterContainer>
      <Footer />
    </FooterContainer>
  </PageContainer>
);
};

export default Home;
