import React, { useState, useMemo,useEffect } from "react";
import { HeaderTeam, PlayerCard } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { teams } from "../../constants/teams/teams";
import { getLogo } from "../../tools/tools";
import { Button, Typography } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import { ButtonContainer, MessageContent, CardContainer } from "./styles";
import type { IPlayer } from "../../types/types";

const DetailTeam: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const idTeamParam = queryParams.get("id");
  const categoryParam = queryParams.get("category");

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

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      return categoryParam;
    } else if (categories.length > 0) {
      return categories[0];
    }
    return "";
  });

  const canGoBack = React.useMemo(() => {
    return location.key !== "default";
  }, [location.key]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    navigate(`/team-detail?id=${idTeam}&category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  const onShare = () => {
    if (!team) return;

    const shareUrl = `san-lucas.netlify.app/team-detail?id=${idTeam}&category=${encodeURIComponent(
      selectedCategory,
    )}`;

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
            <Typography variant="h3">
              Aun no hay jugadores registrados.
            </Typography>
            <Typography variant="h6">
              Por favor contactar con el Delegado de su cominidad{" "}
            </Typography>
          </MessageContent>
        )}
      </CardContainer>
    </>
  );
};

export default DetailTeam;
