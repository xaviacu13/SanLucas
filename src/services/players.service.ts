import { supabase } from "../lib/supabase";
import type { IPlayerDB } from "../types/types";

// GET
export const getPlayers = async (): Promise<IPlayerDB[]> => {
  const { data, error } = await supabase.from("players").select("*");

  if (error) {
    console.error("Error fetching players:", error);
    return [];
  }

  return data || [];
};

// CREATE
export const createPlayer = async (player: Omit<IPlayerDB, "id">) => {
  const { data, error } = await supabase
    .from("players")
    .insert([player])
    .select()
    .single();

  if (error) {
    console.error("Error creating player:", error);
    throw error;
  }

  return data;
};

// DELETE
export const deletePlayer = async (id: number) => {
  const { error } = await supabase.from("players").delete().eq("id", id);

  if (error) throw error;
};

// UPDATE
export const updatePlayer = async (
  id: number,
  updatedFields: Partial<IPlayerDB>
) => {
  const { data, error } = await supabase
    .from("players")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const uploadPlayerImage = async (file: File) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("players")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("players")
    .getPublicUrl(fileName);

  return data.publicUrl;
};