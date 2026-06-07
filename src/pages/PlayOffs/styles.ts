import styled from '@emotion/styled';

interface SideProps {
  grade?: "8" | "4" | "2";
}

export const Page = styled('div')({
  minHeight: '100vh',
  padding: '5px',
  background: '#f5f7fb',
});


// export const BracketContainer = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   flexWrap: 'wrap',
//   gridTemplateColumns: '1fr auto 1fr',
//   gap: '30px',
//   alignItems: 'center',
// });
export const BracketContainer = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LogoCenter = styled("img")({
  position: "absolute",
  left: "50%",
  top: "40%",
  transform: "translate(-50%, -50%)",
  width: "90px",
  height: "90px",
  objectFit: "contain",
  zIndex: 10,
    '@media (max-width: 600px)': {
       width: "80px",
  height: "80px",
  },
});

export const Side = styled("div")<SideProps>(({ grade }) => ({
  display: "flex",
  flexDirection: "column",

  gap:
    grade === "4"
      ? "110px" // cuartos
      : grade === "2"
        ? "160px" // semifinal
        : "16px", // octavos
}));

export const Center = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '120px',

  '@media (max-width: 900px)': {
    display: 'none',
  },
});

export const FinalBox = styled('div')({
  background: '#0b2545',
  color: '#fff',
  padding: '20px',
  borderRadius: '20px',
  fontWeight: 700,
  fontSize: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
});

export const SchemaContent = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

export const LeftContent = styled('div')({
  display: 'flex',
  //flexDirection: 'column',
  alignItems: "center",
  gap: '8px',
});

export const RightContent = styled('div')({
  display: 'flex',
  //flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
});