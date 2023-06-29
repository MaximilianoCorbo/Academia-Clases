//Crear un formulario con tres botones con las leyendas "1", "2" y "3". 
//Mostrar un mensaje indicando qué botón se presionó.

const botones = document.querySelectorAll ("button");
console.log(botones);

for (let i = 0; i < botones.length; i++) {
    const element = botones[i];

    //Forma 1
        element.onclick = function (){ 
            alert(`Se clickeo el botón ${i+1}`);
        };
    //

    //Forma 2
        element.addEventListener("click", () => {
            alert(`El boton presionado es ${i+1}`);
            });
    //
};