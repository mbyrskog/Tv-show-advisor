import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
