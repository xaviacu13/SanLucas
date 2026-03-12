import styled from '@emotion/styled';

export const Title = styled('h1')(() => ({
  fontSize: '24px',
  color: '#333',
}));
export const InfoContainer = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  gap: '15px',
  padding: '10px',
  backgroundColor: '#f5f5f5',
}));