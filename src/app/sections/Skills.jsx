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
            1024: { slidesPerView: 5
             },
          }}
          className="row box-texto-logos" 
        >
          {/* Adicionando slides */}
          {[...Array(12)].map((_, index) => (
            <SwiperSlide key={index} className="col-3 logo-container">
              <SkillCard src={`/img/logoHtml.png`} alt={`Skill ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
