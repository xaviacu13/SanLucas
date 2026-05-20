import React from 'react';

import { TeamBracketCard } from '../../components';

import {
  Page,
  Title,
  BracketContainer,
  Side,
  Center,
  FinalBox,
} from './styles';

const leftTeams = [
  {
    name: 'San Lucas FC',
    community: 'San Lucas',
    logo: '/logos/sanlucas.png',
  },
  {
    name: 'Juventud Unida',
    community: 'Villa Nueva',
    logo: '/logos/juventud.png',
  },
  {
    name: 'Deportivo Norte',
    community: 'Norte',
    logo: '/logos/norte.png',
  },
  {
    name: 'Atlético Sur',
    community: 'Sur',
    logo: '/logos/sur.png',
  },
  {
    name: 'Real Esperanza',
    community: 'Esperanza',
    logo: '/logos/esperanza.png',
  },
  {
    name: 'Municipal FC',
    community: 'Municipio',
    logo: '/logos/municipal.png',
  },
  {
    name: 'Los Andes',
    community: 'Andes',
    logo: '/logos/andes.png',
  },
  {
    name: 'Sporting Club',
    community: 'Sporting',
    logo: '/logos/sporting.png',
  },
];

const rightTeams = [
  {
    name: 'Estrella Roja',
    community: 'Roja',
    logo: '/logos/roja.png',
  },
  {
    name: 'Inter Comunal',
    community: 'Inter',
    logo: '/logos/inter.png',
  },
  {
    name: 'Academia FC',
    community: 'Academia',
    logo: '/logos/academia.png',
  },
  {
    name: 'Racing Club',
    community: 'Racing',
    logo: '/logos/racing.png',
  },
  {
    name: 'Bolívar Unido',
    community: 'Bolívar',
    logo: '/logos/bolivar.png',
  },
    {
    name: 'Estrella Roja',
    community: 'Roja',
    logo: '/logos/roja.png',
  },
  {
    name: 'Inter Comunal',
    community: 'Inter',
    logo: '/logos/inter.png',
  },
  {
    name: 'Academia FC',
    community: 'Academia',
    logo: '/logos/academia.png',
  },
];

const Playoffs: React.FC = () => {
  return (
    <Page>
      <Title>Playoffs</Title>
      <BracketContainer>
        <Side>
          {leftTeams.map((team, index) => (
            <TeamBracketCard
              key={index}
              logo={team.logo}
              name={team.name}
              community={team.community}
            />
          ))}
        </Side>
        <Center>
          <FinalBox>Final</FinalBox>
        </Center>
        <Side>
          {rightTeams.map((team, index) => (
            <TeamBracketCard
              key={index}
              logo={team.logo}
              name={team.name}
              community={team.community}
            />
          ))}
        </Side>
      </BracketContainer>
    </Page>
  );
};

export default Playoffs;