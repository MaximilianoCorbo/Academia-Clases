// #Contenedor

// function impColor(){
//     let colores = document.getElementById('contenedor').style;
//     console.log (colores)
// }

// console.log (impColor())

// let test = document.querySelector('#contenedor');
// const bgColor = getComputedStyle(test).backgroundColor;
// console.log(bgColor);



// const Elemento =  document.getElementById('contenedor').style;
// Elemento.width = "300px" ; 
// Elemento.height = "300px" ;
// Elemento.background = "green";

// const boton = document.createElement ("button");
// boton.append("boton 1");




// Agregar un botón al HTML que cuando sea "clickeado" 
// - cambie el color  
// - agregue un texto al ID contenedor


// // let documento = document.getElementById('contenedor') 
// // let AgregarBoton = documento.innerHTML = `<button id="">Hola boton</button>`

document.getElementById('boton').onclick = function (){
    const contenedorStyle = document.getElementById('contenedor').style;
    const texto = document.getElementById('contenedor');

   if (getComputedStyle(texto).backgroundColor === "rgb(255, 0, 0)"){
    contenedorStyle.backgroundColor = "rgb(0, 255, 0)";
    texto.innerText = "Hola Verde";
   }else{
    contenedorStyle.backgroundColor = "rgb(255, 0, 0)";
    texto.innerText = "Hola Rojo";
   }
}