import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { teams as equipos } from "../../constants/teams/teams";
import logo from "../../assets/images/icons/logo1.png";
import { getLogo } from "../../tools/tools";
import { Button, Divider, Typography, Alert, Skeleton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import { getPlayerById } from "../../services/players.service";
import type { IPlayerDB } from "../../types/types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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
  HeaderCard,
  HomeButton,
  Root,
} from "./styles";

const PlayerDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const idTeam = queryParams.get("idTeam");
  const idPlayer = queryParams.get("idPlayer");
  const category = queryParams.get("category");

  const [player, setPlayer] = useState<IPlayerDB | null>(null);
  const [loading, setLoading] = useState(true);

  const params = createSearchParams({
  idPlayer: String(idPlayer),
  idTeam: String(idTeam),
  category: String(category),
});

  useEffect(() => {
    const fetchPlayer = async () => {
      if (!idPlayer) return;

      setLoading(true);
      const data = await getPlayerById(idPlayer);
      setPlayer(data);
      setLoading(false);
    };

    fetchPlayer();
  }, [idPlayer]);

  const canGoBack = React.useMemo(() => {
    return location.key !== "default";
  }, [location.key]);

  if (!idTeam || !idPlayer) {
    return <p>Jugador o equipo no encontrado</p>;
  }

  const team = equipos.find((t) => t.id === Number(idTeam));
  const subTeam = team?.teams.find(
    (sub) => sub.category.toLowerCase() === category?.toLowerCase(),
  );

const playerUrl = `${window.location.origin}/player-detail?${params}`;

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

  if (loading){
  return (
    <Root>
      <HeaderCard>
        <Skeleton variant="circular" width={40} height={40} />
      </HeaderCard>

      <Container>
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            maxWidth: "35rem",
            height: "200px",
            margin: "0 auto 0.5rem",
            borderRadius: "10%",
          }}
        />

        <Skeleton width="60%" height={40} sx={{ margin: "0 auto" }} />
        <Skeleton width="40%" height={30} sx={{ margin: "0 auto" }} />

        <Divider sx={{ my: 2 }} />

        <InfoContainer>
          <InfoBox>
            <Skeleton width="80%" />
            <Skeleton width="70%" />
            <Skeleton width="60%" />
            <Skeleton width="50%" />
          </InfoBox>

          <ImageBox>
            <Skeleton variant="circular" width={80} height={80} />
          </ImageBox>
        </InfoContainer>

        <Divider sx={{ my: 2 }} />

        <ButtonContainer>
          <Skeleton variant="rounded" width={150} height={40} />
          <Skeleton variant="rounded" width={150} height={40} />
        </ButtonContainer>
      </Container>
    </Root>
  );
};

  if (!team || !player) {
    return (
      <NoValid>
        <Typography variant="h2" color="primary">
          El jugador no esta habilitado para jugar el Campeonato intercomunal de
          San Lucas 2026
        </Typography>
        <Typography variant="h6">
          Por favor contactarse con el delegado de su comunidad o con el
          personal administrativo de campeonato!
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
    <Root>
      <HeaderCard>
        <Logo src={logo} alt={team.name} />
        <HomeButton color="secondary" onClick={() => navigate("/")}>
          <HomeIcon />
        </HomeButton>
      </HeaderCard>
      <Container>
        <Image src={player.image_url || getLogo("Default")} alt={player.name} />
        <Title>
          {player.name}
          {" - "}
          {player.number}
        </Title>
        <Typography variant="h2" color="primary">
          {player.full_name}
        </Typography>
        <Divider style={{ margin: "10px 0", color: "gray" }} />
        <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          <Typography variant="body2" color="secondary">
            HABILITADO PARA JUGAR EL CAMPEONATO INTERCOMUNAL DE SAN LUCAS 2026
          </Typography>
        </Alert>
        <Divider style={{ margin: "10px 0", color: "gray" }} />
        <InfoContainer>
          <InfoBox>
            <InfoText>
              <Label>CODIGO:</Label> {String(player.dni).slice(-5)}
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
    </Root>
  );
};

export default PlayerDetail;
