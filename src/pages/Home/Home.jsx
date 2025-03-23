import React, { useEffect, useRef } from "react";
import "./home_styles.css";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animated-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleDownload = () => {
    alert("Redirigiendo a la página de descarga...");
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="hero" className="hero-section animated-section">
        <div className="hero-content">
          <h1>ChatJFX</h1>
          <p className="subtitle">
            Asistente de IA de escritorio multimodal con JavaFX y Spring AI
          </p>
          <div className="badges">
            <span className="badge java-badge">Java 23+</span>
            <span className="badge spring-badge">Spring AI 1.0.0 M6</span>
            <span className="badge javafx-badge">JavaFX 23.0.2</span>
          </div>
          <button className="cta-button" onClick={handleDownload}>
            Descargar ChatJFX
          </button>
        </div>
        <div className="hero-image">
          <div className="app-screenshot">
            <img
              src="Images\platform_hero2.png"
              alt="Imagen de la plataforma ChatJFX"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section id="about" className="description-section animated-section">
        <h2>Descripción General</h2>
        <p>
          ChatJFX es un asistente de IA de escritorio que combina una interfaz
          moderna con JavaFX, procesamiento de lenguaje natural mediante Spring
          AI, entradas multimodales (texto + imágenes) y una arquitectura
          modular basada en Spring Boot.
        </p>
        <p>
          El sistema permite interactuar con modelos de lenguaje grandes (LLMs)
          en modo local (offline), ofreciendo flexibilidad en diferentes
          escenarios de implementación.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section animated-section">
        <h2>Características Principales</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Chat de Texto</h3>
            <ul>
              <li>Interacción conversacional bidireccional</li>
              <li>Formateo avanzado de mensajes</li>
              <li>Historial persistente de conversación</li>
              <li>Soporte para múltiples modelos</li>
              <li>Streaming en tiempo real</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🖼️</div>
            <h3>Chat Multimodal</h3>
            <ul>
              <li>Carga de imágenes desde portapapeles</li>
              <li>Previsualización de imágenes adjuntas</li>
              <li>Procesamiento conjunto texto-imagen</li>
              <li>Gestión de adjuntos</li>
              <li>Conversión automática de formatos</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Interfaz Moderna</h3>
            <ul>
              <li>Sidebar colapsable</li>
              <li>Scroll automático inteligente</li>
              <li>Indicador de progreso</li>
              <li>Sistema de notificaciones</li>
              <li>Tema oscuro neón personalizable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section
        id="architecture"
        className="architecture-section animated-section"
      >
        <h2>Arquitectura del Sistema</h2>

        <div className="architecture-diagram">
          <div className="diagram-box frontend">
            <h3>JavaFX UI</h3>
            <ul>
              <li>Controladores MVC</li>
              <li>Componentes visuales</li>
              <li>Gestión de estados</li>
            </ul>
          </div>
          <div className="diagram-arrow">⟷</div>
          <div className="diagram-box backend">
            <h3>Spring AI Backend</h3>
            <ul>
              <li>Conexión LLM</li>
              <li>Procesamiento multimodal</li>
              <li>Configuración</li>
            </ul>
          </div>
        </div>

        <h3>Flujo de Datos</h3>
        <ol className="data-flow">
          <li>Entrada del usuario (texto/imagen)</li>
          <li>Preprocesamiento en cliente</li>
          <li>Envío a Spring AI</li>
          <li>Procesamiento en modelo LLM</li>
          <li>Formateo de respuesta</li>
          <li>Renderizado en interfaz</li>
        </ol>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section animated-section">
        <h2>Requisitos del Sistema</h2>
        <ul className="requirements-list">
          <li>
            <strong>Java JDK 23</strong> (con módulos JavaFX)
          </li>
          <li>
            <strong>Ollama</strong> (para modelos)
          </li>
          <li>
            <strong>8GB RAM</strong> mínimos (16GB recomendado)
          </li>
          <li>
            <strong>llama3.2-vision:11b</strong> para análisis multimodal
          </li>
        </ul>
      </section>

      {/* Installation Section */}
      <section
        id="installation"
        className="installation-section animated-section"
      >
        <h2>Instalación y Configuración</h2>

        <div className="installation-steps">
          <div className="step">
            <h3>1. Instalación de Ollama</h3>
            <ol>
              <li>
                Descargar desde{" "}
                <a href="https://ollama.com/download">ollama.com/download</a>
              </li>
              <li>Ejecutar el instalador</li>
              <li>
                Verificar con: <code>ollama --version</code>
              </li>
            </ol>
          </div>

          <div className="step">
            <h3>2. Descarga del Modelo</h3>
            <pre>
              <code>
                ollama pull llama3.2-vision:11b ollama run llama3.2-vision:11b
              </code>
            </pre>
          </div>

          <div className="step">
            <h3>3. Configuración</h3>
            <pre>
              <code>spring.ai.ollama.chat.model=llama3.2-vision:11b</code>
            </pre>
          </div>

          <div className="step">
            <h3>4. Compilación</h3>
            <pre>
              <code>
                ./gradlew clean build java -jar
                build/libs/chatjfx-0.0.1-SNAPSHOT.jar
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* User Guide Section */}
      <section id="guide" className="guide-section animated-section">
        <h2>Guía de Uso</h2>

        <div className="guides">
          <div className="guide-card">
            <h3>Chat Básico</h3>
            <ol>
              <li>Escriba su mensaje en el área de texto</li>
              <li>
                Use <code>Enter</code> para enviar
              </li>
              <li>
                Use <code>Shift+Enter</code> para nuevas líneas
              </li>
              <li>Las respuestas se mostrarán en tiempo real</li>
            </ol>
          </div>

          <div className="guide-card">
            <h3>Chat con Imágenes</h3>
            <ol>
              <li>
                Copie una imagen (<code>Ctrl+C</code>)
              </li>
              <li>
                Péguela en la app (<code>Ctrl+V</code>)
              </li>
              <li>Ajuste el tamaño si es necesario</li>
              <li>Escriba su prompt relacionado</li>
              <li>Envíe la consulta combinada</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="technical-section animated-section">
        <h2>Detalles Técnicos</h2>

        <h3>Dependencias Clave</h3>
        <div className="tech-table">
          <div className="table-row header">
            <div>Dependencia</div>
            <div>Versión</div>
            <div>Propósito</div>
          </div>
          <div className="table-row">
            <div>Spring AI Ollama</div>
            <div>1.0.0-M6</div>
            <div>Integración con modelos locales</div>
          </div>
          <div className="table-row">
            <div>JavaFX</div>
            <div>23.0.2</div>
            <div>Interfaz gráfica moderna</div>
          </div>
          <div className="table-row">
            <div>Spring Boot</div>
            <div>3.4.3</div>
            <div>Inyección de dependencias</div>
          </div>
        </div>

        <h3>Optimizaciones</h3>
        <ul className="optimizations">
          <li>
            <strong>Patrón MVC</strong> para separación de responsabilidades
          </li>
          <li>
            <strong>Hilos separados</strong> para UI y procesamiento
          </li>
          <li>
            <strong>Cache de imágenes</strong> en memoria
          </li>
          <li>
            <strong>Streaming eficiente</strong> de respuestas
          </li>
        </ul>
      </section>

      {/* Future Work Section */}
      <section id="future" className="future-section animated-section">
        <h2>Trabajo Futuro</h2>
        <div className="future-items">
          <div className="todo-item">
            ○ Integración con APIs comerciales (GPT-4, Gemini)
          </div>
          <div className="todo-item">○ Soporte para documentos PDF/Word</div>
          <div className="todo-item">○ Sistema de plugins/extensions</div>
          <div className="todo-item">○ Exportación a formatos estándar</div>
          <div className="todo-item">○ Modo portátil (sin instalación)</div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="download" className="cta-section animated-section">
        <div className="cta-container">
          <h2 className="cta-title">¡Comienza a usar ChatJFX hoy!</h2>
          <a
            href="https://github.com/Drakharious/ChatJFX"
            className="cta-button large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar ChatJFX
          </a>
          <p className="disclaimer">
            Proyecto en desarrollo activo. Versión beta disponible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
