import React, { useState, useEffect } from "react";
import { getFoods } from "../api/APIUtils.js";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import axios from "axios";
import warningImg from "../img/warning.png";
import greatImg from "../img/great.png";
import CircularProgress from '@mui/material/CircularProgress';

// eslint-disable-next-line react/prop-types
const Result = ({ textResult, subtitleResult, imgSource }) => {
  return (
    <Container maxWidth="false" className="p-0 d-flex flex-column align-items-center gap-1">
      <Typography className="fw-bold" variant="h3" gutterBottom color="white.main">
        {textResult}
      </Typography>
      <img src={imgSource} />
      <Typography className="fw-light text-center" variant="subtitle1" gutterBottom color="white.main" width="60%">
        {subtitleResult}
      </Typography>
    </Container>
  );
};

const calculator = () => {
  const [complete, setComplete] = useState(false);
  const [foods, setFoods] = useState([
    { id: 1, label: "Pan1" },
    { id: 2, label: "Pan2" },
    { id: 3, label: "Pan3" },
    { id: 4, label: "Pan4" },
    { id: 5, label: "Pan5" },
    { id: 6, label: "Pan6" },
    { id: 7, label: "Pan7" }
  ]);
  const [componentResult, setComponentResult] = useState(false);
  const [valueResult, setValueResult] = useState("");

  useEffect(() => {
    if (!complete) {
      setComponentResult(
        <Typography className="fw-bold" variant="subtitle2" gutterBottom color="secondary.dark">
          Completa los campos requeridos
        </Typography>
      );
    } else {
      valueResult === "Contaminado"
        ? setComponentResult(
          <Result
            textResult="¡CUIDADO!"
            subtitleResult="La concentración de contaminante encontrada en tu alimento es peligrosa"
            imgSource={warningImg}
          ></Result>
        )
        : setComponentResult(
          <Result
            textResult="¡GENIAL!"
            subtitleResult="La concentración de contaminante encontrada en tu alimento no es peligrosa"
            imgSource={greatImg}
          ></Result>
        );
    }
  }, [complete]);

  const calculateContamination = function () {
    console.log("CALCULANDO...");

    setComponentResult(<CircularProgress />)
    setTimeout(() => {
      setComplete(true);
      setValueResult("Contaminado");
    }, 2000)

    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response.data.results);
    //     return response.data.results;
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  };

  return (
    <Container maxWidth="false" className="vh-100 overflow-hidden p-0">
      <Grid container spacing={2} className="vh-100 d-flex align-items-center">
        <Grid xs={6}>
          <Container maxWidth="xs" style={{ marginStart: "100px" }}>
            <Typography variant="h4" align="center" gutterBottom className="fw-semibold">
              Calculadora
            </Typography>
            <Stack spacing={2}>
              <Container className="d-flex flex-column gap-3">
                <Container className="d-flex align-items-center gap-2 p-0">
                  <div
                    className="p-2 rounded-circle"
                    style={{ width: 35, height: 35, backgroundColor: "#FF724A" }}
                  >
                    <Typography
                      className="text-white"
                      align="center"
                      variant="subtitle2"
                      gutterBottom
                    >
                      1
                    </Typography>
                  </div>

                  <Typography className="fw-bold" variant="subtitle2" gutterBottom>
                    Peso
                  </Typography>
                </Container>
                <TextField
                  id="outlined-start-adornment"
                  fullWidth
                  type="number"
                  variant="filled"
                  hiddenLabel
                  InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>
                  }}
                  helperText="Some important text"
                />
              </Container>
              <Container className="d-flex flex-column gap-3">
                <Container className="d-flex align-items-center gap-2 p-0">
                  <div
                    className="p-2 rounded-circle"
                    style={{ width: 35, height: 35, backgroundColor: "#FF724A" }}
                  >
                    <Typography
                      className="text-white"
                      align="center"
                      variant="subtitle2"
                      gutterBottom
                    >
                      2
                    </Typography>
                  </div>

                  <Typography className="fw-bold" variant="subtitle2" gutterBottom>
                    Alimento
                  </Typography>
                </Container>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={foods}
                  fullWidth
                  renderInput={params => (
                    <TextField
                      fullWidth
                      {...params}
                      label="Alimentos"
                      variant="filled"
                      helperText="Some important text"
                    />
                  )}
                />
              </Container>
              <Container className="d-flex flex-column gap-3">
                <Container className="d-flex align-items-center gap-2 p-0">
                  <div
                    className="p-2 rounded-circle"
                    style={{ width: 35, height: 35, backgroundColor: "#FF724A" }}
                  >
                    <Typography
                      className="text-white"
                      align="center"
                      variant="subtitle2"
                      gutterBottom
                    >
                      3
                    </Typography>
                  </div>

                  <Typography className="fw-bold" variant="subtitle2" gutterBottom>
                    Cantidad consumida
                  </Typography>
                </Container>
                <TextField
                  id="outlined-start-adornment"
                  fullWidth
                  type="number"
                  variant="filled"
                  hiddenLabel
                  InputProps={{
                    startAdornment: <InputAdornment position="start">g/día</InputAdornment>
                  }}
                  helperText="Some important text"
                />
              </Container>
              <Button
                variant="outlined"
                className="w-25 mx-auto"
                color="primary"
                onClick={() => calculateContamination()}
              >
                Calcular
              </Button>
            </Stack>
          </Container>
        </Grid>
        <Grid xs={6}>
          <Container
            className="p-0 d-flex justify-content-center align-items-center"
            style={{
              height: "70vh",
              borderRadius: "250px 0px 0px 250px",
              backgroundColor: `${valueResult === ""
                ? "#d9d9d9"
                : valueResult === "Contaminado"
                  ? "#FF7C7C"
                  : "#82E0AA"
                }`
            }}
          >
            {componentResult}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default calculator;
