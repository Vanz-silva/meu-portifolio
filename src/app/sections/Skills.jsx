"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Importação correta para v11+
import SkillCard from "../components/SkillCard";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos do Bootstrap

const Skills = () => {
  // Array com os caminhos e descrições das logos
  const skillsLogos = [
    { src: "/img/logoHtml.png", alt: "HTML" },
    { src: "/img/logoCss.png", alt: "CSS" },
    { src: "/img/logoJs.png", alt: "JavaScript" },
    { src: "/img/logoReactJs.png", alt: "React" },
    { src: "/img/logoNext.png", alt: "Next.js" },
    { src: "/img/logoMuii.png", alt: "Bootstrap" },
    { src: "/img/logoBoot.png", alt: "Bootstrap" },
    { src: "/img/logoPython.png", alt: "Python" },
    { src: "/img/logoGithub.png", alt: "Git" },
    { src: "/img/logoFigma.png", alt: "Git" },
    { src: "/img/logoSql.png", alt: "Git" },
    
  ];

  return (
    <section id="habilidades">
      <div className="container text-center logos-tec">
        <div className="row box-texto-logos text-center">
          <h2>Skills</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]} // Registro explícito dos módulos
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="row box-texto-logos"
        >
          {/* Renderizando cada logo do array */}
          {skillsLogos.map((logo, index) => (
            <SwiperSlide key={index} className="col-3 logo-container">
              <SkillCard src={logo.src} alt={logo.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
