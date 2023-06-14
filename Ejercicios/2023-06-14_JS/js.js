// for (let i = 0; i < (500/8); i++) {
//     console.log(i, i*8)
// }

let notasAprobadas = 0;
let notasReprobadas = 0;


for (let i = 0; i < 11; i++) {
    let nota = parseInt (prompt("Ingrese una nota"));

    if(nota >= 7){
        notasAprobadas++;
    }else{
        notasReprobadas++;
    }
    

}