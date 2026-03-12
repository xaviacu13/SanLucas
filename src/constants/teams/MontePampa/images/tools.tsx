import l1 from "./1.png";
import l2 from "./2.png";
import l3 from "./3.png";
import l4 from "./4.png";
import l5 from "./5.png";
import l6 from "./6.png";
import l7 from "./7.png";
import l8 from "./8.png";
import l9 from "./9.png";
import l10 from "./10.png";
import l11 from "./11.png";
import l12 from "./12.png";
import l13 from "./13.png";
import l14 from "./14.png";
import l15 from "./15.png";
import l16 from "./16.png";
import l17 from "./17.png";
import l18 from "./18.png";
import l19 from "./19.png";
import l20 from "./20.png";

// damas
import l61 from "./61.png";
import l62 from "./62.png";
import l63 from "./63.png";
import l64 from "./64.png";
import l65 from "./65.png";
import l66 from "./66.png";
import l67 from "./67.png";
import l68 from "./68.png";
import l69 from "./69.png";
import l70 from "./70.png";
import l71 from "./71.png";
import l72 from "./72.png";
// import l73 from "./73.png";
// import l74 from "./74.png";

// senior
import l101 from "./101.png";
import l102 from "./102.png";
import l103 from "./103.png";
import l104 from "./104.png";
// import l105 from "./105.png";
// import l106 from "./106.png";
// import l107 from "./107.png";
// import l108 from "./108.png";
// import l109 from "./109.png";
// import l110 from "./110.png";


import defaultLogo from "../../../../assets/images/logoEquipos/defauldProfile.webp";

const tools: Record<string, string> = {
  "1": l1,
  "2": l2,
  "3": l3,
  "4": l4,
  "5": l5,
  "6": l6,
  "7": l7,
  "8": l8,
  "9": l9,
  "10": l10,
  "11": l11,
  "12": l12,
  "13": l13,
  "14": l14,
  "15": l15,
  "16": l16,
  "17": l17,
  "18": l18,
  "19": l19,
  "20": l20,
  // damas
  "61": l61,
  "62": l62,
  "63": l63,
  "64": l64,
  "65": l65,
  "66": l66,  
  "67": l67,
  "68": l68,
  "69": l69,
  "70": l70,
  "71": l71,
  "72": l72,
  // "73": l73,
  // "74": l74,

  // senior 
  "101": l101,
  "102": l102,
  "103": l103,
  "104": l104,
  // "105": l105,
  // "106": l106,
  // "107": l107,
  // "108": l108,
  // "109": l109,
  // "110": l110,

};

export const getProfile = (cod: string): string => {
  return tools[cod] || defaultLogo;
};