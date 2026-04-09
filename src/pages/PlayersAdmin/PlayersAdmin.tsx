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

import {
  uploadPlayerImage,
  createPlayer,
} from "../../services/players.service";
import type { IPlayerDB } from "../../types/types";

type PlayerFormType = Omit<IPlayerDB, "id" | "created_at">;

const initialState: PlayerFormType = {
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
};

const PlayerForm: React.FC = () => {
  const [form, setForm] = useState<PlayerFormType>(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  // 📸 Manejo de imagen + preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    // generar preview
    const imageUrl = URL.createObjectURL(selectedFile);
    setPreview(imageUrl);
  };

  // 🔄 Resetear formulario
  const resetForm = () => {
    setForm(initialState);
    setFile(null);
    setPreview("");
  };

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

      // 🔥 reset automático
      resetForm();
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

        {/* Rating */}
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
          <input hidden type="file" onChange={handleFileChange} />
        </Button>

        {/* 👇 PREVIEW */}
        {preview && (
          <Box textAlign="center">
            <Typography variant="body2">Vista previa:</Typography>
            <img
              src={preview}
              alt="preview"
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 10,
                marginTop: 8,
              }}
            />
          </Box>
        )}

        {/* BOTONES */}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            Guardar
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={resetForm}
            fullWidth
          >
            Limpiar
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PlayerForm;