import React from "react";
import { Box, Typography } from "@mui/material";
import { Title } from "../../components";

const LiveMatch: React.FC = () => {
  // ✅ URL correcta
  const videoUrl = "https://www.youtube.com/embed/TjSw9uCQVIw";

  return (
    <Box sx={{ p: 2 }}>
      <Title title="🔴 Partido en Vivo" />

      <Typography
        variant="subtitle1"
        sx={{ mb: 2, textAlign: "center", fontWeight: 500 }}
      >
        Bolivia 🇧🇴 vs Irak 🇮🇶
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <iframe
          src={videoUrl}
          title="Partido en vivo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default LiveMatch;
