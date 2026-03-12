import React from "react";
import logo from "../../assets/images/icons/logo1.png";
import { Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import { Container, Logo, SearchContainer, LogoContainer, HomeButton } from "./styles";

const Header: React.FC = () => {



  const handleSearch = (description: string) => {
    console.log('navehgando a...', description);
  };

  const onShare = () => {
    if (!navigator.share) {
      alert("La función de compartir no está disponible en este navegador.");
      return;
    }

    const shareUrl = "https://san-lucas.netlify.app";
    const shareData = {
      title: "Campeonato San Lucas 2026",
      text: "¡Mira el Campeonato San Lucas 2026! Toda la información sobre equipos, jugadores y estadísticas.",
      url: shareUrl,
    };

    navigator
      .share(shareData)
      .catch((error) => console.error("Error sharing:", error));
  };

  const isHomePage = location.pathname === "/";


  return (
    <Container>
      <LogoContainer onClick={() => handleSearch("home")}>
        <Logo src={logo} alt="Logo" />
        <Tooltip title="Compartir">
          <HomeButton
            color="secondary"
            onClick={() => (isHomePage ? onShare() : handleSearch("home"))}
          >
            {isHomePage ? <ShareIcon /> : <HomeIcon />}
          </HomeButton>
        </Tooltip>
      </LogoContainer>
      <SearchContainer>
      </SearchContainer>
    </Container>
  );
};

export default Header;
