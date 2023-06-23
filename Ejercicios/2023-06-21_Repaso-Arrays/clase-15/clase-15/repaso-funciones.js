function sumar2numeros(x, y) {
  //sumar2Numeros el el nombre. X e Y son los parametros
  const resultado = x + y; // este es el codigo a ejecutar
  console.log(resultado);
  //return resultado; //
  // si no tenemos return es lo mismo que return undefined;
}
sumar2numeros(2, 2);
// f(x,y) = x + y => f(3, 2) =  5

const xParametro = 2;
console.log(sumar2numeros(xParametro, 4));
// es lo mismo que:
const suma = sumar2numeros(2, 4);
console.log(suma);
console.log(xParametro);

/*--------------------------*/
console.log(sumar2numeros);

function quienEsMayor(persona1, persona2) {
  if (persona1.edad > persona2.edad) {
    return persona1;
  } else if (persona1.edad < persona2.edad) {
    return persona2;
  }
  //   else {
  //     return undefined;
  //   }
}

const sumarAnio = (persona1) => {
  persona1.edad++;
  return persona1;
};

const german = {
  nombre: "German",
  edad: 27,
};

const carmelo = {
  nombre: "Carmelo",
  edad: 37,
};

// const mayor = quienEsMayor(carmelo, german);

const germanCumple = sumarAnio(german);
console.log(germanCumple);
console.log("sin cumple", german);
