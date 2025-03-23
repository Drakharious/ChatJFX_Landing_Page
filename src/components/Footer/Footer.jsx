import React from "react";
import "./footer_styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">ChatJFX</div>
            <p className="footer-tagline">
              Asistente de IA de escritorio multimodal con JavaFX y Spring AI
            </p>
          </div>

          <div className="footer-links-container">
            <div className="footer-links-column">
              <h3 className="footer-title">Producto</h3>
              <ul className="footer-links">
                <li>
                  <a href="#features">Características</a>
                </li>
                <li>
                  <a href="#architecture">Arquitectura</a>
                </li>
                <li>
                  <a href="#requirements">Requisitos</a>
                </li>
                <li>
                  <a href="#installation">Instalación</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-title">Recursos</h3>
              <ul className="footer-links">
                <li>
                  <a href="#guide">Guía de Uso</a>
                </li>
                <li>
                  <a href="#technical">Detalles Técnicos</a>
                </li>
                <li>
                  <a href="#future">Trabajo Futuro</a>
                </li>
                <li>
                  <a href="#download">Descargar</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-title">Tecnologías</h3>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://openjfx.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JavaFX
                  </a>
                </li>
                <li>
                  <a
                    href="https://spring.io/projects/spring-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spring AI
                  </a>
                </li>
                <li>
                  <a
                    href="https://ollama.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ollama
                  </a>
                </li>
                <li>
                  <a
                    href="https://kordamp.org/ikonli/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ikonli
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} ChatJFX. Todos los derechos reservados.
          </p>

          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="GitHub">
              <span className="icon">&#xf09b;</span>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <span className="icon">&#xf099;</span>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <span className="icon">&#xf0e1;</span>
            </a>
            <a href="#" className="social-icon" aria-label="Discord">
              <span className="icon">&#xf392;</span>
            </a>
            <a href="#" className="social-icon" aria-label="Email">
              <span className="icon">&#xf0e0;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
