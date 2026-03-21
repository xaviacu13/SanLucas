import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  width: '1000px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '10px',
  },
}));

export const DividerLine = styled(Divider)(() => ({
  margin: '10px 0',
  borderColor: '#ccc',
}));

export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "10px",
  width: "100%",
  gap: "40px",
  "@media (max-width: 600px)": {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
  },
}));
