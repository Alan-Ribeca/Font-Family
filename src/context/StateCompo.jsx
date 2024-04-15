/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { counterContext } from "./counterContext";

// eslint-disable-next-line no-unused-vars
export const StateCompo = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(""); // nombre de la fuente
  const [fontsData, setFontsData] = useState(null); // almacena los datos de las fuentes obtenidas de la API
  const [randomIndex, setRandomIndex] = useState(null); // almacena el índice aleatorio
  const [indexActual, setIndecActual] = useState(0); // índice actual de la fuente seleccionada

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCC4-sB_aUVAer2UGUiBY3HvYLflXfgih8"
    )
      .then((response) => response.json())
      .then((data) => {
        setFontsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedFont]);

  function handleClick() {
    if (fontsData && fontsData.items) {
      // Generar un índice aleatorio para seleccionar una fuente al azar
      const randomIndex = Math.floor(Math.random() * fontsData.items.length);
      setRandomIndex(randomIndex);
      // Obtener el nombre de la fuente aleatoria
      const randomFont = fontsData.items[randomIndex].family;
      // Actualizar el estado con la fuente aleatoria seleccionada
      setSelectedFont(randomFont);
      setIndecActual(randomIndex);
    }
  }

  function handleClickAnterior() {
    if (indexActual > 0) {
      const newIndex = indexActual - 1;
      setSelectedFont(fontsData.items[newIndex].family);
      setIndecActual(newIndex);
      console.log(`anterior ${indexActual}`)
    }
  }

  function handleClickSiguiente() {
    if (fontsData && indexActual < fontsData.items.length - 1) {
      const newIndex = indexActual + 1;
      setSelectedFont(fontsData.items[newIndex].family);
      setIndecActual(newIndex);
      console.log(`siguiente {currentIndex: ${indexActual}`)
    }
  }
  return (
    <counterContext.Provider
      value={{
        selectedFont,
        setSelectedFont,
        fontsData,
        setFontsData,
        randomIndex,
        setRandomIndex,
        handleClick,
        handleClickAnterior,
        handleClickSiguiente,
        indexActual
      }}
    >
      {children}
    </counterContext.Provider>
  );
};
