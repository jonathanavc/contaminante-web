import "../styles/Home.css";
import React from "react";
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CssBaseline,
  Tooltip,
  Button,
  Stack
} from "@mui/material";
import { positions } from "@mui/system";
import landing from "../assets/img/landing.jpeg";
import { ExpandMoreIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-start w-50">
            <h2>Universidad de Concepción</h2>
            <h1>Toxicología de la alimentación</h1>
            <h3>
              Conocer la toxicidad que contienen los alimentos que consumes puede resultar en una
              práctica positiva
            </h3>
            <div className="containerCenter">
              <Stack direction="row" spacing={2}>
                <NavLink
                  to="calculator"
                >
                  <Button variant="outlined" color="warning">
                    Calculadora
                  </Button>
                </NavLink>

                <Button variant="contained" color="warning">
                  Administrador
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
export default Home;
