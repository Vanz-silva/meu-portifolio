const Button = () => {
  return (
    <div className="justify-content-center gap-1 d-flex pt-3">
      <a
        href="/cv-rhuanbello"
        className="btn-colorido bt-2"
        download
        data-content="Baixar CV"
      >
        <span className="txt-botao-conversar"></span>
      </a>
      <a
        href={`https://wa.me/5531999999999?text=${encodeURIComponent(
          "Olá, gostaria de saber mais sobre você!"
        )}`}
        className="btn-colorido bt-1"
        target="_blank"
        rel="noopener noreferrer"
        data-content="Vamos conversar"
      >
        <span className="txt-botao-conversar"></span>
      </a>
    </div>
  );
};

export default Button;
