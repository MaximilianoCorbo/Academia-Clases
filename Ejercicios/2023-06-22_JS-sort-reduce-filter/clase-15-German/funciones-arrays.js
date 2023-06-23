// function obtenerPares(lista) {
//   const listaRetorno = [];
//   for (let index = 0; index < lista.length; index++) {
//     const n = lista[index];

//     if (n % 2 === 0) {
//       listaRetorno.push(n);
//     }
//   }

//   return listaRetorno;
// }

// console.log(obtenerPares(numeros));
const numerosFilter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numeroPares = numerosFilter.filter(function (n) {
  return n % 2 === 0;
});

const numeroParesArrow = numerosFilter.filter((n) => n % 2 === 0);
// (n) => n % 2 === 0 es lo mismo que (n) => { retrun n % 2 === 0} porque es una arrow function de una sola instruccion

console.log(numeroPares);

const numerosMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const dobles = numerosMap.map(function (n) {
  return n * 2;
});

console.log(dobles);

const paisesYCodigos = [
  { nombre: "Uruguay", codigo: "598 " },
  { nombre: "USA", codigo: "1" },
  { nombre: "Argentina", codigo: "54" },
  { nombre: "España", codigo: "34" },
  { nombre: "Nueva Zelanda", codigo: "56" },
  { nombre: "Sentinel del Norte" },
];

/* 
paisesYCodigos.map((pYc) => <div><b>pYc.nombre</b> <span> pYc.codigo</span> </div>)
*/

// console.log(paisesYCodigos.map((pYc) => pYc.codigo));
// es lo mismo que
console.log(
  paisesYCodigos.map(function (pYc) {
    if (pYc.codigo) {
      return pYc.codigo.trim();
    } else {
      return "";
    }
  })
);

const email = "    germa n@gmail.com   ";
console.log(email);
console.log(email.trim());

console.log(1 == true);
console.log("      " == false);

const numerosProcesoComplejo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const listasMultiplos = numerosProcesoComplejo.map((n) => [
  n * 1,
  n * 2,
  n * 3,
]);
// es lo miso que

const listasMultiplos2 = numerosProcesoComplejo.map(function (n) {
  const resultado = [];
  for (let index = 1; index <= 3; index++) {
    resultado.push(n * index);
  }
  return resultado;
});

console.log(listasMultiplos);
