import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./favorito.scss";

export const Favorito = () => {
  const [datosTraidos, setDatosTraidos] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage al cargar el componente
    const datosLocalStorage =
      JSON.parse(localStorage.getItem("datosFavoritos")) || [];
    setDatosTraidos(datosLocalStorage);
  }, []); // Ejecutar solo una vez al montar el componente

  const handleBorrar = (id) => {
    const confirmacion = window.confirm("¿Seguro que quieres eliminarla?");

    if (confirmacion) {
      const nuevoArray = datosTraidos.filter((nombre, index) => index !== id);

      // Actualizar el estado y el localStorage con el nuevo array
      setDatosTraidos(nuevoArray);
      localStorage.setItem("datosFavoritos", JSON.stringify(nuevoArray));
      Toastify({
        text: "¡Fuente eliminada!",
        duration: 2500,
        gravity: "top",
        position: "right",
        style: {
          background: "Rgb(123, 82, 185)",
        },
      }).showToast();
    }
  };
  return (
    <>
      {datosTraidos.length === 0 ? (
        <div className="sinFavoritos">
          <h1 className="title">Mis Favoritos</h1>
          <p className="sinFavo">No hay fuentes agregadas a favorito.</p>
          <Link to={"/"} className="enlace">Agregar</Link>
        </div>
      ) : (
        <section className="misFavoritos">
          <h1 className="title">Mis Favoritos</h1>
          <div className="containerFavoritos">
            {datosTraidos.map((nombre, index) => (
              <div key={index} className="cuadradoFav">
                <button className="borrar" onClick={() => handleBorrar(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="estrella"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </button>
                <p className="name">Fuente: {nombre}</p>
                <button className="btn">Ver fuente</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
