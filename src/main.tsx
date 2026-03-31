import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Toaster } from "react-hot-toast";
import { NotificationsProvider } from "./context/NotificationsContext";

import App from "./App";
import theme from './theme'; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <NotificationsProvider>
        <App />
        <Toaster position="top-right" />
      </NotificationsProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        console.log("Service Worker registrado");
      })
      .catch((error) => {
        console.log("Error registrando SW:", error);
      });
  });
}

