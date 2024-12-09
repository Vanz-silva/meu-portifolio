import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => (
  <section id="projetos" className="pt-5 mt-5" data-aos="fade-down-right">
    <div className="container d-flex  justify-content-center pb-5">
      <div className="row d-flex">
        <h2> Projetos</h2>
      </div>
    </div>

    <div className="container d-flex justify-content-center flex-column portifolio-box">
      <div className="row pt-5">
        <div className="col-md-6 col-sm-12 d-flex texto justify-content-center">
          <div className="txt-magmeta ">
            <h1>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h1>
            <p>
              🌟 Desenvolvido com HTML5, CSS3 e JavaScript, este site
              empresarial foi criado para captar clientes e apresentar os
              produtos da empresa de forma clara e profissional. Com design
              responsivo, adapta-se a qualquer dispositivo, garantindo uma
              navegação fluida e acessível. Funcionalidades interativas e um
              layout alinhado à identidade visual reforçam a credibilidade e
              posicionam a Magmenta como referência no mercado!  🚀
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 box-projeto">
          <div className="justify-content-end d-flex box-mockup-img">
            <img src="/img/mockup-celu.svg" alt="Descrição da Imagem" />
          </div>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-7 col-sm-12 box-projeto">
          <img src="/img/mockup-pc3.svg" alt="Descrição da Imagem" />
        </div>
        <div className="col-md-5 col-sm-12 d-flex texto">
          <div className="txt-magmeta text-center">
            <h2>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h2>
            <p>
              🌟 Desenvolvido com HTML5, CSS3 e JavaScript, este site
              empresarial foi criado para captar clientes e apresentar os
              produtos da empresa de forma clara e profissional. Com design
              responsivo, adapta-se a qualquer dispositivo, garantindo uma
              navegação fluida e acessível. Funcionalidades interativas e um
              layout alinhado à identidade visual reforçam a credibilidade e
              posicionam a Magmenta como referência no mercado. Um projeto que
              une tecnologia e estratégia para resultados reais! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
