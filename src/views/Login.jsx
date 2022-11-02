//import "../styles/Home.css";
import React from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Input,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material/";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink, Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="false" className="overflow-hidden p-0">
      <Grid container spacing={0} className="vh-100 d-flex align-items-center">
        <Grid xs={7}>
          <Container
            className="p-0 d-flex justify-content-center align-items-center"
            style={{
              height: "100vh",
              backgroundColor: "#595959",
              backgroundImage: "url(/img/bacterias1.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 30%",
              backgroundSize: "50vh",
            }}
          >
            <Container className="p-100 d-flex justify-content-center align-items-end h-50">
              <div className="d-flex flex-column  align-items-end">
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  className="semibold"
                  color="secondary.light"
                >
                  Funcionalidad creada para especialistas
                </Typography>
              </div>
            </Container>
          </Container>
        </Grid>
        <Grid xs={5}>
          <Container
            className="p-0 d-flex justify-content-center align-items-center"
            style={{
              height: "20vh",
              backgroundImage: "url(/img/escudoof.gif)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "10vh",
            }}
          ></Container>
          <Container
            maxWidth="xs"
            style={{
              marginStart: "100px",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom className="fw-semibold">
              Acceso
            </Typography>
            <Stack spacing={3}>
              <FormControl variant="standard">
                <InputLabel htmlFor="outlined-with-icon-adornment">Email</InputLabel>
                <Input
                  id="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                <Input
                  id="password"
                  label="Password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className="d-flex flex-column  align-items-end">
                <NavLink href="#" underline="none" color={"primary.dark"}>
                  {"¿Ha olvidado su contraseña?"}
                </NavLink>
              </div>
            </Stack>
            <p></p>
            <Stack spacing={3}>
              <div className="d-flex flex-column  align-items-center">
                <Link to="/reportBuilder">
                  <Button variant="contained" color="primary">
                    Iniciar sesión
                  </Button>
                </Link>
              </div>
              <div className="d-flex flex-column  align-items-center">
                <NavLink to="" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" color="primary" size="small">
                    Regístrarme
                  </Button>
                </NavLink>
              </div>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
