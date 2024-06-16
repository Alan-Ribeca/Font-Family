import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./favorito.scss";

export const Favorito = () => {
  const [datosTraidos, setDatosTraidos] = useState([]);
  const [fuenteSelec, setFuenteSelec] = useState([]);
  const [botonSeleccionado, setBotonSeleccionado] = useState([]);

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

  useEffect(() => {}, [fuenteSelec]);

  function handleVerFuente(id) {
    setBotonSeleccionado(id);
    setFuenteSelec(id);
  }

  return (
    <>
      {fuenteSelec && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${fuenteSelec}&display=swap`}
        />
      )}

      {datosTraidos.length === 0 ? (
        <div className="sinFavoritos">
          <h1 className="title">Mis Favoritos</h1>
          <p className="sinFavo">No hay fuentes agregadas a favorito.</p>
          <Link to={"/"} className="enlace">
            Agregar
          </Link>
        </div>
      ) : (
        <>
          <h1 className="title">Mis Favoritos</h1>

          <article className="favoritocontenedor">
            <section className="misFavoritos">
              <div className="containerFavoritos">
                {datosTraidos.map((nombre, index) => (
                  <div key={index} className="cuadradoFav">
                    <button
                      className="borrar"
                      onClick={() => handleBorrar(index)}
                    >
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
                    <button
                      className={`btn ${
                        botonSeleccionado === nombre ? "seleccionado" : ""
                      }`}
                      onClick={() => handleVerFuente(nombre)}
                    >
                      Ver
                    </button>
                    <a
                      href={`https://fonts.google.com/specimen/${nombre
                        .split(" ")
                        .join("+")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fuenteA"
                    >
                      <button className="btn">Usar</button>
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="visualizacion"
              style={{ fontFamily: fuenteSelec }}
            >
              <h3 className="h3Visu">¡Datos curriosos!</h3>
              <p className="datos">
                1- Serif vs. Sans-serif: Las fuentes serif tienen pequeños
                adornos en los extremos de las letras, llamados serifs, que
                pueden transmitir una sensación de tradición y formalidad. Por
                otro lado, las fuentes sans-serif carecen de estos adornos, lo
                que les otorga un aspecto más moderno y limpio.
              </p>
              <p className="datos">
                2- Tipografía de palo seco (Monospace): En estas fuentes, cada
                carácter ocupa el mismo ancho de espacio, lo que las hace útiles
                para la codificación de programación y la creación de tablas de
                datos. Son fácilmente reconocibles por su aspecto
                mecanografiado.
              </p>
              <p className="datos">
                3- Script y Cursiva: Las fuentes script imitan la apariencia de
                la escritura a mano, añadiendo un toque personal y elegante al
                diseño. Por otro lado, las fuentes cursivas tienen una
                inclinación similar a la escritura a mano cursiva, pero son más
                rígidas y formales.
              </p>
              <p className="datos">
                4- Tipografía Display: Estas fuentes están diseñadas para su uso
                en títulos y encabezados, ya que son más ornamentadas y
                llamativas. Son ideales para captar la atención y transmitir un
                mensaje con impacto visual.
              </p>
              <p className="datos">
                5- Historia y Evolución: Cada tipo de fuente tiene una historia
                fascinante detrás de su creación y evolución. Desde las antiguas
                inscripciones en piedra hasta las innovaciones modernas en
                diseño tipográfico, las fuentes han reflejado y moldeado los
                estilos y las épocas a lo largo de la historia del diseño
                gráfico.
              </p>

              <h3>Numeros</h3>
              <p className="numeros">1 2 3 4 5 6 7 8 9 </p>
            </section>
          </article>
        </>
      )}
    </>
  );
};
