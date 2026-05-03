import React, { useState } from "react";
import {
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  PlayerCardWrapper,
  PlayerImage,
  PlayerInfo,
  PlayerTitle,
  PlayerText,
  PositionContainmer,
  PlayerName,
  LogoImage,
} from "./styles";

type GoalDetail = {
  opponent: string;
  qty: number;
};

interface PlayerCardProps {
  id: number | string;
  name: string;
  fullName?: string;
  image: string;
  logoTeam: string;
  number: number;
  goals: number;
  teamName: string;
  goalDetails: GoalDetail[];
}

const ScorerCard: React.FC<PlayerCardProps> = ({
  name,
  fullName,
  image,
  logoTeam,
  number,
  goals,
  teamName,
  goalDetails = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
  <>
    <PlayerCardWrapper>
      <PlayerImage src={image} alt={name} />
      <LogoImage src={logoTeam} alt={teamName} />

      <PlayerInfo>
        <PositionContainmer>
          <PlayerText>
            {Array.from({ length: goals }).map((_, i) => (
              <span key={i} style={{ marginRight: 2 }}>
                ⚽
              </span>
            ))}
            = <strong>{goals}</strong>
          </PlayerText>
        </PositionContainmer>

        <PlayerTitle>
          {name} - <strong>{number}</strong>
        </PlayerTitle>

        <PlayerName>{fullName}</PlayerName>

        {/* HEADER ACCORDION */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">
            Ver detalles
          </Typography>

          <IconButton onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>


      </PlayerInfo>
    </PlayerCardWrapper>
            {/* CONTENIDO EXPANDIBLE */}
        <Collapse in={open} timeout="auto" unmountOnExit style={{ backgroundColor: "#fff", width: "100%", padding: "12px", borderRadius: "0 0 8px 8px", marginTop: "-8px" }}>
          <Box mt={1}>
            {goalDetails.length === 0 ? (
              <Typography variant="body2">
                Sin goles registrados
              </Typography>
            ) : (
              goalDetails.map((goal, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  mb={0.5}
                >
                  <Typography variant="body2">
                    ⚽ vs {goal.opponent}
                  </Typography>
                  <Typography variant="body2">
                    {goal.qty}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Collapse>
  </>
  );
};

export default ScorerCard;