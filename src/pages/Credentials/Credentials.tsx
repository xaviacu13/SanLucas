import React from "react";
import { teams as equipos } from "../../constants/teams/teams";
import { QRCodeCanvas } from "qrcode.react";
import { getLogo } from "../../tools/tools";
import logo from "../../assets/images/icons/logo1.png";
import watermarker from "../../assets/images/logos/logo2.png";
import signature from "../../assets/images/logos/signature.png";
import flag from "../../assets/images/logos/flag.png";
import * as htmlToImage from "html-to-image";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
  // 📸 descargar una sola credencial
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

  // 📄 descargar TODO en PDF (A4 con 9 por hoja)
  const downloadPDF = async () => {
  const pdf = new jsPDF("p", "mm", "a4");

  const cards = document.querySelectorAll("[id^='credencial-img-']");

  const cardsPerRow = 3;
  const cardsPerColumn = 3;
  const cardsPerPage = cardsPerRow * cardsPerColumn;

  const cardWidth = 60;
  const cardHeight = 92;

  const pageWidth = 210; // A4 mm

  const marginX = (pageWidth - cardsPerRow * cardWidth) / 2;
  const marginY = 10;

  for (let i = 0; i < cards.length; i++) {
    const element = cards[i] as HTMLElement;

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    // 👉 calcular fila y columna
    const indexOnPage = i % cardsPerPage;
    const col = indexOnPage % cardsPerRow;
    const row = Math.floor(indexOnPage / cardsPerRow);

    const x = marginX + col * cardWidth;
    const y = marginY + row * cardHeight;

    pdf.addImage(imgData, "PNG", x, y, cardWidth, cardHeight);

    // 👉 nueva página
    if ((i + 1) % cardsPerPage === 0 && i !== cards.length - 1) {
      pdf.addPage();
    }
  }

  pdf.save("credenciales.pdf");
};

  return (
    <>
      {/* 🔥 BOTÓN PDF GLOBAL */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <DownloadButton onClick={downloadPDF}>
          Descargar TODO en PDF
        </DownloadButton>
      </div>

      <GridContainer>
        {equipos.map((team) =>
          team.teams.map((subTeam) =>
            subTeam.players.map((player) => {
              const exportId = `credencial-img-${team.id}-${subTeam.id}-${player.id}`;

              const playerUrl = `https://san-lucas.netlify.app/player-detail?idPlayer=${player.id}&idTeam=${team.id}&category=${subTeam.category}`;

              return (
                <div key={exportId} style={{ textAlign: "center" }}>
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

                        {/* 👇 bandera de fondo */}
                        <PhotoWrapper bg={flag}>
                          <PlayerPhoto src={player.image} alt={player.name} />
                          <DNI>{player.DNI?.toString().slice(-5)}</DNI>
                        </PhotoWrapper>

                        <PlayerInfo>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                gap: "8px",
                              }}
                            >
                              <PlayerName>{player.name}</PlayerName>
                              <PlayerNumber>{player.number}</PlayerNumber>
                            </div>

                            <PlayerFullName>{player.fullName}</PlayerFullName>

                            <PlayerPosition>{player.position}</PlayerPosition>
                          </div>

                          <TeamLogo src={getLogo(team.name)} alt={team.name} />
                        </PlayerInfo>

                        <QRWrapper>
                          <QRCodeCanvas
                            value={playerUrl}
                            size={90}
                            bgColor="#fff"
                          />

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={signature}
                              alt="signature"
                              style={{ width: "80px" }}
                            />
                            <p style={{ fontSize: "10px", margin: 0, gap: 0, color: "darkslategray"}}>
                              <strong>STRIO. DE TEGNOLOGIA</strong>
                              <br />
                              Beto Alvarado
                            </p>
                          </div>
                        </QRWrapper>
                      </BodyCredential>
                    </CardContent>
                  </Card>

                  {/* 👇 descarga individual */}
                  <DownloadButton onClick={() => downloadCredencial(exportId)}>
                    Descargar
                  </DownloadButton>
                </div>
              );
            }),
          ),
        )}
      </GridContainer>
    </>
  );
};

export default Credenciales;
