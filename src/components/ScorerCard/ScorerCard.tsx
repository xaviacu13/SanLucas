import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { 
  PlayerCardWrapper, 
  PlayerImage, 
  PlayerInfo, 
  PlayerTitle, 
  PlayerText, 
  PositionContainmer, 
  PlayerName,
  LogoImage
} from './styles';

interface PlayerCardProps {
  idTeam?: number | string;
  id: number | string; 
  category?: string; 
  name: string;
  fullName?: string;
  image: string;
  logoTeam: string;
   number: number;
  goals: number;
  index?: number;
  teamName: string;
}

const ScorerCard: React.FC<PlayerCardProps> = ({
  name,
  fullName,
  image,
  logoTeam,
  number,
  goals,
  teamName,
}) => {
  //const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/player-detail?idPlayer=${id}&idTeam=${idTeam}&category=${category}`);
  // };

  return (
    <PlayerCardWrapper>
      <PlayerImage src={image} alt={name} />
      <LogoImage src={logoTeam} alt={teamName} />
      <PlayerInfo>
        <PositionContainmer>
          <PlayerText>GOLES: <strong>{goals}</strong></PlayerText>
        </PositionContainmer>
        <PlayerTitle>{name} - <strong>{number}</strong></PlayerTitle>
        <PlayerName>{fullName}</PlayerName>
      </PlayerInfo>
    </PlayerCardWrapper>
  );
};

export default ScorerCard;
