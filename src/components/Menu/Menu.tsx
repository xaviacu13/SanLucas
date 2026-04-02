import { Typography } from "@mui/material";
import { TitleContainer, DividerLine } from "./styles";

interface TitleProps {
  title: string;
}

const Menu: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleContainer>
      <DividerLine />
      <Typography variant="h3" color="secondary" sx={{ marginRight: 2, marginLeft: 2 }}>
        {title}
      </Typography>
      <DividerLine />
    </TitleContainer>
  );
};

export default Menu;
