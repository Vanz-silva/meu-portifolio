import Button from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => (
  <section id="about">
    <div className="container-fluid text-center" id="sessao-sobre-mim">
      <div className="row mb-md-5  mt-5 align-items-center">
        {/* Primeira coluna */}
        <div className="col-md-7 linha-cab">
          <div id="sobre-mim">
            <h1>Olá, Eu sou a Vanessa Silva </h1>
            <div className="p-1">
              <h5>Desenvolvedora Front-End</h5>
            </div>
          </div>
          <Button text="Vamos Conversar" />
        </div>
        {/* Segunda coluna */}
        <div className="col-md-5 justify-content-center d-flex box-perfil">
          <div className="circle">
            <img
              src="/img/animeVanz.png"
              width="60%"
              alt="Descrição da imagem"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row pt-md-5 pb-md-5 mt-md-5 mb-md-5  linha-sobre">
        <div className="box-sobre">
          <div className="text-sobre pt-md-5 mt-md-5  mt-sm-3 gap-3 d-flex justify-content-center flex-column">
            <h1>Sobre mim</h1>
            <h5>
              Está buscando uma desenvolvedora front-end que transforme suas
              ideias em experiências digitais incríveis? Eu sou a pessoa certa!
              Com expertise em HTML, CSS, JavaScript, React, Next.js, Python,
              Material iu e Bootstrap crio interfaces web que combinam design
              atraente e funcionalidade. Sempre em busca de inovação e desafios,
              pensadas para proporcionar a melhor experiência para o usuário.
              Vamos construir algo juntos?
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
