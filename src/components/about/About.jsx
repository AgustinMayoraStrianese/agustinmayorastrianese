import "./about.css";
import Me from "../../img/perfil1.jpg"
import Html from "../../img/html5.svg";
import Css from "../../img/css.svg";
import Js from "../../img/javascript.svg";
import React from "../../img/react.svg";
import Git from "../../img/git.svg";
import Node from "../../img/node.svg";

const About = () => {
  return (
    <div className="about-main">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt="Keybord"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Soy Agustin Mayora Strianese. Nací en Argentina. Diciembre 12, 1990.
          Vivo en La Plata, Buenos Aires.
        </p>
        <p className="a-desc">
          Tengo experiencia en el área del desarrollo web. Disfruto llevar a
          cabo la maquetación e interactividad de interfaces web así como la
          optimización, para el buen posicionamiento y el rendimiento de carga
          de sitios y aplicaciones web.
        </p>
        <div className="tecno-container">
          <div className="imagenes">
            <img src={Html} alt="html" />
            <img src={Css} alt="css" />
            <img src={Js} alt="js" />
            <img src={React} alt="react" />
            <img src={Node} alt="node" />
            <img src={Git} alt="git" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
