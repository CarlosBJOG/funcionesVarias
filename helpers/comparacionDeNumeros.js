const evaluarNumeros = ( numeros = [], limite = 0) => {
    let maxMayores = 0;
    const numerosMayores = [];
    //obtener los datos que sean mayores a 30 y cuantos son en total
    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite){
            maxMayores = maxMayores + 1;
            numerosMayores.push(numeros[i]);
        }
    }
    return {numerosMayores, totalNumeros:  maxMayores};
}

//segunda forma
const evaluarNumerosOpt = ( numeros = [], limite = 0) => numeros.filter( numero => numero > limite );//la funcion filter sirve para filtrar datos en un array

//tercera forma
const evaluarNumerosTerceraForma = (numeros = [], limite = 0) => {
    const nuevosNumeros = [];
    numeros.forEach( (numero) => {
        if( numero > limite ) {
            nuevosNumeros.push(numero);
        }
    })
    return nuevosNumeros;
}

module.exports = {
    evaluarNumeros,
    evaluarNumerosOpt,
    evaluarNumerosTerceraForma
}