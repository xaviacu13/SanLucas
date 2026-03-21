import styled from '@emotion/styled';
export const CardContainer = styled("div") ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '10px',
});

export const Container = styled("div") ({
  maxWidth: "60rem",
  margin: "32px auto",
  padding: "24px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});
export const MessageContent = styled("div") ({
  maxWidth: "60rem",
  margin: "32px auto",
  padding: "24px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

export const ButtonContainer = styled("div")({
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
  gap: "5rem",
  flexWrap: "wrap",
  padding: "0 1rem",
  marginBottom: "1rem",

  "@media (max-width: 900px)": {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3rem",
  },

  "& button": {
    minWidth: "150px",
    fontSize: "1rem",
    "@media (max-width: 900px)": {
      flex: 1,
      minWidth: "0",
      fontSize: "0.6rem", 
      padding: "6px 15px",
    },
  },
});