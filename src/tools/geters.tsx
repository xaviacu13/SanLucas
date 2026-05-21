import type { ITeamCategoryItem } from "../types/types";
import { juvenil as teams } from "../constants/teamCategories/juvenil";

const teamMap = new Map<number, ITeamCategoryItem>();

teams.forEach((team) => {
  teamMap.set(team.id, team);
});

export const getTeamNameById = (id: number): string => {
  const team = teamMap.get(id);
  return team ? team.name : "Equipo desconocido";
};

export const getTeamLogoById = (id: number): string => {
  return teamMap.get(id)?.logo || "";
};