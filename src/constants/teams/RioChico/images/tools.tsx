import l28444 from "./28444.png";
import l31147 from "./31147.png";
import l37738 from "./37738.png";
import l44951 from "./44951.png";
import l55122 from "./55122.png";
import l56827 from "./56827.png";
import l59313 from "./59313.png";
import l77248 from "./77248.png";
import l97322 from "./97322.png";
import l97799 from "./97799.png";
import l98280 from "./98280.png";
import l22 from "./22.png";
import l26809 from "./26809.png";
import l13 from "./13.png";
import l14 from "./14.png";
import l18 from "./18.png";
import l21 from "./21.png";
import l9 from "./9.png";
import l15 from "./15.png";
import l16 from "./16.png";
import l17 from "./17.png";
import l19 from "./19.png";
import l20 from "./20.png";

import defaultLogo from "../../../../assets/images/logoEquipos/defauldProfile.webp";

const tools: Record<string, string> = {
  "31147": l31147,
  "28444": l28444,
  "37738": l37738,
  "44951": l44951,
  "55122": l55122,
  "56827": l56827,
  "59313": l59313,
  "77248": l77248,
  "97322": l97322,
  "22": l22,
  "97799": l97799,
  "98280": l98280,
  "26809": l26809,
  "13": l13,
  "14": l14,
  "18": l18,
  "21": l21,
  "9": l9,
  "15": l15,
  "16": l16,
  "17": l17,
  "19": l19,
  "20": l20,
};

export const getProfile = (cod: string): string => {
  return tools[cod] || defaultLogo;
};