import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { Root, DividerLine, ButtonContainer } from "./styles";
//import ShareIcon from "@mui/icons-material/Share";
import BorderColorIcon from "@mui/icons-material/BorderColor";

interface IDelegate {
  id: number;
  name: string;
  contact?: string;
  category: string;
}
interface TeamResumeProps {
  id: string | number;
  title: string;
  url?: string;
  delegates: IDelegate[];
}

const TeamResume: FC<TeamResumeProps> = ({id,   title, delegates, url }) => {

  return (
    <Root>
      <div>
        <Typography variant="h1">#{id}{" - "}{title}</Typography>
        <DividerLine />
      </div>
      <div>
        <Typography
          variant="h4"
          color="primary"
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          Delegados:
        </Typography>
        {delegates.length > 0 ? (
          delegates.map((del) => (
            <div key={del.id} style={{ marginTop: 2, marginBottom: 2 }}>
              <Typography variant="body1">
                {del.name} <strong>Categoría:</strong> {del.category}
              </Typography>
            </div>
          ))
        ) : (
          <Typography variant="body1">No disponible</Typography>
        )}
      </div>
      {url && (
        <ButtonContainer>
          <Button
            onClick={() => {
              window.open(url);
            }}
            variant="outlined"
    
            startIcon={<BorderColorIcon />}
          >
            PRE-INSCRIPCION
          </Button>
          
        </ButtonContainer>
      )}
    </Root>
  );
};

export default TeamResume;
