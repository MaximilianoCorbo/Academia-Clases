// x es numero, y es nuemero, y funcionOperacion es una funcion de javascript
function operar(x, y, funcionOperacion) {
  console.log(funcionOperacion);
  const resultado = funcionOperacion(x, y);
  return resultado;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function division(x, y) {
  return x / y;
}

const xParametro = 10;
const yParametro = 5;

console.log(operar(xParametro, yParametro, suma));
