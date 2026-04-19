import { useQuery } from "@tanstack/react-query";
import { getPlayers } from "../services/players.service";
import type { IPlayerDB } from "../types/types";

export const usePlayers = (filters?: {
  team?: string;
  category?: string;
}) => {
  return useQuery<IPlayerDB[]>({
    queryKey: ["players", filters],
    queryFn: () => getPlayers(filters),

    // 🚀 cache inteligente
    staleTime: 1000 * 60 * 5, // 5 min sin refetch
    gcTime: 1000 * 60 * 10, // mantiene en memoria (antes cacheTime)

    // 🚀 UX - mantiene datos previos mientras carga nuevos
    placeholderData: (previousData) => previousData,

    // 🚀 evita queries innecesarias
    enabled: true,
  });
};