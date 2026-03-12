import React from "react";
import { teams as equipos } from "../../constants/teams/teams";
import { QRCodeCanvas } from "qrcode.react";
import { getLogo } from "../../tools/tools";
import logo from "../../assets/images/icons/logo1.png";
import * as htmlToImage from "html-to-image";
import {
  GridContainer,
  Card,
  CardContent,
  TeamLogo,
  TeamName,
  PlayerPhoto,
  PlayerName,
  PlayerPosition,
  DNI,
  QRWrapper,
  DownloadButton,
  HederCredential,
  ChampionshipLogo,
  PlayerFullName,
  PlayerNumber,
  PhotoWrapper,
  CardTitle,
} from "./styles";

const Credenciales: React.FC = () => {
const downloadCredencial = (id: string) => {
  const node = document.getElementById(id);

  if (!node) return;

  htmlToImage.toPng(node).then((dataUrl: string) => {
    const link = document.createElement("a");
    link.download = `${id}.png`;
    link.href = dataUrl;
    link.click();
  });
};

  return (
    <GridContainer>
      {equipos.map((team) =>
        team.teams.map((subTeam) =>
          subTeam.players.map((player) => {
            // id único por equipo, categoría y jugador
            const exportId = `credencial-img-${team.id}-${subTeam.id}-${player.id}`;

            // URL ahora incluye categoría
            const playerUrl = `https://san-lucas.netlify.app/player-detail?idPlayer=${player.id}&idTeam=${team.id}&category=${subTeam.category}`;

            return (
              <div key={exportId} style={{ textAlign: "center" }}>
                {/* Contenido exportable */}
                <Card id={exportId}>
                  <CardContent>
                    <HederCredential>
                      <ChampionshipLogo src={logo} alt="Logo" />
                      <div>
                        <CardTitle>CARNET DE JUGADOR</CardTitle>
                      </div>
                      {/* <TeamLogo src={getLogo(team.name)} alt={team.name} /> */}
                    </HederCredential>

                    <TeamName>
                      {team.name} - {subTeam.category}
                    </TeamName>

                    <PhotoWrapper>
                      <PlayerPhoto
                        // src={getLogo("Miguelito")}
                        src={player.image}
                        alt={player.name}
                      />
                      <DNI>{player.DNI?.toString().slice(-5)}</DNI>
                    </PhotoWrapper>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <PlayerName>{player.name}</PlayerName>
                      <PlayerNumber>{player.number}</PlayerNumber>
                    </div>
                    <PlayerFullName>{player.fullName}</PlayerFullName>

                    <PlayerPosition>{player.position}</PlayerPosition>

                      
                    <QRWrapper>
                      <QRCodeCanvas
                        value={playerUrl}
                        size={90}
                        bgColor="#fff"
                      />
                    <TeamLogo src={getLogo(team.name)} alt={team.name} />
                    </QRWrapper>
                  </CardContent>
                </Card>

                {/* Botón fuera del contenido exportado */}
                <DownloadButton onClick={() => downloadCredencial(exportId)}>
                  Descargar
                </DownloadButton>
              </div>
            );
          })
        )
      )}
    </GridContainer>
  );
};

export default Credenciales;
