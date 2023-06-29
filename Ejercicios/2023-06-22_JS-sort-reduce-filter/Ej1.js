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

// 1. Filtrar los productos que tienen una cantidad menor o igual a 5.

  //Forma 1
  // const menor5InventarioArrow = inventario.filter((prenda) => prenda.cantidad <= 5);
  // console.log(menor5Inventario);

  //Forma 2
  // const menor5Inventario = inventario.filter(function(prenda){
  //     const resultado = prenda.cantidad <= 5;
  //     return resultado;
  // });
  // console.log(menor5Inventario);


// 2. Duplicar la cantidad de los productos restantes.
  // const dobles = inventario.map(function(prenda){
  //     if (prenda.cantidad > 5){
  //         prenda.cantidad*=2;
  //     }
  //     return prenda;
  // });
  // console.log(dobles);
  // const totalPorPrenda = inventario.map((prenda) => {
  //     prenda.precio 
  // }
  //);

  // 3. Calcular el valor total de *todo* el inventario original.
  // 4. Filtrar los productos cuyo valor total sea mayor o igual a 100.
  // 5. Investigar sobre las funciones de arrays "find, some, every" para:
  // 6. Encontrar un producto que contenga la "ca" en su nombre
  // 7. Encontrar el producto mas caro (pista: usar funciones map y Math.max)
  // 8. Averiguar si todos los articulos tienen al menos 2 colores disponibles
  // 9. Averiguar si al menos 1 articulo cuesta mas de 100