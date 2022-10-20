import React from "react";
import Home from "../views/Home";
import Calculator from "../views/Calculator";
import Info from "../views/Info";
import Login from "../views/Login";
import { createBrowserRouter } from "react-router-dom";

export const routerBrowser = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/calculator",
    element: <Calculator></Calculator>,
  },
  {
    path: "/info",
    element: <Info></Info>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
