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
        background: "Rgb(123, 82, 185)",
      },
    }).showToast();
  };

  const handleSave = () => {
    const storedData = JSON.parse(localStorage.getItem("datosFavoritos")) || [];
    let newData;

    if (!selectedFont) {
      if (storedData.includes("ABeeZee")) {
        console.log("ya esta guardada");

        Toastify({
          text: "Fuente guardada previamente.",
          duration: 2500,
          gravity: "top",
          position: "right",
          style: {
            background: "#ff0000",
          },
        }).showToast();
        return;
      }
      newData = [...storedData, "ABeeZee"];
    } else {
      if (storedData.includes(selectedFont)) {
        console.log("ya esta guardada");

        Toastify({
          text: "Fuente guardada previamente.",
          duration: 2500,
          gravity: "top",
          position: "right",
          style: {
            background: "#ff0000",
          },
        }).showToast();
        return;
      }
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
          Nombre: {selectedFont ? selectedFont : "ABeeZee"}
        </p>
        <p className="nombreFuente">Tot. de Ftes: 1618</p>
        <p className="nombreFuente">
          Fuente Núm: {indexActual ? indexActual : 0}
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
