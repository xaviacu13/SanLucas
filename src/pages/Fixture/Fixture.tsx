import React, { useState, useEffect } from "react";
import { Root } from "./styles";
import {
  FixtureCard,
  SearchBox,
  HeaderCategory,
  Title,
} from "../../components";
import { juvenil } from "../../constants/fixture/juvenil";
import { senior } from "../../constants/fixture/senior";
import { damas } from "../../constants/fixture/damas";
import { infantil } from "../../constants/fixture/infantil";
import logo from "../../assets/images/icons/logo1.png";
import { categories } from "../../constants/categories";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Fixture: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const initialFixture = juvenil;
  const hasScheduledInitial = initialFixture.some(
    (match) => match.status === "scheduled" || match.status === "canceled"
  );

  const [stGame, setStGame] = useState(
    hasScheduledInitial ? "scheduled" : "played"
  );
  const [team, setTeam] = useState("all");
  const [fixture, setFixture] = useState(initialFixture);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "Juvenil"
  );

  const navigate = useNavigate();

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    navigate(`/fixture?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  useEffect(() => {
    let newFixture;

    switch (selectedCategory) {
      case "Juvenil":
        newFixture = juvenil;
        break;
      case "Senior":
        newFixture = senior;
        break;
      case "Damas":
        newFixture = damas;
        break;
      case "Infantil":
        newFixture = infantil;
        break;
      default:
        newFixture = juvenil;
        break;
    }

    setFixture(newFixture);

    const hasScheduledOrCanceled = newFixture.some(
      (match) => match.status === "scheduled" || match.status === "canceled"
    );
    const hasPlayed = newFixture.some((match) => match.status === "played");

    if (hasScheduledOrCanceled) {
      setStGame("scheduled");
    } else if (hasPlayed) {
      setStGame("played");
    } else {
      setStGame("all");
    }
  }, [selectedCategory]);

  const filteredMatches = fixture
    .filter((match) => {
      let matchStatusOk = false;

      if (stGame === "all") {
        matchStatusOk = true;
      } else if (stGame === "willPlay") {
        matchStatusOk =
          match.status === "willPlay" ||
          match.status === "" ||
          match.status === "scheduled";
      } else if (stGame === "scheduled") {
        matchStatusOk =
          match.status === "scheduled" || match.status === "canceled";
      } else if (stGame === "played") {
        matchStatusOk = match.status === "played";
      } else {
        matchStatusOk = match.status === stGame;
      }

      const matchTeamOk =
        team === "all" || match.team1 === team || match.team2 === team;

      return matchStatusOk && matchTeamOk;
    })
    .sort((a, b) => {
      if (stGame === "played") {
        const groupA = parseInt(String(a.group).replace(/\D/g, "") || "0", 10);
        const groupB = parseInt(String(b.group).replace(/\D/g, "") || "0", 10);
        return groupB - groupA;
      }
      return 0;
    });

  return (
    <Root>
      <HeaderCategory
        img={logo}
        title={`Fixture ${selectedCategory}`}
        color="#1abc9c"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <Title title={`Fixture ${selectedCategory}`} />

      <SearchBox
        setStGame={setStGame}
        selectedCategory={selectedCategory}
        stGame={stGame}
        team={team}
        setTeam={setTeam}
      />

      {filteredMatches.length > 0 ? (
        filteredMatches.map((match) => (
          <FixtureCard
            key={match.id}
            id={match.id}
            team1={match.team1}
            team2={match.team2}
            scorerTeam1={match.scorerTeam1}
            scorerTeam2={match.scorerTeam2}
            date={match.date}
            time={match.time}
            location={match.location}
            status={match.status}
            group={match.group}
            observation={match.observation}
            category={selectedCategory}
          />
        ))
      ) : (
        <Typography
          variant="h3"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          No hay partidos encontrados para este filtro.
        </Typography>
      )}
    </Root>
  );
};

export default Fixture;
