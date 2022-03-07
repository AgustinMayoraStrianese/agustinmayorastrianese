import Product from "../product/Product";
import "./ProjectList.css";
import { products } from "../../data.js";

const ProyectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Menos pero mejor</h1>
        <p className="pl-desc">
          Puedes encontrar algunos de mis proyectos de estudio en GitHub, Click
          en las imagenes..
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProyectList;
