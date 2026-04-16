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
import toast from "react-hot-toast";

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 📸 Imagen + preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));

    setErrors((prev) => ({ ...prev, image: "" }));
  };

  // 🔄 Reset
  const resetForm = () => {
    setForm(initialState);
    setFile(null);
    setPreview("");
    setErrors({});
  };

  // ✅ Validación
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name) newErrors.name = "Nombre requerido";
    if (!form.full_name) newErrors.full_name = "Nombre completo requerido";
    if (!form.dni) newErrors.dni = "DNI requerido";
    // if (!form.number) newErrors.number = "Número requerido";
    if (!form.position) newErrors.position = "Posición requerida";
    if (!form.birthdate) newErrors.birthdate = "Fecha requerida";
    if (!form.team) newErrors.team = "Equipo requerido";
    if (!form.category) newErrors.category = "Categoría requerida";

    if (!file) newErrors.image = "Imagen obligatoria";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Submit
  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      let image_url = "";

      if (file) {
        image_url = await uploadPlayerImage(file);
      }

      await createPlayer({
        ...form,
        image_url,
      });

      toast.success("Jugador registrado 🚀");

      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Error al registrar jugador ❌");
    }
  };

  return (
    <Box maxWidth={500} mx="auto" mt={4}>
      <Typography variant="h5" mb={2}>
        Registrar Jugador
      </Typography>

      <Stack spacing={2}>
        {/* Nombre corto */}
        <TextField
          label="Nombre corto"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
            setErrors({ ...errors, name: "" });
          }}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
        />

        {/* Nombre completo */}
        <TextField
          label="Nombre completo"
          value={form.full_name}
          onChange={(e) => {
            setForm({ ...form, full_name: e.target.value });
            setErrors({ ...errors, full_name: "" });
          }}
          error={!!errors.full_name}
          helperText={errors.full_name}
          fullWidth
        />

        {/* DNI */}
        <TextField
          label="DNI"
          value={form.dni}
          onChange={(e) => {
            setForm({ ...form, dni: e.target.value });
            setErrors({ ...errors, dni: "" });
          }}
          error={!!errors.dni}
          helperText={errors.dni}
          fullWidth
        />

        {/* Número */}
        <TextField
          label="Número"
          type="number"
          value={form.number}
          onChange={(e) => {
            setForm({ ...form, number: Number(e.target.value) });
            setErrors({ ...errors, number: "" });
          }}
          error={!!errors.number}
          helperText={errors.number}
          fullWidth
        />

        {/* Posición */}
        <FormControl fullWidth error={!!errors.position}>
          <InputLabel>Posición</InputLabel>
          <Select
            value={form.position}
            label="Posición"
            onChange={(e) => {
              setForm({
                ...form,
                position: e.target.value as IPlayerDB["position"],
              });
              setErrors({ ...errors, position: "" });
            }}
          >
            <MenuItem value="Defensor">Defensor</MenuItem>
            <MenuItem value="Delantero">Delantero</MenuItem>
            <MenuItem value="Mediocampista">Mediocampista</MenuItem>
            <MenuItem value="Lateral izquierdo">Lateral izquierdo</MenuItem>
            <MenuItem value="Lateral derecho">Lateral derecho</MenuItem>
            <MenuItem value="Centro delantero">Centro delantero</MenuItem>
            <MenuItem value="Portero">Portero</MenuItem>
            <MenuItem value="Delegado">Delegado</MenuItem>
            <MenuItem value="DT">DT</MenuItem>
          </Select>
          {errors.position && (
            <Typography color="error" variant="caption">
              {errors.position}
            </Typography>
          )}
        </FormControl>

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

        {/* Fecha */}
        <TextField
          label="Fecha de nacimiento"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={form.birthdate}
          onChange={(e) => {
            setForm({ ...form, birthdate: e.target.value });
            setErrors({ ...errors, birthdate: "" });
          }}
          error={!!errors.birthdate}
          helperText={errors.birthdate}
          fullWidth
        />

        {/* Equipo */}
        <FormControl fullWidth error={!!errors.team}>
          <InputLabel>Equipo</InputLabel>
          <Select
            value={form.team}
            label="Equipo"
            onChange={(e) => {
              setForm({ ...form, team: e.target.value });
              setErrors({ ...errors, team: "" });
            }}
          >
            <MenuItem value="">Seleccionar</MenuItem>
            <MenuItem value="Sabala Jr.">Sabala Jr.</MenuItem>
             <MenuItem value="Malliri">Malliri</MenuItem>
             <MenuItem value="Corma">Corma</MenuItem>
             <MenuItem value="Sabala Jr.">Sabala Jr.</MenuItem>
             <MenuItem value="Cinteño">Cinteño</MenuItem>
             <MenuItem value="Chillagua">Chillagua</MenuItem>
            <MenuItem value="Puca Loma">Puca Loma</MenuItem>
            <MenuItem value="Puca Loma">Puca Loma</MenuItem>
            <MenuItem value='Rodeo "A"'>Rodeo "A"</MenuItem>
            <MenuItem value='Rodeo "B"'>Rodeo "B"</MenuItem>
            <MenuItem value="Kumuni">Kumuni</MenuItem>
          </Select>
          {errors.team && (
            <Typography color="error" variant="caption">
              {errors.team}
            </Typography>
          )}
        </FormControl>

        {/* Categoría */}
        <FormControl fullWidth error={!!errors.category}>
          <InputLabel>Categoría</InputLabel>
          <Select
            value={form.category}
            label="Categoría"
            onChange={(e) => {
              setForm({
                ...form,
                category: e.target.value as IPlayerDB["category"],
              });
              setErrors({ ...errors, category: "" });
            }}
          >
            <MenuItem value="Juvenil">Juvenil</MenuItem>
            <MenuItem value="Senior">Senior</MenuItem>
            <MenuItem value="Damas">Damas</MenuItem>
            <MenuItem value="Infantil">Infantil</MenuItem>
          </Select>
          {errors.category && (
            <Typography color="error" variant="caption">
              {errors.category}
            </Typography>
          )}
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

        {errors.image && (
          <Typography color="error" variant="caption">
            {errors.image}
          </Typography>
        )}

        {/* Preview */}
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

        {/* Botones */}
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