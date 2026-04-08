import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Stack,
  InputLabel,
  FormControl,
  Rating,
} from "@mui/material";

import { uploadPlayerImage, createPlayer } from "../../services/players.service";
import type { IPlayerDB } from "../../types/types";

type PlayerFormType = Omit<IPlayerDB, "id" | "created_at">;

const PlayerForm: React.FC = () => {
  const [form, setForm] = useState<PlayerFormType>({
    name: "",
    full_name: "",
    dni: "",
    number: 0,
    position: "",
    nationality: "boliviana",
    status: "enabled",
    birthdate: "",
    team: "",
    category: "Juvenil",
    likes: 0,
    rating: 0,
    image_url: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    try {
      let image_url = "";

      if (file) {
        image_url = await uploadPlayerImage(file);
      }

      await createPlayer({
        ...form,
        image_url,
      });

      alert("Jugador creado 🚀");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxWidth={500} mx="auto" mt={4}>
      <Typography variant="h5" mb={2}>
        Registrar Jugador
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Nombre corto"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          fullWidth
        />

        <TextField
          label="Nombre completo"
          value={form.full_name}
          onChange={(e) =>
            setForm({ ...form, full_name: e.target.value })
          }
          fullWidth
        />

        <TextField
          label="DNI"
          value={form.dni}
          onChange={(e) =>
            setForm({ ...form, dni: e.target.value })
          }
          fullWidth
        />

        <TextField
          label="Número"
          type="number"
          value={form.number}
          onChange={(e) =>
            setForm({ ...form, number: Number(e.target.value) })
          }
          fullWidth
        />

        <TextField
          label="Posición"
          value={form.position}
          onChange={(e) =>
            setForm({ ...form, position: e.target.value })
          }
          fullWidth
        />

        {/* Nacionalidad */}
        <FormControl fullWidth>
          <InputLabel>Nacionalidad</InputLabel>
          <Select
            value={form.nationality}
            label="Nacionalidad"
            onChange={(e) =>
              setForm({
                ...form,
                nationality: e.target.value as IPlayerDB["nationality"],
              })
            }
          >
            <MenuItem value="boliviana">Boliviana</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
          </Select>
        </FormControl>

        {/* Estado */}
        <FormControl fullWidth>
          <InputLabel>Estado</InputLabel>
          <Select
            value={form.status}
            label="Estado"
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value as IPlayerDB["status"],
              })
            }
          >
            <MenuItem value="enabled">Activo</MenuItem>
            <MenuItem value="disabled">Inactivo</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Fecha de nacimiento"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={form.birthdate}
          onChange={(e) =>
            setForm({ ...form, birthdate: e.target.value })
          }
          fullWidth
        />

        {/* Equipo */}
        <FormControl fullWidth>
          <InputLabel>Equipo</InputLabel>
          <Select
            value={form.team}
            label="Equipo"
            onChange={(e) =>
              setForm({ ...form, team: e.target.value })
            }
          >
            <MenuItem value="">Seleccionar</MenuItem>
            <MenuItem value="Puca Loma">Puca Loma</MenuItem>
            <MenuItem value="Kumuni">Kumuni</MenuItem>
          </Select>
        </FormControl>

        {/* Categoría */}
        <FormControl fullWidth>
          <InputLabel>Categoría</InputLabel>
          <Select
            value={form.category}
            label="Categoría"
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value as IPlayerDB["category"],
              })
            }
          >
            <MenuItem value="Juvenil">Juvenil</MenuItem>
            <MenuItem value="Senior">Senior</MenuItem>
            <MenuItem value="Damas">Damas</MenuItem>
            <MenuItem value="Infantil">Infantil</MenuItem>
          </Select>
        </FormControl>

        {/* Rating ⭐ */}
        <Box>
          <Typography>Rating</Typography>
          <Rating
            value={form.rating}
            max={10}
            onChange={(_, value) =>
              setForm({ ...form, rating: value || 0 })
            }
          />
        </Box>

        {/* Imagen */}
        <Button variant="outlined" component="label">
          Subir Imagen
          <input
            hidden
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setFile(file);
            }}
          />
        </Button>

        <Button variant="contained" onClick={handleSubmit}>
          Guardar Jugador
        </Button>
      </Stack>
    </Box>
  );
};

export default PlayerForm;