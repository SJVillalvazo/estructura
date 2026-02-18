let numeros = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Posición ${i}:${numeros[i]}`);
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}
//voy a imprimir mi array pares
console.log(pares);
// voy a imprimir mi array de impares
console.log(impares);

