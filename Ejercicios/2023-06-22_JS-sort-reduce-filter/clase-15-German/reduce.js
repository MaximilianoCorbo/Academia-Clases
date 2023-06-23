const inventario = [
  {
    nombre: "Remera",
    cantidad: 10,
    precio: 150,
    coloresDisponibles: ["rojo", "azul"],
  },
  {
    nombre: "Pantalón",
    cantidad: 5,
    precio: 30,
    coloresDisponibles: ["negro", "gris"],
  },
  {
    nombre: "Zapatos",
    cantidad: 3,
    precio: 50,
    coloresDisponibles: ["blanco", "marrón"],
  },
  {
    nombre: "Camisa",
    cantidad: 20,
    precio: 5,
    coloresDisponibles: ["negro", "blanco", "azul"],
  },
];

const nums = [4, 6, 9, 5, 8, 5];

const sumatoria = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sumatoria);

const multiplicatoria = nums.reduce((acc, curr) => {
  acc *= curr;
  return acc;
}, 1);
// console.log(multiplicatoria);

const coloresEnInventarioConRepeticion = inventario.reduce(
  (acc, curr) => acc.concat(curr.coloresDisponibles),
  []
);
console.log(coloresEnInventarioConRepeticion);

const coloresEnInventario = inventario.reduce((acc, curr) => {
  for (let index = 0; index < curr.coloresDisponibles.length; index++) {
    const color = curr.coloresDisponibles[index];
    if (!acc.includes(color)) {
      acc.push(color);
    }
  }
  return acc;
}, []);

// console.log(coloresEnInventario);
