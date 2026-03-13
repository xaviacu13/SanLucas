import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageContainer = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});


export const Title = styled("h1")(() => ({
  fontSize: "24px",
  color: "#333",
}));

export const Cards = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: '#333',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  width: '150px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  "@media (max-width: 600px)": {
    padding: '0.6rem',
    width: '110px',
  },
});

export const CardsContainer = styled('div')(()=>({
  display: 'flex',
  gap: '1rem',
  marginTop: '20px',  
  justifyContent: 'center',
  "@media (max-width: 600px)": {
    gap: '0.6rem',
    marginTop: '10px',
  },

}))

export const TitleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',  
  justifyContent: 'center',
})

export const TitleText = styled('h1')(() => ({
  fontSize: '24px',
  color: 'rgba(4, 47, 81, 0.9)',
  "@media (max-width: 600px)": {    
    fontSize: '18px',
  }
}));

export const NotificationIconWrapper = styled("div")({
  position: "relative",
  display: "inline-block",
});

export const NotificationDot = styled("span")({
  position: "absolute",
  top: 0,
  right: 0,
  width: "15px",
  height: "15px",
  backgroundColor: "green",
  borderRadius: "50%",
  border: "2px solid white",
});

export const FooterContainer = styled("div")({
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
  width: "100%",

  "@media (max-width: 600px)": {
    marginTop: "auto",
  },
});



