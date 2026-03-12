import logoPucaLoma from "../assets/images/logoEquipos/pucaloma.png";
import logoMiskaMayu from "../assets/images/logoEquipos/miscamayu.png";
import logoPunquina from "../assets/images/logoEquipos/punquina.png";
import logoMontePampa from "../assets/images/logoEquipos/montepampa.png";
import logoRioChico from "../assets/images/logoEquipos/riochico.png";
import logoSivingaMayu from "../assets/images/logoEquipos/sivingamayu.png";
import logoPadcoyo from "../assets/images/logoEquipos/padcoyo.png";
import logoMiguelito from "../assets/images/logoEquipos/miguel.png";
import logoDefault from "../assets/images/logoEquipos/default.png";
import defaultProfile from "../assets/images/logoEquipos/defauldProfile.webp"
import logoKumuni from "../assets/images/logoEquipos/kumuni.png";
import logoTiraHoyo from "../assets/images/logoEquipos/tiraHoyo.png";
import churquiPampa  from  "../assets/images/logoEquipos/churquiPampa.png";
import miscamayuB from "../assets/images/logoEquipos/miscamayuB.png"
import andajaba from "../assets/images/logoEquipos/andajaba.png"
import pucaLomaB from "../assets/images/logoEquipos/pucaLomaB.png"

export const getLogo = (name: string) => {
  switch (name) {
    case "Puca Loma":
      return logoPucaLoma;
    case "Miska Mayu":
      return logoMiskaMayu;
    case "Punquina":
      return logoPunquina;
    case "Monte Pampa":
      return logoMontePampa;
    case "Rio Chico":
      return logoRioChico;
    case "Sivinga Mayu":
      return logoSivingaMayu;
    case "Padcoyo":
      return logoPadcoyo;
    case "Kumuni":
      return logoKumuni;
    case "Tira Hoyo":
      return logoTiraHoyo;
    case "Miguelito":
      return logoMiguelito;
    case "Churqui Pampa":
      return churquiPampa;
    case "Miska Mayu 'B'":
      return miscamayuB;
    case "Puca Loma 'B'":
      return pucaLomaB;
    case "Andajaba":
      return andajaba;
    case "Default":
      return defaultProfile;
    default:
      return logoDefault;
  }
};

export const orderTable = (
  arr: {
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
  }[]
) => {
  return [...arr].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference;
    }

    if (b.goalsFor !== a.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }
    
    return a.team.localeCompare(b.team);
  });
};

