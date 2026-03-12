import React from "react";
import notifications from "../../constants/notifications";
import type { INotification } from "../../types/types";
import { NotificationContainer, StyledAlert, DateContent } from "./styles";
import AlertTitle from "@mui/material/AlertTitle";
import { Divider } from "@mui/material";

const Notifications: React.FC = () => {
  return (
    <NotificationContainer>
      {notifications.map((notification: INotification, index: number) => (
        <StyledAlert key={index} severity={notification.status}>
          <AlertTitle>{notification.title}</AlertTitle>
          {notification.description}
          <Divider sx={{ marginTop: "0.75rem" }} />
          <DateContent>{notification.date}</DateContent>
        </StyledAlert>
      ))}
    </NotificationContainer>
  );
};

export default Notifications;
