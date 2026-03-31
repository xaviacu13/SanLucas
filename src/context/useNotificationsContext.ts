import { useContext } from "react";
import { NotificationsContext } from "./notificationsContextValue";
import type { UseNotificationsResult } from "../hooks/useNotifications";

export const useNotificationsContext = (): UseNotificationsResult => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error("useNotificationsContext must be used within NotificationsProvider");
  }

  return context;
};
