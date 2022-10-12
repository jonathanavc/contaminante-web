import React from "react";
import Home from "../views/Home";
import Calculator from "../views/Calculator"
import { createBrowserRouter } from "react-router-dom";

export const routerBrowser = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/calculator",
    element: <Calculator></Calculator>,
  }
]);
