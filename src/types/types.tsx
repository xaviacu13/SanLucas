interface ITeamStanding {
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

interface INotification {
  id: number;
  title: string;
  description: string;
  status: 'success' | 'info' | 'warning' | 'error';
  date: string;
}

interface IPlayer {
  id: number;
  name: string;
  fullName: string;
  DNI: string;
  number: number;
  position: string;
  image?: string;
}

interface ITeamCategory {
  id: number;
  category: string;
  players: IPlayer[];
}

interface ITeam {
  id: number;
  name: string;
  color: string;
  teams: ITeamCategory[];
  grupo?: string;       
  logo?: string;
  description?: string;
}
interface IMatch {
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

interface IFixtureCard {
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

interface IScorer {
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


export type { ITeamStanding, INotification, IPlayer, ITeamCategory, ITeam, IMatch, IFixtureCard, IScorer };
