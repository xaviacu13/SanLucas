import React, { useEffect, useMemo } from "react";
import { HeaderTeam, PlayerCard } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
// import { teams } from "../../constants/teams/teams";
import { getLogo } from "../../tools/tools";
import { Button, Typography, Box, Skeleton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import { ButtonContainer, MessageContent, CardContainer, PlayerCardWrapper } from "./styles";
import type { IPlayer } from "../../types/types";
import { useTeamsWithPlayers } from "../../hooks/useTeamsWithPlayers";

const DetailTeam: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const idTeamParam = queryParams.get("id");
  const categoryParam = queryParams.get("category");

const { teams, loading } = useTeamsWithPlayers();

  const idTeam =
    idTeamParam && !isNaN(Number(idTeamParam)) ? Number(idTeamParam) : null;

  const team = teams.find((t) => t.id === idTeam);

  const categories = useMemo(
    () =>
      team?.teams
        .map((t) => t.category)
        .filter((cat, index, self) => cat && self.indexOf(cat) === index) ?? [],
    [team],
  );

  const selectedCategory = useMemo(() => {
    if (!categories.length) return "";
    if (categoryParam && categories.includes(categoryParam)) {
      return categoryParam;
    }
    return categories[0] || "";
  }, [categories, categoryParam]);

  const canGoBack = React.useMemo(() => {
    return location.key !== "default";
  }, [location.key]);

  const handleCategoryChange = (cat: string) => {
    navigate(`/team-detail?id=${idTeam}&category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  const onShare = () => {
    if (!team) return;

const shareUrl = `${window.location.origin}/team-detail?id=${idTeam}&category=${encodeURIComponent(selectedCategory)}`;

    const shareData = {
      title: `Comunidad: ${team.name}`,
      text: `Información del equipo ${team.name} - Categoría: ${selectedCategory}`,
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        console.error("Error sharing:", error);
      });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("URL copiada al portapapeles!");
      });
    }
  };

  const selectedPlayers: IPlayer[] =
    team?.teams.find((t) => t.category === selectedCategory)?.players ?? [];

  useEffect(() => {
    if (team) {
      const title = selectedCategory
        ? `${team.name} - ${selectedCategory}`
        : team.name;
      document.title = title;
    } else {
      document.title = "Detalle de equipo";
    }
  }, [team, selectedCategory]);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
if (loading) {
  return (
    <PlayerCardWrapper>
      {[...Array(6)].map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            mb: 2,
            p: 2,
            borderRadius: "16px",
            boxShadow: 1,
          }}
        >
          <Skeleton variant="circular" width={60} height={60} />
          <Box width="100%">
            <Skeleton width="60%" height={20} />
            <Skeleton width="40%" height={20} />
          </Box>
        </Box>
      ))}
    </PlayerCardWrapper>
  );
}
  if (!team) {
    return <Typography variant="h3">Equipo no encontrado.</Typography>;
  }

  return (
    <>
      <HeaderTeam
        img={getLogo(team.name)}
        name={team.name}
        color={team.color}
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <CardContainer>
        {selectedPlayers.length > 0 ? (
          <>
            {selectedPlayers.map((player, index) => (
              <PlayerCard
                key={`${selectedCategory}-${player.id}`}
                idTeam={idTeam ?? undefined}
                category={selectedCategory}
                id={player.id}
                name={player.name}
                fullName={player.fullName}
                DNI={player.DNI}
                number={player.number}
                position={player.position}
                index={index}
                image={player.image || getLogo("Default")}
              />
            ))}

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
          </>
        ) : (
          <MessageContent>
            <Typography variant="h3" color="primary">
              Aun no hay jugadores registrados.
            </Typography>
            <Typography variant="h6" color="secondary">
              Por favor contactar con el Delegado de su cominidad{" "}
            </Typography>
          </MessageContent>
        )}
      </CardContainer>
    </>
  );
};

export default DetailTeam;
