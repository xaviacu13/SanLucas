import React from "react";
import { Tooltip, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Logo,
  LogoContainer,
  StyledChip,
  BoxContainer,
  Title,
  TitleContainer,
  HomeButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface HeaderTeamChipsProps {
  img: string;
  name: string;
  color: string;
  category: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  shareUrl?: string;
}

const   HeaderTeam: React.FC<HeaderTeamChipsProps> = ({
  img,
  name,
  color,
  category,
  selectedCategory,
  onCategoryChange,
}) => {
  const navigate = useNavigate();
  return (
    <BoxContainer color={color}>
      <TitleContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <Logo src={img} alt={name} />
          <Title>{name}</Title>
        </LogoContainer>
        <Tooltip title="Compartir">
          <HomeButton color="secondary" onClick={() => navigate("/")}>
            <HomeIcon />
          </HomeButton>
        </Tooltip>
      </TitleContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {category.map((cat) => (
          <StyledChip
            key={cat}
            label={cat}
            clickable
            activecolor={color}
            selected={selectedCategory === cat}
            onClick={() => onCategoryChange(cat)}
          />
        ))}
      </Box>
    </BoxContainer>
  );
};

export default HeaderTeam;
