import type {
  IMatch,
  ITeamStanding,
  SerieType,
  ITeamCategoryItem,
} from "../types/types";

// 🔥 tabla inicial desde equipos
export const generateInitialTable = (
  teams: ITeamCategoryItem[]
): ITeamStanding[] => {
  return teams.map((team) => ({
    id: team.id,
    team: team.name,
    serie: team.series as SerieType,
    matchesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  }));
};

// 🔥 generar tabla desde fixture
export const generateTable = (
  matches: IMatch[],
  baseTable: ITeamStanding[]
): ITeamStanding[] => {
  // 🧠 clonamos para no mutar el original
  const table: ITeamStanding[] = baseTable.map((t) => ({ ...t }));

  // 🔍 buscar equipo
  const getTeam = (name: string, serie?: SerieType) => {
    return table.find((t) => {
      if (t.team !== name) return false;

      // sin serie (damas, infantil)
      if (!t.serie || !serie || serie === "all") return true;

      return t.serie === serie;
    });
  };

  // 🔥 recorrer partidos
  matches.forEach((match) => {
    if (match.status !== "played") return;

    const serie: SerieType =
      match.serie === "A" || match.serie === "B"
        ? match.serie
        : undefined;

    const teamA = getTeam(match.team1, serie);
    const teamB = getTeam(match.team2, serie);

    if (!teamA || !teamB) return;

    // PJ
    teamA.matchesPlayed++;
    teamB.matchesPlayed++;

    // GOLES
    teamA.goalsFor += match.scorerTeam1;
    teamA.goalsAgainst += match.scorerTeam2;

    teamB.goalsFor += match.scorerTeam2;
    teamB.goalsAgainst += match.scorerTeam1;

    // RESULTADO
    if (match.scorerTeam1 > match.scorerTeam2) {
      teamA.wins++;
      teamB.losses++;
      teamA.points += 3;
    } else if (match.scorerTeam1 < match.scorerTeam2) {
      teamB.wins++;
      teamA.losses++;
      teamB.points += 3;
    } else {
      teamA.draws++;
      teamB.draws++;
      teamA.points += 1;
      teamB.points += 1;
    }
  });

  // 🔥 diferencia de gol
  table.forEach((t) => {
    t.goalDifference = t.goalsFor - t.goalsAgainst;
  });

  return table;
};