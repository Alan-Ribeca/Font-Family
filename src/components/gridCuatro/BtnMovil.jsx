import { counterContext } from "../../context/counterContext";
import { useContext } from "react";

export const BtnMovil = () => {
  const { selectedFont, handleClick } = useContext(counterContext);

  return (
    <>
      <button className="aleatorio" onClick={handleClick}>
        {" "}
        <span className="nombreDeLaFuente">
          {selectedFont ? selectedFont : "ABeeZee"}
        </span>{" "}
        <span className="textoAleatorio">Aleatorio</span>
      </button>
    </>
  );
};
