const SkillCard = ({ src, alt }) => (
  <div className="text-center">
    <img
      src={src}
      alt={alt}
      className="box-logo"
      style={{ width: "58px", transition: "transform 0.3s" }}
      data-aos="fade-up" // Animação de entrada
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")} // Zoom ao passar o mouse
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Volta ao tamanho original
    />
  </div>
);

export default SkillCard;
