import { useState } from "react";
import "./Cuadrado.css";

const Cuadrado = (props) =>{
    const [first, setfirst] = useState(props.colorInicial)
   
    function changeColor(){

        if (first == "red"){
            setfirst("blue")  
        }else if (first == "blue"){
            setfirst("orange")  
        }else if (first == "orange"){
            setfirst("green")  
        }else{
            setfirst("red")
        }
        
    }
   
    return <div onClick={changeColor} className={`cuadrado ${first}`}></div>

}
export default Cuadrado