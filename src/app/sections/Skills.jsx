import SkillCard from "../components/SkillCard";
import "bootstrap/dist/css/bootstrap.min.css";
const Skills = () => (
  <section id="habilidades">
    <div className="container text-center logos-tec">
      <div className="row box-texto-logos text-center">
        <h2>Skills</h2>
      </div>

      <div
        className="row align-items-center  d-flex justify-content-center"
        id="linha-logos"
      >
        <SkillCard src="/img/logoHtml.png" alt="CSS" />
        <SkillCard src="/img/logoCss.png" alt="CSS" />
        <SkillCard src="/img/logoJs.png" alt="Javascript" />
        <SkillCard src="/img/logoReact.png" alt="React" />
        <SkillCard src="/img/logoBoot.png" alt="Bootstrap" />
        <SkillCard src="/img/logoJs.png" alt="Javascript" />
        <SkillCard src="/img/logoGit.png" alt="HTML" />
      </div>
    </div>
  </section>
);

export default Skills;
