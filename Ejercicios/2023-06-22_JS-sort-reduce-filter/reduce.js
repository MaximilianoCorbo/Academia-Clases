const inventario = [

]

const nums = [4, 6, 9, 5, 8, 5];
const sumatoria = nums.reduce((acc, curr) => acc + curr, 0); //Acc Accumulator Curr Current
// console.log(sumatoria);

const multiplicatoria= nums.reduce((acc, curr) => {
    acc *= curr;
    return acc;
}, 1);
// console.log(multiplicatoria);



