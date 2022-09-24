import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import ImageProject1 from "./imgs/IMGProject1.png";
import ImageProject2 from "./imgs/IMGProject2.png";
import ImageProject3 from "./imgs/IMGProject3.png";
import ImageProject4 from "./imgs/IMGProject4.png";

function Projects() {
  return (
    <div className="projects-top container">
      <div className="projects-content">
        <h1>Mis proyectos</h1>
        <a
          href="https://github.com/ichirodev/zfps"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image">
              <img src={ImageProject3} style={{ width: "100%" }} />
            </div>
            <div className="project-text">
              Zombies FPS
              <div className="project-text-box">
                Esqueleto de videojuego programado en Unity, funcionalidades y
                jugabilidad programada.
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ichirodev/mini-traductor"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image">
              <img src={ImageProject4} style={{ width: "100%" }} />
            </div>
            <div className="project-text">
              Mini Compilador de Ensamblador
              <div className="project-text-box">
                Compilador de ensamblador hecho en Python, capaz de simular la
                compilación y ejecución de código ensamblador para Linux x86-64
                así como la verificación de sintaxis de Intel.
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ichirodev/portfolio"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image">
              <img src={ImageProject2} style={{ width: "100%" }} />
            </div>
            <div className="project-text">
              Web Portfolio
              <div className="project-text-box">
                Portfolio personal personado en forma de sitio web hecho con
                React y hosteado en Firebase
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ichirodev/basic-cpu-vhdl"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image">
              <img src={ImageProject1} style={{ width: "100%" }} />
            </div>
            <div className="project-text">
              CPU Basico en VHDL
              <div className="project-text-box">
                Procesador basico programado en Intel Quartus para FPGAs
                utilizando un lenguaje de descripción de hardware, Verilog.
              </div>
            </div>
          </div>
        </a>

        <div className="my-github">
          <a href="https://github.com/ichirodev" className="url">
            {"Mira mis demás repositorios y código en GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
