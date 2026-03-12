import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlayerCardWrapper, 
  PlayerImage, 
  PlayerInfo, 
  PlayerTitle, 
  PlayerText, 
  PositionContainmer, 
  PlayerName
} from './styles';

interface PlayerCardProps {
  idTeam?: number | string;
  id: number | string; 
  category?: string; 
  name: string;
  fullName?: string;
  DNI: string;
  image: string;
  number: number;
  position: string;
  index?: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  idTeam,
  id,
  category,
  name,
  fullName,
  DNI,
  image,
  number,
  position,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player-detail?idPlayer=${id}&idTeam=${idTeam}&category=${category}`);
  };

  return (
    <PlayerCardWrapper onClick={handleClick} style={{ cursor: 'pointer' }}>
      <PlayerImage src={image} alt={name} />
      <PlayerInfo>
        <PlayerTitle>{name} <strong>({number})</strong></PlayerTitle>
        <PlayerName>{fullName}</PlayerName>
        <PositionContainmer>
          <PlayerText>{position}</PlayerText>
          <PlayerText><strong>COD:</strong> { String(DNI).slice(-5)}</PlayerText>
        </PositionContainmer>
      </PlayerInfo>
    </PlayerCardWrapper>
  );
};

export default PlayerCard;
