import { counterContext } from "../../context/counterContext";
import { useContext } from "react";
import "./gridCuatro.scss";
import { BtnMovil } from "./BtnMovil";

export const GridCuatro = () => {
  const {
    selectedFont,
    handleClickAnterior,
    handleClickSiguiente,
    indexActual,
  } = useContext(counterContext);

  const handleSave = (selectedFont) => {
    console.log(`se guardo bien la fuente con el nombre: ${selectedFont}`);

    //primero obtengo los datos del localStorage
    const storedData = JSON.parse(localStorage.getItem("datosFavoritos")) || [];
    
    //agrego el nuevo valor
    const newData = [...storedData, selectedFont];
    
    //agrego los datos actualizados al localStorage
    localStorage.setItem("datosFavoritos", JSON.stringify(newData));
  };

  return (
    <>
      <div className="containerGridCuatro">
        <h5 className="detalles">Detalles</h5>
        <hr className="hrDetalles" />
        <p className="nombreFuente">
          Fuente: {selectedFont ? selectedFont : "ABeeZee"}
        </p>
        <p className="nombreFuente">Total de fuentes: 1618</p>
        <p className="nombreFuente">
          Numero de la fuente: {indexActual ? indexActual : 0}
        </p>
        <button className="save" onClick={() => handleSave(selectedFont)}>
          Guardar
        </button>
        <p className="nombreFuente-usar">
          <a
            href={
              selectedFont
                ? `https://fonts.google.com/specimen/${selectedFont
                    .split(" ")
                    .join("+")}`
                : "https://fonts.google.com/specimen/ABeeZee"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="fuenteA"
          >
            Usar fuente
          </a>
        </p>
        <div className="containerBoton">
          <button className="btnAnterior" onClick={handleClickAnterior}>
            Anterior
          </button>
          <button className="btnSiguiente" onClick={handleClickSiguiente}>
            Siguiente
          </button>
        </div>
        <BtnMovil />
      </div>
    </>
  );
};
