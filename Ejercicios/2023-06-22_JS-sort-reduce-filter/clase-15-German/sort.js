const remera = {
  nombre: "Remera",
  cantidad: 10,
  precio: 150,
  coloresDisponibles: ["rojo", "azul"],
};

const copiaRemera = { ...remera };

copiaRemera.precio = 0;
copiaRemera.coloresDisponibles[0] = "negro";

console.log("remera", remera);
console.log("copiaRemera", copiaRemera);
const inventario = [
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
  remera,
];

console.log(inventario);
const preciosMayores = inventario.filter((prenda) => prenda.precio > 15);
// console.log(preciosMayores);

const conDescuento = inventario.map((prenda) => {
  prenda.precio *= 0.85;
  return prenda;
});
// console.log(conDescuento);
console.log(inventario[0]);

// esta es la version laraga y "mala"
const ordenadasPorPrecio = inventario.sort(function (prenda1, prenda2) {
  // let ret;
  if (prenda1.precio < prenda2.precio) {
    return -1;
  }
  if (prenda1.precio === prenda2.precio) {
    return 1;
  }
  return 0;
});

const ordenadasPorPrecioMasSimple = inventario.sort(
  (prenda1, prenda2) => prenda1.precio - prenda2.precio
);

// console.log(ordenadasPorPrecioMasSimple);

const nums = [5, 6, 8, 2];
// console.log(nums.sort());

const porColoresDisponibles = inventario.sort(
  (a, b) => b.coloresDisponibles.length - a.coloresDisponibles.length
);
console.log(porColoresDisponibles);
