import React, { useState, useEffect, useMemo } from "react";
import { HeaderCategory, ScorerCard, Title } from "../../components";
import logo from "../../assets/images/icons/logo1.png";
import { useNavigate, useLocation } from "react-router-dom";
import { juvenil } from "../../constants/topScorersTable/juvenil";
import { senior } from "../../constants/topScorersTable/senior";
import { damas } from "../../constants/topScorersTable/damas";
import { categories } from "../../constants/categories";
import { getLogo } from "../../tools/tools";
import { Typography, Button } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import type { IScorer } from "../../types/types";
import { MessageContent, CardContainer, ButtonContainer } from "./styles";

const TopScorerTable: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const [scorerList, setScorerList] = useState<IScorer[]>([...juvenil]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "Juvenil"
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    navigate(`/top-scorers-table?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  useEffect(() => {
    switch (selectedCategory) {
      case "Juvenil":
        setScorerList(juvenil);
        break;
      case "Senior":
        setScorerList(senior);
        break;
      case "Damas":
        setScorerList(damas);
        break;
      default:
        setScorerList(juvenil);
        break;
    }
  }, [selectedCategory]);

  const canGoBack = useMemo(() => window.history.length > 1, []);

  const handleBack = () => {
    if (canGoBack) navigate(-1);
    else navigate("/");
  };

  const onShare = () => {
    const shareUrl = `${window.location.origin}/top-scorers-table?category=${encodeURIComponent(
      selectedCategory
    )}`;

    const shareData = {
      title: "Goleadores",
      text: `Lista de goleadores - Categoría: ${selectedCategory}`,
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        console.error("Error al compartir:", error);
      });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("URL copiada al portapapeles!");
      });
    }
  };

  return (
    <div>
      <HeaderCategory
        img={logo}
        title={`Goleadores ${selectedCategory}`}
        color="#1abc9c"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <Title title={`Goleadores: ${selectedCategory}`} />

      {scorerList.length > 0 ? (
        <CardContainer>
          {scorerList.map((player, index) => (
            <ScorerCard
              key={`${selectedCategory}-${player.id}-${player.fullName}-${player.goals}`}
              category={selectedCategory}
              id={player.id}
              name={player.name}
              fullName={player.fullName}
              number={player.number}
              index={index}
              goals={player.goals}
              teamName={player.team}
              image={player.profile || getLogo("Default")}
              logoTeam={player.logoteam}
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
        </CardContainer>
      ) : (
        <MessageContent>
          <Typography variant="h3">
            Aún no existen goleadores registrados.
          </Typography>
          <Typography variant="h6">
            Estamos trabajando en ello. Pronto estará disponible...
          </Typography>
        </MessageContent>
      )}
    </div>
  );
};

export default TopScorerTable;
