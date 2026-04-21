import React from "react";
import {
  FixtureContainer,
  TeamColumn,
  Logo,
  TeamName,
  DetailsColumn,
  DetailItem,
  ScorerColumn,
  ObservationContainer,
  Root,
  StatusLabel,
  TitleItem,
  SerieLabel,
} from "./styles";
import { getLogo } from "../../tools/tools";
import type { IFixtureCard } from "../../types/types";
// import { Typography } from "@mui/material";

const FixtureCard: React.FC<IFixtureCard> = ({
  // id,
  team1,
  team2,
  scorerTeam1,
  scorerTeam2,
  date,
  time,
  location,
  status,
  group,
  observation,
  category,
  serie,
}) => {
  const renderStatusLabel = () => {
    if (!status || status.trim() === "") return null;

    switch (status) {
      case "played":
        return <StatusLabel statusType="played">FINALIZADO</StatusLabel>;
      case "playing":
        return <StatusLabel statusType="playing">EN JUEGO</StatusLabel>;
      case "willPlay":
        return <StatusLabel statusType="willPlay">PENDIENTE</StatusLabel>;
      case "scheduled":
        return <StatusLabel statusType="scheduled">PROGRAMADO</StatusLabel>;
      case "canceled":
        return <StatusLabel statusType="canceled">CANCELADO</StatusLabel>;
      default:
        return null;
    }
  };

  return (
    <Root>
      <FixtureContainer category={category}>
        <TeamColumn>
          <Logo src={getLogo(team1)} alt={team1} />
          <TeamName>{team1}</TeamName>
        </TeamColumn>

        {["played", "playing"].includes(status) && (
          <ScorerColumn align="left">{scorerTeam1}</ScorerColumn>
        )}
        <DetailsColumn>
          {group === 0 && (
            <TitleItem>
              <strong>RE-COPA</strong>
              <SerieLabel serie={"C"}>FINAL</SerieLabel>
            </TitleItem>
          )}
          {group > 0 && (
            <TitleItem>
              <strong>
                {status === "played" ? "F - " : "Fecha:"} {group}
              </strong>
              {serie && <SerieLabel serie={serie}>Serie: {serie}</SerieLabel>}
            </TitleItem>
          )}
          {status === "played" ? (
            <DetailItem>
              <strong>{date || "__/__/____"}</strong>
            </DetailItem>
          ) : (
            <DetailItem>
              <strong>Hora:</strong> {time || "__:__"} <strong>|</strong>{" "}
              {date || "__/__/____"}
            </DetailItem>
          )}
          {status != "played" && (
            <DetailItem>
              <strong>Cancha:</strong> {location || "___"}
            </DetailItem>
          )}
          <DetailItem>{renderStatusLabel()}</DetailItem>
        </DetailsColumn>

        {["played", "playing"].includes(status) && (
          <ScorerColumn align="right">{scorerTeam2}</ScorerColumn>
        )}

        <TeamColumn>
          <Logo src={getLogo(team2)} alt={team2} />
          <TeamName>{team2}</TeamName>
        </TeamColumn>
      </FixtureContainer>

      {observation && observation.trim() !== "" && (
        <ObservationContainer>{observation}</ObservationContainer>
      )}
      {/* <Typography variant="caption" align="center" color="textSecondary">
        ID: {id}
      </Typography> */}
    </Root>
  );
};

export default FixtureCard;
