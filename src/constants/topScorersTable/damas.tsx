import { getLogo } from "../../tools/tools";
import { getProfile as getProfilePL } from "../teams/PucaLoma/images/tools";
// import { getProfile as getProfileMP} from "../teams/MontePampa/images/tools";
// import { getProfile as getProfileSM} from "../teams/SivingaMayu/images/tools";
// import { getProfile as getProfileCP} from "../teams/ChurquiPampa/images/tools";
// import { getProfile as getProfileRC} from "../teams/RioChico/images/tools";
import { getProfile as getProfileAJ } from "../teams/Andajaba/images/tools";
import { getProfile as getProfileMM } from "../teams/MiscaMayu/images/tools";
import { getProfile as getProfileTH } from "../teams/TiraHoyo/images/tools";
import { getProfile as getProfileKM } from "../teams/Kumuni/images/tools";

export const seniorRaw = [
  {
    id: 1,
    name: "Noelia",
    fullName: "Noelia Villca",
    number: 14,
    team: "Tira Hoyo",
    logoteam: getLogo("Tira Hoyo"),
    goals: 12,
    gamesPlayed: 1,
    profile: getProfileTH("62"),
  },
  // {
  //   id: 2,
  //   name: "Surita",
  //   fullName: "Soraide Albarado",
  //   number: 7,
  //   team: "Monte Pampa",
  //   logoteam: getLogo("Monte Pampa"),
  //   goals: 4,
  //   gamesPlayed: 1,
  //   profile: getProfileMP("69"),
  // },
  {
    id: 3,
    name: "Marisol",
    fullName: "Marisol Romero Mollo",
    number: 7,
    team: "Tira Hoyo",
    logoteam: getLogo("Tira Hoyo"),
    goals: 9,
    gamesPlayed: 1,
    profile: getProfileTH("67"),
  },
  //   {
  //   id: 4,
  //   name: "Maru",
  //   fullName: "María A. Mollo Rafael",
  //   number:10,
  //   team: "Monte Pampa",
  //   logoteam: getLogo("Monte Pampa"),
  //   goals: 3,
  //   gamesPlayed: 1,
  //   profile: getProfileMP("62"),
  // },
  {
    id: 5,
    name: "Maribel",
    fullName: "Maribel Maldonado Mollo",
    number: 8,
    team: "Miska Mayu",
    logoteam: getLogo("Miska Mayu"),
    goals: 5,
    gamesPlayed: 1,
    profile: getProfileMM("63"),
  },
  {
    id: 6,
    name: "Noelia",
    fullName: "Irma Noelia Mamani Rodriguez",
    number: 13,
    team: "Puca Loma",
    logoteam: getLogo("Puca Loma"),
    goals: 10,
    gamesPlayed: 1,
    profile: getProfilePL("73"),
  },
  {
    id: 6,
    name: "Elsa",
    fullName: "Elsa Condori Calizaya",
    number: 13,
    team: "Kumuni",
    logoteam: getLogo("Kumuni"),
    goals: 6,
    gamesPlayed: 1,
    profile: getProfileKM("67"),
  },
  {
    id: 7,
    name: "Mary",
    fullName: "Maribel Rodriguez Quira",
    number: 8,
    team: "Miska Mayu",
    logoteam: getLogo("Miska Mayu"),
    goals: 7,
    gamesPlayed: 1,
    profile: getProfileMM("61"),
  },
  {
    id: 8,
    name: "Arminda",
    fullName: "Arminda Mamani Torrez ",
    number: 11,
    team: "Andajaba",
    logoteam: getLogo("Andajaba"),
    goals: 6,
    gamesPlayed: 1,
    profile: getProfileAJ("8"),
  },
  {
    id: 9,
    name: "Ibania",
    fullName: "Ibania Condori Martinez ",
    number: 8,
    team: "Andajaba",
    logoteam: getLogo("Andajaba"),
    goals: 5,
    gamesPlayed: 1,
    profile: getProfileAJ("2"),
  },
];
export const damas = [...seniorRaw].sort((a, b) => {
  if (b.goals !== a.goals) return b.goals - a.goals;
  return a.fullName.localeCompare(b.fullName, "es", { sensitivity: "base" });
});
