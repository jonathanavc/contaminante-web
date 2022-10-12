import "../styles/Home.css";
import React from "react";
import { Container, Typography, Button, Stack, Grid } from "@mui/material";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="false" className="overflow-hidden p-0">
      <Grid container spacing={2} className="vh-100 d-flex align-items-center">
        <Grid xs={6}>
          <Container maxWidth="xs" style={{ marginStart: "100px" }}>
            <div className="d-flex flex-column justify-content-center align-items-start w-100">
              <Typography variant="h6" align="center" gutterBottom className="semibold">
                UNIVERSIDAD DE CONCEPCIÓN
              </Typography>
              <p></p>
              <Typography variant="h3" align="justify" gutterBottom className="semibold">
                Toxicología de la alimentación
              </Typography>
              <p></p>
              <Typography variant="h6" align="justify" gutterBottom className="semibold">
                Conocer la toxicidad que contienen los alimentos que consumes puede resultar en una
                práctica positiva.
              </Typography>
              <p></p>

              <div className="containerCenter">
                <Stack direction="row" spacing={2}>
                  <NavLink to="calculator" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="primary">
                      Calculadora
                    </Button>
                  </NavLink>

                  <Button variant="contained" color="primary">
                    Administrador
                  </Button>
                </Stack>
              </div>
            </div>
          </Container>
        </Grid>
        <Grid xs={6}>
          <Container
            className="p-0 d-flex justify-content-center align-items-center"
            style={{
              height: "70vh",
              borderRadius: "250px 0px 0px 250px",
              backgroundColor: "#d9d9d9",
              backgroundImage: "url(/img/landing.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "105vh",
              backgroundPosition: "left center",
            }}
          ></Container>
        </Grid>
      </Grid>
      <Container maxWidth="false" className="vh-30 overflow-hidden p-0">
        <Grid xs={6}>
          <Container
            className="p-0 d-flex justify-content-center align-items-center"
            style={{
              height: "30vh",
              backgroundColor: "#FF724A",
              backgroundImage: " url(/img/figuras.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "120vh",
            }}
          >
            <div style={{ height: "10vh", width: "50vh" }}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                className="semibold"
                color="secondary.light"
              >
                ¿Deseas saber más?
              </Typography>
              <div className="containerCenter">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" color="secondary">
                    Haz click aquí
                  </Button>
                </Stack>
              </div>
            </div>
          </Container>
        </Grid>
      </Container>
    </Container>
  );
};
export default Home;
