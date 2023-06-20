document.getElementById('h1-Ejemplo').style.color= 'red';
document.getElementById('h1-Ejemplo').style.backgroundColor= 'blue';
document.getElementById('h1-Ejemplo').onclick = function clicktitulo() {alert ('h1 fue clickeado')};


// // document.getElementsByClassName ('mi-clase').onclick = function clickdiv() {alert ('div fue clickeado')};
document.getElementsByClassName('mi-clase').style.backgroundColor = 'green';

// Modificador de lista de Elementos por Clase
const listaElementos = document.getElementsByClassName("mi-clase");

console.log(listaElementos)

for (let i = 0; i < listaElementos.length; i++) {
    const element = listaElementos[i];

    element.onclick = function (){
    element.style.backgroundColor = "red";
    }
}