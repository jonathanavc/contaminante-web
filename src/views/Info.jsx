import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import backArrow from "../img/back.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import First from "../img/First.png"
import "../css/slider.css";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";


const Info = () => {
    return (
        <Container maxWidth="false" className="overflow-hidden p-0">
            <Container maxWidth="false" className="my-5 m-0 px-5 d-flex justify-content-between">
                <Link to="/">
                    <img href="/" src={backArrow} className="img-fluid img-arrow" style={{ width: "40px", height: "40px" }}></img>
                </Link>
                <Typography className="fw-bold" variant="h4" color="primary" gutterBottom>
                    Los contaminantes en los alimentos
                </Typography>
                <Link to="/" className="invisible">
                    <img href="/" src={backArrow} className="img-fluid img-arrow" style={{ width: "40px", height: "40px" }}></img>
                </Link>
            </Container>
            <div className="mx-3" style={{ backgroundColor: "#F0F3F4" }}>
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="true" style={{ height: "82vh" }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-100">
                        <div className="carousel-item active h-100">
                            <Grid container className="h-100" spacing={2} style={{ padding: 100 }}>
                                <Grid item xs={7} className="d-flex flex-column justify-content-around">
                                    <div>
                                        <Typography className="fw-bold" variant="h5" gutterBottom>
                                            ¡No todo lo que come hace bien!
                                        </Typography>
                                        <Typography className="" variant="body1" gutterBottom>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography className="fw-bold d-flex gap-2" variant="h5" gutterBottom>
                                            <Typography color="primary" variant="h5" gutterBottom>¡Tranquilizate!</Typography> No todo es tan malo
                                        </Typography>
                                        <Typography className="" variant="body1" gutterBottom>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={5} className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={First}
                                        loading="lazy"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </Grid>
                            </Grid>

                        </div>
                        <div className="carousel-item h-100">
                            <Grid container className="h-100" spacing={2} style={{ padding: 100 }}>
                                <Grid item xs={7} className="d-flex flex-column justify-content-around">
                                    <div>
                                        <Typography className="fw-bold" variant="h5" gutterBottom>
                                            ¿Que contaminantes existen?
                                        </Typography>
                                        <Typography className="" variant="body1" gutterBottom>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography className="fw-bold d-flex gap-2" variant="h5" gutterBottom>
                                            ¿En que alimentos se pueden encontrar?
                                        </Typography>
                                        <Typography className="" variant="body1" gutterBottom>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Typography>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <img
                                            src={First}
                                            loading="lazy"
                                            style={{ width: 200, height: 200 }}
                                        />
                                        <img
                                            src={First}
                                            loading="lazy"
                                            style={{ width: 200, height: 200 }}
                                        />
                                        <img
                                            src={First}
                                            loading="lazy"
                                            style={{ width: 200, height: 200 }}
                                        />
                                        <img
                                            src={First}
                                            loading="lazy"
                                            style={{ width: 200, height: 200 }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={5} className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={First}
                                        loading="lazy"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="carousel-item h-100">
                            <Grid container className="h-100" spacing={2} style={{ padding: 100 }}>
                                <Grid item xs={7} className="d-flex flex-column gap-3">
                                    <div>
                                        <Typography className="fw-bold" variant="h5" gutterBottom>
                                            ¿Que deberia comer?
                                        </Typography>
                                        <Typography className="" variant="body1" gutterBottom>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Typography>
                                    </div>
                                    <NavLink to="/" style={{ textDecoration: "none" }}>
                                        <Button variant="text" color="primary" className="px-0">
                                            VOLVER AL MENÚ PRINCIPAL
                                        </Button>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={5} className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={First}
                                        loading="lazy"
                                        style={{ width: 300, height: 200 }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Container>

    );
}

export default Info