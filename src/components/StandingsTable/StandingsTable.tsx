import React from 'react';
import type { ITeamStanding } from '../../types/types';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Logo,
  TeamName,
  TitleTeam
} from './styles';
import { getLogo } from '../../tools/tools';

interface Props {
  standings: ITeamStanding[];
}

const StandingsTable: React.FC<Props> = ({ standings }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Equipo</TableCell>
            <TableCell>PJ</TableCell>
            <TableCell>G</TableCell>
            <TableCell>E</TableCell>
            <TableCell>P</TableCell>
            <TableCell>GF</TableCell>
            <TableCell>GC</TableCell>
            <TableCell>DG</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map((team, index) => (
            <TableRow key={team.team}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <TitleTeam>
                  <Logo src={getLogo(team.team)} alt={team.team} />
                  <TeamName>{team.team}</TeamName>
                </TitleTeam>
              </TableCell>
              <TableCell>{team.matchesPlayed}</TableCell>
              <TableCell>{team.wins}</TableCell>
              <TableCell>{team.draws}</TableCell>
              <TableCell>{team.losses}</TableCell>
              <TableCell>{team.goalsFor}</TableCell>
              <TableCell>{team.goalsAgainst}</TableCell>
              <TableCell>{team.goalDifference}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StandingsTable;
