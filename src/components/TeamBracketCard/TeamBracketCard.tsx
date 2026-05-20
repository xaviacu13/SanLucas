import React from "react";

import {
  Card,
  TeamLogo,
  TeamInfo,
  TeamName,
  TeamCommunity,
} from "./styles";

interface Props {
  logo: string;
  name: string;
  community: string;
}

const TeamBracketCard: React.FC<Props> = ({
  logo,
  name,
  community,
}) => {
  return (
    <Card>
      <TeamLogo src={logo} alt={name} />
      <TeamInfo>
        <TeamName>{name}</TeamName>
        <TeamCommunity>{community}</TeamCommunity>
      </TeamInfo>
    </Card>
  );
};

export default TeamBracketCard;