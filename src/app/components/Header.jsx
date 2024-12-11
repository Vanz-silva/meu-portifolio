"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  useEffect(() => {
    // Importar JS do Bootstrap no cliente
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        {/* Botão de menu hamburguer */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu para telas pequenas */}
        <div className="offcanvas offcanvas-start d-lg-none" id="offcanvasMenu">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#about" className="nav-link text-white">
                  Sobre Mim
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link text-white">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link text-white">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://api.whatsapp.com/send?phone=61991937866&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-white"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu fixo para telas grandes */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" className="nav-link text-white">
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-white">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-white">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://api.whatsapp.com/send?phone=619921937866&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA."
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-white"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
