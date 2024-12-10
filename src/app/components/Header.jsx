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
            <a
              href="https://api.whatsapp.com/send?phone=619921937866&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20você."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
