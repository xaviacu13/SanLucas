import React, { useEffect, useState } from "react";
import portada1 from "../../assets/images/portada/por1.png";
import portada2 from "../../assets/images/portada/por2.png";
import portada3 from "../../assets/images/portada/por3.png";

import ArticleIcon from "@mui/icons-material/Article";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";

import { Header, Hero, Footer } from "../../components";
import notifications from "../../constants/notifications";
import type { BeforeInstallPromptEvent } from "../../types/types";

import {
  Cards,
  CardsContainer,
  TitleContainer,
  TitleText,
  NotificationIconWrapper,
  NotificationDot,
  FooterContainer,
  PageContainer,
} from "./styles";

import { Button, Box } from "@mui/material";

const portada = [portada1, portada2, portada3];

const LAST_SEEN_KEY = "lastSeenNotificationId";

const Home: React.FC = () => {
  const [lastSeenId, setLastSeenId] = useState<number | null>(() => {
    const storedId = localStorage.getItem(LAST_SEEN_KEY);
    return storedId ? Number(storedId) : null;
  });

  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    return !isStandalone;
  });

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
    };
  }, []);

  const hasNewNotifications = (() => {
    if (notifications.length === 0) return false;
    const latestId = notifications[notifications.length - 1].id;
    return !lastSeenId || latestId > lastSeenId;
  })();

  const handleOpenNotifications = () => {
    if (notifications.length > 0) {
      const latestId = notifications[notifications.length - 1].id;
      setLastSeenId(latestId);
      localStorage.setItem(LAST_SEEN_KEY, String(latestId));
    }
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("Usuario instaló la app");
    }

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleClose = () => {
    setShowInstall(false);
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
            Aquí encontrarás toda la información sobre los equipos, jugadores y
            estadísticas del campeonato intercomunal municipio San Lucas.
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

        {showInstall && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 2,
              background: "#e3f2fd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 500,
              margin: "20px auto",
            }}
          >
            <span>Instalá la app para mejor experiencia</span>

            <div>
              <Button
                variant="contained"
                size="small"
                onClick={handleInstallClick}
                startIcon={<AddToHomeScreenIcon />}
              >
                Instalar
              </Button>

              <Button size="small" onClick={handleClose} sx={{ ml: 1 }}>
                ✕
              </Button>
            </div>
          </Box>
        )}
      </div>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </PageContainer>
  );
};

export default Home;
