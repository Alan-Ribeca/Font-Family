import "./favorito.scss";

export const Favorito = () => {
  const datosTraidos = JSON.parse(localStorage.getItem("datosFavoritos"));

  return (
    <>
      <section>
        <h1>Mis Favoritos</h1>

        <div className="ContainerFavoritos">
          {datosTraidos.map((nombre, index) => (
            <div key={index} className="favoritos">
              <p>El nombre es {nombre}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
