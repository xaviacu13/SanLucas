import type { ReactNode } from "react";
import { useNotifications } from "../hooks/useNotifications";
import { NotificationsContext } from "./notificationsContextValue";

type NotificationsProviderProps = {
  children: ReactNode;
};

export const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const data = useNotifications();

  return (
    <NotificationsContext.Provider value={data}>
      {children}
    </NotificationsContext.Provider>
  );
};
