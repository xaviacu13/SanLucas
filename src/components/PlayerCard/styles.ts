import styled from "@emotion/styled";

export const PlayerCardWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  alignItems: "center",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "16px",
  width: "100%",
  maxWidth: "1200px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  margin: "8px",
  ":hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.02)",
    transition: "transform 0.2s ease-in-out",
  },
  paddingLeft: "5rem",
  "@media (max-width: 600px)": {
    paddingLeft: 0,
  }
});

export const PlayerImage = styled("img")({
 justifyItems: "center",
  width: "5.5rem",
  height: "5.5rem",
  objectFit: "cover",
  marginLeft: "5rem",
  borderRadius: "50%",
  margin: "8px",
  "@media (max-width: 600px)": {
    width: "4rem",
    height: "4rem",
    marginLeft: "1.5rem",
  },
  "@media (max-width: 900px)": {
    width: "5.5rem",
    height: "5.5rem",
    marginLeft: "1.5rem",
  },
});

export const PlayerInfo = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px",
  textAlign: "center",
});

export const PlayerTitle = styled("h3")({
  margin: "auto",
  fontSize: "20px",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  textTransform: "uppercase",
});

export const PlayerText = styled('p')(() => ({
  margin: '2px 0',
  fontSize: '14px',
  color: '#444',
}));

export const PlayerName = styled("p")(() => ({
  margin: "2px 0",
  fontSize: "15px",
  color: "#1abc9c",
  fontFamily: "sans-serif",
  fontStyle: "italic",
}));

export const PositionContainmer = styled("div")({
  display: "flex",
  marginTop: "8px",
  gap: "10px",
});
