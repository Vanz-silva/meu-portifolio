"use client"; // Diretiva para habilitar o uso de client-side

import SkillCard from "../components/SkillCard"; // Mantido o import original
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS do Bootstrap para o carrossel

const Skills = () => {
  return (
    <section id="habilidades">
      <div className="container text-center logos-tec">
        <div className="row box-texto-logos text-center">
          <h2>Skills</h2>
        </div>

        {/* Carrossel do Bootstrap */}
        <div
          id="carouselSkills"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Primeira Slide */}
            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
              </div>
            </div>

            {/* Segunda Slide */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
              </div>
            </div>

            {/* Terceira Slide */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
                <div className="col-3 logo-container">
                  <SkillCard src="/img/logoHtml.png" alt="HTML" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
