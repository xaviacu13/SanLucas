import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { teams as equipos } from "../../constants/teams/teams";
import { getLogo } from "../../tools/tools";
import { Button, Divider, Tooltip, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import {
  Container,
  Image,
  InfoBox,
  InfoText,
  Title,
  Label,
  ButtonContainer,
  InfoContainer,
  ImageBox,
  Logo,
  NoValid,
} from "./styles";

const PlayerDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const idTeam = queryParams.get("idTeam");
  const idPlayer = queryParams.get("idPlayer");
  const category = queryParams.get("category");

  const canGoBack = React.useMemo(() => {
    return location.key !== "default";
  }, [location.key]);

  if (!idTeam || !idPlayer) {
    return <p>Jugador o equipo no encontrado</p>;
  }

  const team = equipos.find((t) => t.id === Number(idTeam));
  const subTeam = team?.teams.find(
    (sub) => sub.category.toLowerCase() === category?.toLowerCase()
  );
  const player = subTeam?.players.find((p) => p.id === Number(idPlayer));

  const playerUrl = `https://campeonato-d6.netlify.app/player-detail?idPlayer=${idPlayer}&idTeam=${idTeam}&category=${category}`;

  const onContact = () => {
    const phone = "5491130918821";
    const message = `Hola, quiero contactar por el jugador ${player?.name} del equipo ${team?.name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Jugador: ${player?.name}`,
          text: `Información del jugador ${player?.name} del equipo ${team?.name}`,
          url: playerUrl,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Compartir no está soportado en este navegador.");
    }
  };

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (!team || !player) {
    return (
      <NoValid>

        <Typography variant="h2" color="primary">
          El jugador no esta habilitado para jugar el Campeonato de Puca Loma |
          2025.
        </Typography>
        <Typography variant="h6">
          Por favor contactarse con el delegado de su comunidad o con el personal
          administrativo de campeonato!
        </Typography>
        ;
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
          startIcon={canGoBack ? <ReplyIcon /> : <HomeIcon />}
        >
          {canGoBack ? "VOLVER" : "INICIO"}
        </Button>
      </NoValid>
    );
  }

  return (
    <Container>
      <Image src={player.image || getLogo("Default")} alt={player.name} />
      <Title>
        {player.name}
        {" - "}
        {player.number}
      </Title>
      <Typography variant="h2" color="primary">
        {player.fullName}
      </Typography>
      <Divider style={{ margin: "10px 0", color: "gray" }} />
      <InfoContainer>
        <InfoBox>
          <InfoText>
            <Label>CODIGO:</Label> {String(player.DNI).slice(-5)}
          </InfoText>
          <InfoText>
            <Label>Posición:</Label> {player.position}
          </InfoText>
          <InfoText>
            <Label>Equipo:</Label> {team.name}
          </InfoText>
          <InfoText>
            <Label>Categoria:</Label> {subTeam?.category}
          </InfoText>
        </InfoBox>
        <ImageBox>
          <Logo src={getLogo(team.name)} alt={team.name} />
        </ImageBox>
      </InfoContainer>
      <Divider style={{ margin: "1px 0", color: "gray" }} />
      <ButtonContainer>
        <Tooltip title="Próximamente">
          <Button
            variant="contained"
            color="primary"
            startIcon={<WhatsAppIcon />}
            onClick={onContact}
            disabled
          >
            CONTACTAR
          </Button>
        </Tooltip>

        <Button
          variant="contained"
          color="primary"
          onClick={onShare}
          startIcon={<ShareIcon />}
        >
          COMPARTIR
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
          startIcon={canGoBack ? <ReplyIcon /> : <HomeIcon />}
        >
          {canGoBack ? "VOLVER" : "INICIO"}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default PlayerDetail;
