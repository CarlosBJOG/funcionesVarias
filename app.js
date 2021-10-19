const {evaluarNumeros, evaluarNumerosOpt, evaluarNumerosTerceraForma} = require("./helpers/comparacionDeNumeros");

// //Declarar array con 10 numeros del 1 al 100 
const numeros = [12, 40, 60, 90, 78, 13, 54, 98, 43, 23];
let limitador = 50;
// const numerosMayores = evaluarNumeros( numeros, limitador );


const numerosMayores = evaluarNumerosTerceraForma( numeros, limitador );

console.log( numerosMayores)

console.log(`El total de numeros Mayores a ${limitador} = ${numerosMayores.length} \n`);
console.log(`Los numeros Mayores a ${limitador} son ${numerosMayores}`)
