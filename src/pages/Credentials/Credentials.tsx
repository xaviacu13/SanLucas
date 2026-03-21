import React from "react";
import { teams as equipos } from "../../constants/teams/teams";
import { QRCodeCanvas } from "qrcode.react";
import { getLogo } from "../../tools/tools";
import logo from "../../assets/images/icons/logo1.png";
import watermarker from "../../assets/images/logos/logo2.png";
import signature from "../../assets/images/logos/signature.png";
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
  PlayerInfo,
  BodyCredential,
  Watermark,
} from "./styles";

const Credenciales: React.FC = () => {
  const downloadCredencial = (id: string) => {
    const node = document.getElementById(id);
    if (node) {
      htmlToImage.toPng(node).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${id}.png`;
        link.href = dataUrl;
        link.click();
      });
    }
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
                        <CardTitle>SAN LUCA 2026</CardTitle>
                      </div>
                    </HederCredential>
                    <BodyCredential>
                    <Watermark src={watermarker} alt="watermark" />

                    <TeamName>
                      {team.name} - {subTeam.category}
                    </TeamName>

                    <PhotoWrapper>
                      <PlayerPhoto
                        src={player.image}
                        alt={player.name}
                      />
                      <DNI>{player.DNI?.toString().slice(-5)}</DNI>
                    </PhotoWrapper>
                    <PlayerInfo>
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                      </div>
                      <div>
                        <TeamLogo src={getLogo(team.name)} alt={team.name} />
                      </div>
                    </PlayerInfo>

                    <QRWrapper>
                      <QRCodeCanvas
                        value={playerUrl}
                        size={90}
                        bgColor="#fff"
                      />
                      <div style={{ gap: "4px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={signature} alt="signature" style={{ width: "100px"}} />
                        <p style={{ fontSize: "10px", margin: "0" }}>
                          STRIO. DE TEGNOLOGIA<br/>
                          Beto Alvarado
                        </p>
                      </div>
                      {/* <TeamLogo src={getLogo(team.name)} alt={team.name} /> */}
                    </QRWrapper>
                    </BodyCredential>
                  </CardContent>
                </Card>

                {/* Botón fuera del contenido exportado */}
                <DownloadButton onClick={() => downloadCredencial(exportId)}>
                  Descargar
                </DownloadButton>
              </div>
            );
          }),
        ),
      )}
    </GridContainer>
  );
};

export default Credenciales;
