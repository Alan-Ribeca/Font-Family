import { counterContext } from "../../context/counterContext";
import { useContext } from "react";

export const BtnMovil = () => {
  const { selectedFont } = useContext(counterContext);

  return (
    <>
      <button className="aleatorio">
        {" "}
        <span className="nombreDeLaFuente">
          {selectedFont ? selectedFont : "ABeeZee"}
        </span>{" "}
        Aleatorio
      </button>
    </>
  );
};
