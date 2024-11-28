import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about" className="menu-item">
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
