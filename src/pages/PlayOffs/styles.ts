import styled from '@emotion/styled';

export const Page = styled('div')({
  minHeight: '100vh',
  padding: '20px',
  background: '#f5f7fb',
});

export const Title = styled('h1')({
  textAlign: 'center',
  marginBottom: '30px',
  color: '#0b2545',
});

export const BracketContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  gap: '30px',
  alignItems: 'center',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

export const Side = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

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