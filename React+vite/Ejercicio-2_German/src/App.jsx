import "./App.css";
import { useState } from "react";

function App() {
  // colorCuadrado1 = "blue"; se cambia por setColorCuadrado1("blue");
  const [colorCuadrado1, setColorCuadrado1] = useState("rojo");
  const [colorCuadrado2, setColorCuadrado2] = useState("azul");
  const [colorCuadrado3, setColorCuadrado3] = useState("amarillo");
  const [colorCuadrado4, setColorCuadrado4] = useState("verde");

  const toggleColorCuadrado1 = () => {
    setColorCuadrado1((colorActual) => {
      if (colorActual === "rojo") {
        return "azul";
      } else {
        return "rojo";
      }
    });

    /* lo que hay arriba es la forma correcta de hacer esto:    
    let color;
    if (colorCuadrado1 === "rojo") {
      color = "azul";
    } else {
      color = "rojo";
    }
    setColorCuadrado1(color);*/
  };

  return (
    <>
      <div className="flex">
        <div
          className={`cuadrado ${colorCuadrado1}`}
          onClick={toggleColorCuadrado1}
        ></div>
        <div
          className={`cuadrado ${colorCuadrado2}`}
          onClick={() => setColorCuadrado2("rojo")}
        ></div>
        <div
          className={`cuadrado ${colorCuadrado3}`}
          onClick={() => setColorCuadrado3("verde")}
        ></div>
        <div
          className={`cuadrado ${colorCuadrado4}`}
          onClick={() => setColorCuadrado4("amarillo")}
        ></div>
      </div>
    </>
  );
}

export default App;
