import { supabase } from "../lib/supabase";
import type { INotification } from "../types/types";

export const getNotifications = async (): Promise<INotification[]> => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*");
  if (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }

  return data || [];
};
