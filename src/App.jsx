//import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
         * Esta pantalla se muestra siempre que el usuario visita una ruta
         * inválida (si no toma ninguna de las de arriba, muestra esta)
         */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>Página no encontrada :c</h1>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
