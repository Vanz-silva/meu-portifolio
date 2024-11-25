const Button = ({ text, onClick }) => (
    <button className="btn-colorido" onClick={onClick}>
      <h6 className="txt-botao-conversar">{text}</h6>
    </button>
  );
  
  export default Button;