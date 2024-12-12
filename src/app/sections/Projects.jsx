"use client";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => (
  <section id="projects" className="pt-5 mt-5" data-aos="fade-down-right">
    <div className="container d-flex  justify-content-center pb-5">
      <div className="row d-flex">
        <h3> Projetos</h3>
      </div>
    </div>

    <div
      className="container d-flex d-none d-md-block justify-content-center flex-column portifolio-box"
      id="portifolio-desktop"
    >
      <div className="row pt-md-5 mb-md-5 pb-md-5 ">
        <div className="col-md-6 col-sm-12 d-flex texto justify-content-center">
          <div className="txt-magmeta ">
            <h1>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h1>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado!
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 box-projeto">
          <div className="justify-content-end d-flex box-mockup-img">
            <img src="/img/mockup-celu.svg" alt="Descrição da Imagem" />
          </div>
        </div>
      </div>
      <div className="row pt-md-5 mt-md-5 pb-md-5 mb-dm-5">
        <div className="col-md-7 col-sm-12 box-projeto">
          <img src="/img/mockup-pc3.svg" alt="Descrição da Imagem" />
        </div>
        <div className="col-md-5 col-sm-12 d-flex texto">
          <div className="txt-magmeta">
            <h1>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h1>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado. Um projeto que une tecnologia e
              estratégia para resultados reais!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      className="container d-flex justify-content-center flex-column d-md-none portifolio-box"
      id="portifolio-mobile"
    >
      <div className="row  mb-5 pb-5 ">
        <div className="col-md-6 col-sm-12 d-flex texto justify-content-center">
          <div className="txt-magmeta  text-center ">
            <h2>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h2>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado!
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 box-projeto">
          <div className="justify-content-end d-flex box-mockup-img">
            <img src="/img/mockup-cel-mobile.svg" alt="Descrição da Imagem" />
          </div>
        </div>
      </div>
      <div className="row pt-5  pb-5 mb-dm-5">
        <div className="col-md-5 col-sm-12 d-flex texto">
          <div className="txt-magmeta text-center">
            <h2>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h2>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado. Um projeto que une tecnologia e
              estratégia para resultados reais!
            </p>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 box-projeto">
          <img src="/img/mockup-pc-mobile.svg" alt="Descrição da Imagem" />
        </div>
      </div>
    </div>


    
    <div className="container-fluid pt-5 pb-5 mb-5 mt-5">
      <div className="row d-flex justify-content-center flex-colunm align-items-center">
        <div className="col-md-6 justify-content-center col-sm-12 d-flex">
          <div className="circle circle2">
            <img
              src="/img/cyberVanz2.png"
              width="60%"
              alt="Descrição da imagem"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 col-xs-12 pt-5 box-vamos">
          <h1>
            Conheça mais sobre meu trabalho entre em contato! Vamos conversar?!
          </h1>
          <div className="d-flex box-btn-colorido-2 mt-3">
            <a
              href={`https://wa.me/5561991937866?text=${encodeURIComponent(
                "Olá, gostaria de saber mais sobre você!"
              )}`}
              className="btn-colorido btn-colorido-2 bt-1"
              target="_blank"
              rel="noopener noreferrer"
              data-content="Vamos conversar"
            >
              <span className="txt-botao-conversar"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
