import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const queryClient = new QueryClient();

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.6)",
      light: "rgba(255, 255, 255, 0.6)",
    },
    background: {
      default: "#282828",
      paper: "#282828",
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 390, md: 900, lg: 1200, xl: 1536 },
  },
};

const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
