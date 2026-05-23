import React from "react";
import { MatchCard, Title } from "../../components";
import { orderTable } from "../../tools/tools";
import schema from "../../assets/images/logos/squema2.webp";
import type { ITeamStanding } from "../../types/types";

import {
  juvenil as fixtureJuvenil,
} from "../../constants/fixture/juvenil";

import {
  juvenil as teamsJuvenil,
} from "../../constants/teamCategories/juvenil";

import { generateTable } from "../../utils/generateTable";

import {
  Page,
  BracketContainer,
  Side,
  Center,
  FinalBox,
  SchemaContent
} from "./styles";
import { Divider } from "@mui/material";

const Playoffs: React.FC = () => {

  const initialTable: ITeamStanding[] = teamsJuvenil.map(
  (team) => ({
    id: team.id,
    team: team.name,
    serie: team.series,
    matchesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  })
);

const table = React.useMemo<ITeamStanding[]>(() => {
  const standings = generateTable(
    fixtureJuvenil,
    initialTable
  );

  return orderTable(standings);
}, [initialTable]);

  const filterTableBySerie = React.useCallback(
    (
      tableData: ITeamStanding[],
      serie: string
    ): ITeamStanding[] => {
      if (!serie || serie === "all") {
        return tableData;
      }

      return tableData.filter(
        (team) => team.serie === serie
      );
    },
    []
  );

  const serieA = React.useMemo(() => {
    return filterTableBySerie(table, "A")
    .slice(0, 8);
  }, [table, filterTableBySerie]);

  const serieB = React.useMemo(() => {
    return filterTableBySerie(table, "B")
    .slice(0, 8);
  }, [table, filterTableBySerie]);

  const leftTeams = [
  {
    team1: serieA[0]?.id || 0,
    team2: serieB[7]?.id || 0,
    isExpanded: true,
  },
  {
    team1: serieA[2]?.id || 0,
    team2: serieB[5]?.id || 0,
    isExpanded: true,
  },
  {
    team1: serieA[3]?.id || 0,
    team2: serieB[4]?.id || 0,
    isExpanded: true,
  },
  {
    team1: serieA[1]?.id || 0,
    team2: serieB[6]?.id || 0,
    isExpanded: true,
  },
];

const rightTeams = [
  {
    team1: serieB[0]?.id || 0,
    team2: serieA[7]?.id || 0,
    isExpanded: true,
  },
  {
    team1: serieB[2]?.id || 0,
    team2: serieA[5]?.id || 0,
    isExpanded: true,
  },
  {
    team1: serieB[3]?.id || 0,
    team2: serieA[4]?.id || 0,
    isExpanded: true,
  },
  {
    team1: serieB[1]?.id || 0,
    team2: serieA[6]?.id || 0,
    isExpanded: true,
  },
];


  return (
    <Page>
      <Title title="Octavos de final" />

      <BracketContainer>
        {/* IZQUIERDA */}
        <Side>
          {leftTeams.map((team, index) => (
            <MatchCard
              key={index}
              team1={team.team1}
              team2={team.team2}
              position="left"
              isExpanded={team.isExpanded}
            />
          ))}
        </Side>

        {/* CENTRO */}
        <Center>
          <FinalBox>FINAL</FinalBox>
        </Center>

        {/* DERECHA */}
        <Side>
          {rightTeams.map((team, index) => (
            <MatchCard
              key={index}
              team1={team.team1}
              team2={team.team2}
              position="right"
              isExpanded={team.isExpanded}
            />
          ))}
        </Side>
      </BracketContainer>
      <Divider style={{ marginTop: "20px" }} />
       <Title title="Esquema de playoffs" />
      <SchemaContent src={schema} alt="Esquema de playoffs" />
    </Page>
  );
};

export default Playoffs;