import * as Icon from "react-bootstrap-icons";

const Footer = () => (
  <footer>
    <div className="container-fluid pt-5 container-footer justify-content-center d-flex align-items-center">
      <div className="row ">
        <div className="col-md-12 col-sm-12 pb-5">
          <ul>
            <li>
              <a href="#">
                <Icon.TelephoneFill size={24} className="ml-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.Linkedin size={24} className="ml-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.Github size={25} className="ml-5" />
              </a>
            </li>
          </ul>

          <p className="pt-4">
            © Todos os direitos reservados 2024<br></br> Vanessa Silva
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
