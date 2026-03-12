import React, { useEffect, useState } from "react";
import portada1 from "../../assets/images/portada/por1.jpeg";
import portada2 from "../../assets/images/portada/por2.jpg";
import portada3 from "../../assets/images/portada/por3.jpg";
import portada4 from "../../assets/images/portada/por4.jpg";
import portada5 from "../../assets/images/portada/por5.jpeg";
import ArticleIcon from "@mui/icons-material/Article";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
// import BorderColorIcon from "@mui/icons-material/BorderColor";
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
} from "./styles";

const portada = [portada1, portada2, portada3, portada4, portada5];

const LAST_SEEN_KEY = "lastSeenNotificationId";

const Home: React.FC = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const [lastSeenId, setLastSeenId] = useState<number | null>(null);

  useEffect(() => {
    // cargar el último ID visto desde localStorage
    const storedId = localStorage.getItem(LAST_SEEN_KEY);
    if (storedId) {
      setLastSeenId(Number(storedId));
    }
  }, []);

  useEffect(() => {
    if (notifications.length === 0) return;

    const latestId = notifications[notifications.length - 1].id;

    if (!lastSeenId || latestId > lastSeenId) {
      setHasNewNotifications(true);
    } else {
      setHasNewNotifications(false);
    }
  }, [lastSeenId]);

  const handleOpenNotifications = () => {
    if (notifications.length > 0) {
      const latestId = notifications[notifications.length - 1].id;
      setLastSeenId(latestId);
      localStorage.setItem(LAST_SEEN_KEY, String(latestId)); // persistimos
    }
    setHasNewNotifications(false);
  };

  return (
    <>
      <Header />
      <Hero images={portada} />
      <div style={{ textAlign: "center" }}>
        <TitleContainer>
          <TitleText>
            Campeonato de Fútbol Distrito-6 | Puca Loma 2025
          </TitleText>
          <p>
            Aquí encontrarás toda la información sobre los equipos, jugadores y
            estadísticas del campeonato.
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
           <Cards to="/top-scorers-table?category=Juvenil">
            <SportsSoccerIcon fontSize="large" />
            <span>Goleadores</span>
          </Cards>
          {/* <Cards to="/inscriptions">
            <BorderColorIcon fontSize="large" />
            <span>Inscripciones</span>
          </Cards> */}
        </CardsContainer>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
