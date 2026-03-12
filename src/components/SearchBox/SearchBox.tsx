import React from "react";
import { Root, RadioGroupContainer, SelectContainer } from "./styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { juvenil } from "../../constants/teamCategories/juvenil";
import { senior } from "../../constants/teamCategories/senior";
import { damas } from "../../constants/teamCategories/damas";
// import { infantil as teams } from "../../constants/teamCategories/infantil";
import FilterIcon from "@mui/icons-material/Filter";
import { getLogo } from "../../tools/tools";

interface SearchBoxProps {
  stGame: string;
  selectedCategory: string;
  setStGame: (value: string) => void;
  team: string;
  setTeam: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  stGame,
  selectedCategory,
  setStGame,
  team,
  setTeam,
}) => {
  const getTeamsLabel =()=>{
    if (selectedCategory === "Juvenil"){
      return juvenil
    }
    if (selectedCategory === "Senior"){
      return senior
    }if (selectedCategory === "Damas"){
      return damas
    } else return juvenil
  }

  return (
    <Root>
      <FormControl component="fieldset">
        <FormLabel component="legend">Partidos</FormLabel>
        <RadioGroupContainer>
          <RadioGroup
            row
            value={stGame}
            onChange={(e) => setStGame(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="played"
              control={<Radio />}
              label="Finalizados"
            />
            {/* <FormControlLabel
              value="scheduled"
              control={<Radio />}
              label="Programados"
            /> */}
            {/* <FormControlLabel
              value="playing"
              control={<Radio />}
              label="En juego"
            /> */}
            {/* <FormControlLabel
              value="willPlay"
              control={<Radio />}
              label="Por jugar"
            /> */}
          </RadioGroup>
        </RadioGroupContainer>
      </FormControl>

      <SelectContainer>
        <FormControl fullWidth>
          <InputLabel sx={{ fontSize: "14px" }}>Comunidad/Equipo</InputLabel>
          <Select
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            sx={{
              marginTop: "0.7rem",
              fontSize: "14px",
              ".MuiSelect-select": {
                padding: "6px 12px",
              },
            }}
          >
            <MenuItem value="all" sx={{ fontSize: "14px", py: 1 }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FilterIcon />
                Todos
              </div>
            </MenuItem>
            {getTeamsLabel().map((t) => (
              <MenuItem
                key={t.id}
                value={t.name}
                sx={{ fontSize: "14px", py: 1 }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={getLogo(t.name)}
                    alt={t.name}
                    style={{ width: 20, height: 20, objectFit: "contain" }}
                  />
                  {t.name}
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectContainer>
    </Root>
  );
};

export default SearchBox;
