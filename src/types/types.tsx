export interface ITeamStanding {
  id: number;
  team: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface INotification {
  id: number;
  title: string;
  description: string;
  status: 'success' | 'info' | 'warning' | 'error';
  date: string;
}

export interface IPlayer {
  id: number;
  name: string;
  fullName: string;
  DNI: string;
  number: number;
  position: string;
  image?: string;
}

export interface ITeamCategory {
  id: number;
  category: string;
  players: IPlayer[];
}

export interface ITeam {
  id: number;
  name: string;
  color: string;
  teams: ITeamCategory[];
  grupo?: string;       
  logo?: string;
  description?: string;
}

export interface ITeamCategoryItem {
  id: number;
  name: string;
  url: string;
  logo: string;
  delegates: IDelegate[];
}

export interface IDelegate {
  id: number;
  name: string;
  contact: string;
  category: string;
}

export interface IMatch {
  id: number;
  team1: string;
  team2: string;
  scorerTeam1: number;
  scorerTeam2: number;
  date: string;
  time: string;
  location: string;
  status:"played"| "willPlay" | "playing" | "finished" | "scheduled" | "canceled" | ""; 
  group: number,
  observation: string;
}

export interface IFixtureCard {
  id: number;
  team1: string;
  team2: string;
  scorerTeam1: number;
  scorerTeam2: number;
  date: string;
  time: string;
  location: string;
  status:"played"| "willPlay" | "playing" | "finished" | "scheduled" | "canceled" | ""; 
  group: number,
  observation: string;
  category: string;
}

export interface IScorer {
  id: number;
  name: string;
  fullName: string;
  number: number;
  team: string;
  logoteam: string;
  goals: number;
  gamesPlayed: number;
  profile: string;
}

