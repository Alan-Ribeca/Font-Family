import { counterContext } from "../../context/counterContext";
import { useContext } from "react";
import "./gridCuatro.scss";
import { BtnMovil } from "./BtnMovil";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
export const GridCuatro = () => {
  const {
    selectedFont,
    handleClickAnterior,
    handleClickSiguiente,
    indexActual,
  } = useContext(counterContext);

  const showNotification = () => {
    Toastify({
      text: "¡Fuente guardada!",
      duration: 2500,
      gravity: "top",
      position: "right",
      style: {
        background: "Rgb(123, 82, 185)", // Cambio aquí
      },
    }).showToast();
  };

  const handleSave = () => {
    let newData;

    if (!selectedFont) {
      const storedData =
        JSON.parse(localStorage.getItem("datosFavoritos")) || [];
      newData = [...storedData, "ABeeZee"];
    } else {
      const storedData =
        JSON.parse(localStorage.getItem("datosFavoritos")) || [];
      newData = [...storedData, selectedFont];
    }

    localStorage.setItem("datosFavoritos", JSON.stringify(newData));
    showNotification();
  };

  //evitamos que se guarde en favorito si queda marcado el boton y se preciona la barra espaciadora
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      return;
    }
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
        <button className="save" onClick={handleSave} onKeyDown={handleKeyDown}>
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
