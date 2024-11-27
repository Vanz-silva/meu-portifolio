const Button = () => {
  return (
    <div className="justify-content-center gap-3 d-flex pt-3">
      <a
        href="/cv-rhuanbello" // Caminho relativo ao arquivo dentro da pasta public
        className="btn-colorido"
        download // Permite que o navegador inicie o download ao clicar
      >
        <span className="txt-botao-conversar"></span>
      </a>
      <a
        href={`https://wa.me/5531999999999?text=${encodeURIComponent(
          "Olá, gostaria de saber mais sobre você!"
        )}`}
        className="btn-colorido"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="txt-botao-conversar"></span>
      </a>
    </div>
  );
};

export default Button;
