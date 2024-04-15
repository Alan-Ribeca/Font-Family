import { Flecha } from "./Flecha";
import "./gridTres.scss";

export const GridTres = () => {
  return (
    <div className="gridTres">
      <h1 className="titleGridTres">Titulos</h1>

      <h1 className="titulos uno">
        Hola mundo!! <Flecha />
        <strong className="strong">h1</strong>
      </h1>
      <h2 className="titulos dos">
        Hola mundo!! <Flecha />
        <strong className="strong">h2</strong>
      </h2>
      <h3 className="titulos tres">
        Hola mundo!! <Flecha />
        <strong className="strong">h3</strong>
      </h3>
      <h4 className="titulos cuatro">
        Hola mundo!! <Flecha />
        <strong className="strong">h4</strong>
      </h4>
      <h5 className="titulos cinco">
        Hola mundo!! <Flecha />
        <strong className="strong">h5</strong>
      </h5>
      <h6 className="titulos seis">
        Hola mundo!! <Flecha />
        <strong className="strong">h6</strong>
      </h6>
    </div>
  );
};
