import React from "react";
import { Root, RightsContainer } from "./styles";
// import { useNavigate } from "react-router-dom";
// import { teams } from "../../constants/teams/teams";
// import { getLogo } from "../../tools/tools";

const Footer: React.FC = () => {
  // const navigate = useNavigate();

  // const handleClick = (idTeam: number) => {
  //   navigate(
  //     `/team-detail?id=${idTeam}&category=${encodeURIComponent("Juvenil")}`
  //   );
  // };
 
  return (
    <Root>
      {/* <ImageContent>
        {teams.map((team) => (
          <div key={team.name}>
            <Image
              src={getLogo(team.name)}
              alt={team.name}
              onClick={() => handleClick(team.id)}
              role="button"
              tabIndex={0}
            />
          </div>
        ))}
      </ImageContent> */}
      <RightsContainer>
        <p>Xavi Innovation Technology © 2025. All rights reserved.</p>
        <p>Contact us at: 1130918821</p>
      </RightsContainer>
    </Root>
  );
};

export default Footer;
