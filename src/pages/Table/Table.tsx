import React, { useState, useEffect } from "react";
import { StandingsTable, Title, HeaderCategory } from "../../components";
import logo from '../../assets/images/icons/logo1.png';
import { juvenil } from '../../constants/table/juvenil';
import { senior } from '../../constants/table/senior';
import { damas } from '../../constants/table/damas';
import { infantil } from '../../constants/table/infantil';
import { categories } from '../../constants/categories';
import { orderTable } from "../../tools/tools";

import { useNavigate } from "react-router-dom";

const Fixture: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const [table, setTable] = useState(juvenil);
  const [selectedCategory, setSelectedCategory] = useState<string>(
      categoryParam || "Juvenil"
    );

    const navigate = useNavigate();

    const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    navigate(`/table?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  useEffect(() => {
    switch (selectedCategory) {
      case "Juvenil":
        setTable(orderTable(juvenil));
        break;
      case "Senior":
        setTable(orderTable(senior));
        break;
      case "Damas":
        setTable(orderTable(damas));
        break;
      case "Infantil":
        setTable(orderTable(infantil));
        break;
      default:
        setTable(juvenil);
        break;
    }
  }, [selectedCategory]);

  return (
    <>
      <HeaderCategory img={logo} color="#1abc9c"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
    
      <Title title={`Tabla de posiciones: ${selectedCategory}`} />
      <StandingsTable standings={table} />
    </>
  );
};

export default Fixture;
