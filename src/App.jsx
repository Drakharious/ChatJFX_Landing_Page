// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ParticlesLayout from "./components/ParticlesLayout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importación de páginas
import Home from "./pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {/* Rutas con fondo de partículas */}
        <Route element={<ParticlesLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Rutas sin el fondo de partículas */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
