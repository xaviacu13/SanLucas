import { useEffect, useState } from "react";
import { getPlayers } from "../services/players.service";
import type { IPlayerDB } from "../types/types";

export const usePlayers = (filters?: {
  team?: string;
  category?: string;
}) => {
  const [players, setPlayers] = useState<IPlayerDB[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await getPlayers(filters);
      setPlayers(data);
      setLoading(false);
    };

    fetch();
  }, [filters]);

  return { players, loading };
};