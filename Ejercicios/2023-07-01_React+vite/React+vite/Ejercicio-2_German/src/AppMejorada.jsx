import "./App.css";
import { useState } from "react";
import Cuadrado from "./Cuadrado";

const coloresIniciales = ["rojo", "azul", "amarillo", "verde"];

function AppMejorada() {
  const [colores, setColores] = useState(coloresIniciales);

  function cambiarColor(index) {
    console.log("intento cabiar color de", index);
    console.log("los colores son:", colores);

    let nuevoColor = coloresIniciales[index + 1] ?? coloresIniciales[0];
    if (nuevoColor === colores[index]) {
      nuevoColor = coloresIniciales[index];
    }
    console.log("colores va a pasar a ser:", nuevoColor);
    const nuevosColores = [...colores];
    nuevosColores[index] = nuevoColor;
    setColores(nuevosColores);
  }

  return (
    <>
      <div className="flex">
        {colores.map(function (color, index) {
          return (
            <Cuadrado
              // key={Math.random()}
              key="red"
              onClick={() => cambiarColor(index)}
              color={colores[index]}
            />
          );
        })}
      </div>
    </>
  );
}

export default AppMejorada;
