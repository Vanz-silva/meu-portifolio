const SkillCard = ({ src, alt }) => (
    <div className="col">
      <img src={src} alt={alt} className="box-logo" data-aos="fade-up" width="46px" />
    </div>
  );
  
  export default SkillCard;