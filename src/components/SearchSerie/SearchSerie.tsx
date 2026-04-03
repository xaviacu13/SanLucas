import React from "react";
import { Root, SerieLabel, LabelContainer } from "./styles";
import type { SerieType } from "../../types/types";

interface ISearchSerieProp {
  serie: SerieType;
  setSerie: (value: SerieType) => void;
}

const SearchSerie: React.FC<ISearchSerieProp> = ({
  serie,
  setSerie,
}) => {
  return (
    <Root>
      <LabelContainer>
        <SerieLabel
          onClick={() => setSerie("all")}
          serie="all"
          selected={serie === "all"}
        >
          Ambos
        </SerieLabel>
        <SerieLabel
          onClick={() => setSerie("A")}
          serie="A"
          selected={serie === "A"}
        >
          Serie A
        </SerieLabel>

        <SerieLabel
          onClick={() => setSerie("B")}
          serie="B"
          selected={serie === "B"}
        >
          Serie B
        </SerieLabel>
      </LabelContainer>
    </Root>
  );
};

export default SearchSerie;