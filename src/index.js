import ReactDOM from "react-dom/client";
import React from "react";
import { routerBrowser } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeApp } from "./ThemeProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeApp}>
      <RouterProvider router={routerBrowser} />
    </ThemeProvider>
  </React.StrictMode>
);
