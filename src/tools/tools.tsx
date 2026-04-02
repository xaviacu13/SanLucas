import logoPucaLoma from "../assets/images/logoEquipos/pucaloma.webp";
import logoMontePampa from "../assets/images/logoEquipos/montePampa.webp";
import logoSivingaMayu from "../assets/images/logoEquipos/sivingamayu.png";
import logoMiguelito from "../assets/images/logoEquipos/miguel.png";
import logoDefault from "../assets/images/logoEquipos/default.png";
import defaultProfile from "../assets/images/logoEquipos/defauldProfile.webp"
import logoKumuni from "../assets/images/logoEquipos/kumuni.webp";
import churquiPampa  from  "../assets/images/logoEquipos/churquiPampa.webp";
import quirpini from "../assets/images/logoEquipos/quirpini.webp";
import malliri from "../assets/images/logoEquipos/malliri.webp";
import japo from "../assets/images/logoEquipos/japo.png";
import avichuca from "../assets/images/logoEquipos/avichuca.webp";
import palacio from "../assets/images/logoEquipos/palacio.png";
import condoriri from "../assets/images/logoEquipos/condoriri.webp";
import huayllani from "../assets/images/logoEquipos/huayllani.png";
import tambokasa from "../assets/images/logoEquipos/tamboKasa.webp";
import rodeo from "../assets/images/logoEquipos/rodeo.webp";
import andamarca from "../assets/images/logoEquipos/andamarca.webp";
import churisaya from "../assets/images/logoEquipos/churisaya.webp";
import sanjose from "../assets/images/logoEquipos/sanjose.webp";
import murifaya from "../assets/images/logoEquipos/murifaya.webp";
import rodeoB from "../assets/images/logoEquipos/rodeoB.webp";
import phullaya from "../assets/images/logoEquipos/phullaya.webp";
import sakaPampa from "../assets/images/logoEquipos/sakaPampa.png";
import orcoyo from "../assets/images/logoEquipos/orcoyo.webp";
import huayllanyGrande from "../assets/images/logoEquipos/huayllanigrande.webp";
import sabalaJr from "../assets/images/logoEquipos/sabalaJr.webp";

export const getLogo = (name: string) => {
  switch (name) {
    case "Puca Loma":
      return logoPucaLoma;
    case "Monte Pampa":
      return logoMontePampa;
    case "Sivinga Mayu":
      return logoSivingaMayu;
    case "Kumuni":
      return logoKumuni;
    case "Miguelito":
      return logoMiguelito;
    case "Churqui Pampa":
      return churquiPampa;
    case "Quirpini":
      return quirpini;
    case "Malliri":
      return malliri;
    case "Japo":
      return japo;
    case "Avichuca":
      return avichuca;
    case "Palacio":
      return palacio;
    case "Condoriri":
      return condoriri;
    case "Huayllany":
      return huayllani;
    case "Tambo Kasa":
      return tambokasa;
     case "Rodeo":
      return rodeo;
    case 'Rodeo "B"':
      return rodeoB;
    case "Andamarca":
      return andamarca;
    case "Churisaya":
      return churisaya;
    case "San Jose T.":
      return sanjose;
    case "Murifaya":
      return murifaya;
    case "Phullaya":
      return phullaya;
    case "Saka Pampa":
      return sakaPampa;
    case "Orcoyo":
      return orcoyo;
    case "Huayllany Grande":
      return huayllanyGrande;
    case "Sabala Jr.":
      return sabalaJr;
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

