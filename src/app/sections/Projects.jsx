import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => (
  <section id="projetos" className="pt-5 mt-5" data-aos="fade-down-right">
    <div className="container d-flex  justify-content-center pb-5">
      <div className="row d-flex">
        <h2> Projetos</h2>
      </div>
    </div>

    <div className="container d-flex justify-content-center portifolio-box">
      <div className="row pt-5">
        <div className="col-6 d-flex texto">
          <div className="txt-magmeta">
            <h2>Título do Texto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              magna...
            </p>
          </div>
        </div>
        <div className="col-6 box-projeto">
          <img
            src="/img/siteMagmeta.png"
            alt="Descrição da Imagem"
            width="50%"
          />
        </div>
        <div className="col-6 box-projeto">
          <img
            src="/img/siteMagmeta.png"
            alt="Descrição da Imagem"
            width="50%"
          />
        </div>
        <div className="col-6 d-flex texto">
          <div className="txt-magmeta">
            <h2>Título do Texto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              magna...
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
