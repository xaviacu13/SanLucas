import { styled } from "@mui/material/styles";

export const GridContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
  gap: "10px",
  padding: "20px",
}));

export const Card = styled("div")(({ theme }) => ({
  borderRadius: "15px",
  overflow: "hidden",
  width: "270px",
 background: "linear-gradient(135deg, #f5fafaff 0%, #21e8eeff 100%)",
  // color: "#fff",
  textAlign: "center",
  boxShadow: theme.shadows[6],
  fontFamily: "'Oswald', sans-serif",
  position: "relative",
}));

export const CardContent = styled("div")(() => ({
  padding: "5px",
}));

export const TeamLogo = styled("img")(() => ({
  width: "85px",
  marginBottom: "5px",
  borderRadius: "40%",
}));

export const TeamName = styled("h3")(() => ({
  margin: 0,
  fontSize: "16px",
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const PlayerPhoto = styled("img")(() => ({
  width: "150px",
  height: "150px",
  borderRadius: "10%",
  objectFit: "cover",
  // border: "2px solid #fff",
  margin: "5px 0",
}));

export const PlayerName = styled("h2")(() => ({
  fontWeight: "bold",
  fontSize: "20px",
  margin: "2px 0",
  textTransform: "uppercase",
}));

export const CardTitle = styled("h2")(() => ({
  fontWeight: "bold",
  fontSize: "12px",
  margin: "2px 0",
  textTransform: "uppercase",
}));

export const PlayerFullName = styled("h2")(() => ({
  fontWeight: "bold",
  fontFamily: "'Roboto', sans-serif",
  fontStyle: "italic",
  fontSize: "14px",
  margin: "2px 0",
}));

export const PlayerNumber = styled("h1")(() => ({
  // margin: "5px 0",
  fontSize: "20px",
  background: "#f3e7b3ff",
  color: "#000",
  display: "inline-block",
  padding: "1px 4px",
  borderRadius: "6px",
  fontWeight: "bold",
  margin: "2px 0",
}));

export const PlayerPosition = styled("p")(() => ({
  margin: "5px 0",
  fontSize: "14px",
  fontStyle: "italic",
}));

// export const DNI = styled("p")(() => ({
//   marginTop: "-10px", 
//   fontSize: "14px",
//   margin: "0",
//   textShadow: "0px 0px 4px yellow",
// }));

export const DNI = styled("p")(() => ({
  position: "absolute",
  bottom: "2px", 
  left: "50%",
  transform: "translateX(-50%)", 
  fontSize: "14px",
  fontWeight: "bold",
  // color: "#000",
   background: "rgba(255, 255, 0, 0.8)",
   padding: "2px 2px",
  borderRadius: "4px",
   textShadow: "0px 0px 4px yellow",
  // textShadow: "0 0 5px #000",
}));

export const QRWrapper = styled("div")(() => ({
  display: "flex",
  margin: "10px 0",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const DownloadButton = styled("button")(() => ({
  marginTop: "8px",
  padding: "6px 12px",
  fontSize: "12px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#115293",
  },
}));
export const HederCredential = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px",
  borderBottom: "1px solid #0d0c0cff",
  "& div": {
    textAlign: "center",
  },
}));

export const ChampionshipLogo = styled("img")(() => ({
  width: "100px",
}));

export const PhotoWrapper = styled("div")(() => ({
  position: "relative", 
  display: "inline-block",
}));