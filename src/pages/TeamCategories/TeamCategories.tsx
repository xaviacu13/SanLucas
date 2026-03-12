import React, { useState, useEffect } from "react";
import { DelegateCard, Title, HeaderCategory } from "../../components";
import logo from "../../assets/images/icons/logo1.png";
import { juvenil } from "../../constants/teamCategories/juvenil";
import { senior } from "../../constants/teamCategories/senior";
import { damas } from "../../constants/teamCategories/damas";
import { infantil } from "../../constants/teamCategories/infantil";
import { categories } from "../../constants/categories";
import { InfoContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const TeamCategories: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const [teamCategory, setTeamCategory] = useState(juvenil);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "Juvenil"
  );

  const navigate = useNavigate();

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    navigate(`/team-categories?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  useEffect(() => {
    switch (selectedCategory) {
      case "Juvenil":
        setTeamCategory(juvenil);
        break;
      case "Senior":
        setTeamCategory(senior);
        break;
      case "Damas":
        setTeamCategory(damas);
        break;
      case "Infantil":
        setTeamCategory(infantil);
        break;
      default:
        setTeamCategory(juvenil);
        break;
    }
  }, [selectedCategory]);

  return (
    <>
      <HeaderCategory
        img={logo}
        color="#1abc9c"
        category={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <InfoContainer>
        <Title title={`Equipos categoria: ${selectedCategory}`} />
        {teamCategory.map((team) => (
          <DelegateCard
            key={team.id}
            id={team.id}
            img={team.logo}
            url={team.url}
            name={team.name}
            category={selectedCategory}
            delegates={team.delegates}
            />
        ))}
      </InfoContainer>
    </>
  );
};

export default TeamCategories;
