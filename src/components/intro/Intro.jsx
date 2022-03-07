import "./intro.css";
import Intr from "../../img/intro.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola! Bienvenido</h2>
          <h1 className="i-name">Agustin Mayora </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Programador Web</div>
              <div className="i-title-item">Minimalista</div>
              <div className="i-title-item">Resiliente</div>
              <div className="i-title-item">Autodidacta</div>
            </div>
          </div>
          <p className="i-desc">
            Diseño y desarrollo servicios para clientes de todos los tamaños,
            especializándome en la creación de sitios web, servicios web y
            tiendas online.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Intr} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
