import styled from "@emotion/styled";
import type { Theme } from "@mui/material/styles";

export const Card = styled("div")(({ theme }: { theme?: Theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "#fff",
  border: `1px solid ${theme?.palette.divider}`,
  borderRadius: "12px",
  padding: "10px 14px",
  minWidth: "220px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  transition: "0.2s ease",

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  },

  '@media (max-width: 768px)': {
    minWidth: '100%',
    padding: '8px 12px',
  },
}));

export const TeamLogo = styled("img")({
  width: "40px",
  height: "40px",
  objectFit: "contain",
});

export const TeamInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const TeamName = styled("span")({
  fontWeight: 700,
  fontSize: "14px",
  color: "#0b2545",
});

export const TeamCommunity = styled("span")({
  fontSize: "12px",
  color: "#666",
});