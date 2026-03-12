import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Root, DividerLine, ButtonContainer } from "./styles";
//import ShareIcon from "@mui/icons-material/Share";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ContactsIcon from '@mui/icons-material/Contacts';
import { teams } from "../../../../constants/teams/teams";
import type { ITeam } from "../../../../types/types";

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
  category: string;
  delegates: IDelegate[];
}

const TeamResume: FC<TeamResumeProps> = ({
  id,
  title,
  delegates,
  url,
  category,
}) => {
  const getIdTeam = (name: string) => {
    const team = teams.find((t: ITeam) => t.name === name);
    return team ? team.id : null;
  }
  const navigate = useNavigate();
  const handleShowTeam = (name: string, category: string) => {
    navigate(`/team-detail?id=${getIdTeam(name)}&category=${encodeURIComponent(category)}`);
  };



  // const onShare = () => {
  //   if (!url) return;

  //   const shareUrl = url;

  //   const shareData = {
  //     title: `Comunidad: ${title}`,
  //     text: `Formulario de pre-inscripción para la comunidad ${title}`,
  //     url: shareUrl,
  //   };

  //   if (navigator.share) {
  //     navigator.share(shareData).catch((error) => {
  //       console.error("Error sharing:", error);
  //     });
  //   } else {
  //     navigator.clipboard.writeText(shareUrl).then(() => {
  //       alert("URL copiada al portapapeles!");
  //     });
  //   }
  // };

  return (
    <Root>
      <div>
        <Typography variant="h1">
          #{id}
          {" - "}
          {title}
        </Typography>
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
      {!url && (<ButtonContainer>
        <Button
          onClick={() => handleShowTeam(title, category)}
          variant="outlined"
          startIcon={<ContactsIcon />}
        >
          VER PLANTEL
        </Button>
      </ButtonContainer>
      )}
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

          {/* <Tooltip title="Compartir">
          <HomeButton color="secondary" onClick={onShare}>
             <ShareIcon/>
          </HomeButton>
        </Tooltip> */}
        </ButtonContainer>
      )}
    </Root>
  );
};

export default TeamResume;
