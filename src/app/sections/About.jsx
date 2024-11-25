import Button from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => (
  <section id="sobremim">
    <div className="container text-center" id="sessao-sobre-mim">
      <div className="colunm align-items-center">
        <div className="col">
          <div id="sobre-mim">
            <h1>Olá Eu sou Dev Front-End</h1>
            <div>
              <h6>Sou um desenvolvedor web freelancer...</h6>
              <h6>Tenho um bom conhecimento de design...</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <Button text="Vamos Conversar" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
