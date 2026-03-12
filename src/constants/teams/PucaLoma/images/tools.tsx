import l44228 from "./44228.jpg";
import l98935 from "./98935.png";
import l95400 from "./95400.png";
import l93009 from "./93009.png";
import l50716 from "./50716.png";
import l85777 from "./85777.png"
import l47239 from "./47239.png"
import l87268 from "./87268.png"
import brayan from "./brayan.png"
import xavi from "./xavi.png"
import l77061 from "./77061.png"
import l12428 from "./12428.png"
import l17054 from "./17054.png"
import l10765 from "./10765.png"
import jhona from "./jhona.png"
import l97200 from "./97200.png"
import l90749 from "./90749.png"
import l49141 from "./49141.png"
import l96600 from "./96600.png"
import l26296 from "./26296.png"
import l73944 from "./73944.png"
import l44217 from "./44217.png"
import l23 from "./23.png"
// senior
import l30 from "./30.png"
import l31 from "./31.png"
//import l32 from "./32.png"
import l33 from "./33.png"
import l34 from "./34.png"
import l35 from "./35.png"
import l36 from "./36.png"
import l37 from "./37.png"
import l38 from "./38.png"
import l39 from "./39.png"
import l40 from "./40.png"
import l41 from "./41.png"
import l42 from "./42.png"
import l43 from "./43.png"
import l44 from "./44.png"
import l45 from "./45.png"
import l46 from "./46.png"
import l47 from "./47.png"
// DAMAS 
import l61 from "./61.png"
import l62 from "./62.png"
import l63 from "./63.png"
import l64 from "./64.png"
import l65 from "./65.png"
import l66 from "./66.png"
import l67 from "./67.png"
import l68 from "./68.png"
import l69 from "./69.png"
import l70 from "./70.png"
import l71 from "./71.png"
import l72 from "./72.png"
import l73 from "./73.png"
// import l74 from "./74.png"
import defaultLogo from "../../../../assets/images/logoEquipos/defauldProfile.webp";

const tools: Record<string, string> = {
  "44228": l44228,
  "98935": l98935,
  "95400": l95400,
  "93009": l93009,
  "50716": l50716,
  "85777": l85777,
  "47239": l47239,
  "87268": l87268,
  "brayan": brayan,
  "xavi": xavi,
  "77061": l77061,
  "12428": l12428,
  "17054": l17054,
  "10765": l10765,
  "jhona": jhona,
  "97200": l97200,
  "90749": l90749,
  "49141": l49141,
  "96600": l96600,
  "26296": l26296,
  "73944": l73944,
  "44217": l44217,
  "23": l23,
  // senior
  "30": l30,
  "31": l31,
  //"32": l32,
  "33": l33,
  "34": l34,
  "35": l35,
  "36": l36,
  "37": l37,
  "38": l38,
  "39": l39,
  "40": l40,
  "41": l41,
  "42": l42,
   "43": l43,
  "44": l44,
  "45": l45,
  "46": l46,
  "47": l47,

  // DAMAS
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
  "73": l73,
  // "74": l74,
};

export const getProfile = (cod: string): string => {
  return tools[cod] || defaultLogo;
};