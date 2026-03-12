import React from "react";
import { Root } from "./styles";
import { teamDelegates } from "../../constants/teamDelegates";
import { DelegateCard, Title } from "../../components";
import { Typography } from "@mui/material";

const Inscriptions: React.FC = () => {
  return (
    <Root>
      <Title title="Equipos participantes " />
      <Typography color="primary">Para participar en el campeonato, Contactate con el delegado de su comunidad"</Typography>
      {teamDelegates.map((team) => (
        <DelegateCard
          key={team.id}
          id={team.id}
          img={team.logo}
          url={team.url}
          name={team.name}
          category="Juvenil"
          delegates={team.delegates}
        />
      ))}
    </Root>
  );
};

export default Inscriptions;
