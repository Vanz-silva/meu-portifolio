import SkillCard from "../components/SkillCard";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Skills = () => (
  <section id="habilidades">
    <div className="container text-center logos-tec">
      <div className="row box-texto-logos text-center">
        <h2>Skills</h2>
      </div>
      <div className="row align-items-center" id="linha-logos">
        <SkillCard src="/img/logoHtml.png" alt="HTML" />
        <SkillCard src="/img/iconCss.svg" alt="CSS" />
        <SkillCard src="/img/iconJs.svg" alt="JavaScript" />
        <SkillCard src="/img/iconBoot.svg" alt="Bootstrap" />
      </div>
    </div>
  </section>
);

export default Skills;
