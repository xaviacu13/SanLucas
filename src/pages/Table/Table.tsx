import React, { useState } from "react";
import { StandingsTable, Title, HeaderCategory, SearchSerie } from "../../components";
import logo from "../../assets/images/icons/logo1.png";
import { juvenil } from "../../constants/table/juvenil";
import { senior } from "../../constants/table/senior";
import { damas } from "../../constants/table/damas";
import { infantil } from "../../constants/table/infantil";
import { categories } from "../../constants/categories";
import { orderTable } from "../../tools/tools";
import type { ITeamStanding, SerieType } from "../../types/types";
import { Root } from './styles'

import { useNavigate } from "react-router-dom";

const Fixture: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const [serie, setSerie] = useState<SerieType>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "Juvenil",
  );

  const navigate = useNavigate();

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    navigate(`/table?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  const table = React.useMemo<ITeamStanding[]>(() => {
    switch (selectedCategory) {
      case "Juvenil":
        return orderTable(juvenil);
      case "Senior":
        return orderTable(senior);
      case "Damas":
        return orderTable(damas);
      case "Infantil":
        return orderTable(infantil);
      default:
        return orderTable(juvenil);
    }
  }, [selectedCategory]);

const filterTableBySerie = (
  table: ITeamStanding[],
  serie: SerieType
): ITeamStanding[] => {
  if (serie === "all") return table;

  return table.filter((team) => {
    // equipos sin serie → mostrar siempre (ej: damas)
    if (!team.serie) return true;

    return team.serie === serie;
  });
};

const filteredTable = React.useMemo(() => {
  const baseTable = table;

  return filterTableBySerie(baseTable, serie);
}, [table, serie]);

  return (
    <Root>
      <HeaderCategory
        img={logo}
        color="#22b7be"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <Title title={`Tabla de posiciones: ${selectedCategory}`} />
      <SearchSerie serie={serie} setSerie={setSerie}/>
      <StandingsTable standings={filteredTable} />
    </Root>
  );
};

export default Fixture;
