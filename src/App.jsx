// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticlesLayout from "./components/ParticlesLayout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importación de páginas
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Rutas con fondo de partículas */}
        <Route element={<ParticlesLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Rutas sin el fondo de partículas */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
