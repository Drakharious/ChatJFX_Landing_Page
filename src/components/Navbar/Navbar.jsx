import React, { useState, useEffect } from "react";
import "./navbar_styles.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
          ChatJFX
        </div>

        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span
            className={`navbar-icon ${mobileMenuOpen ? "open" : ""}`}
          ></span>
        </div>

        <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("about")}
            >
              Acerca de
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("features")}
            >
              Características
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("architecture")}
            >
              Arquitectura
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("installation")}
            >
              Instalación
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("guide")}
            >
              Guía de Uso
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("future")}
            >
              Futuro
            </button>
          </li>
          <li className="navbar-item">
            <a
              href="#download"
              className="navbar-cta"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("download");
              }}
            >
              Descargar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
