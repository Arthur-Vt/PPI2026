/*
    Programação para Internet - 2026
    Professor: Gulilherme Leal
*/

// # Introdução ao JavaScript - Aula 06/05/2026

// Print
console.log("Bem vindos à PPI!");

// Variáveis
var dsc = "João"; //descotinuado
let name = "João";
let age = 17;
let isStudent = true;

// Constantes
const PI = 3.14; //Não pode ser alterada
// PI = 3; Causará um erro
console.log(PI);

// Operadores Aritmétricos + - / * ** %
let x = 5 + 5; // soma
let y = "5" + 5; // concatenação
let z = "Hello" + 5;

console.log(x, y, z);
console.log(typeof y);

let typeOfX = typeof x;
let typeOfY = typeof y;
let typeOfZ = typeof z;

console.log("A variável é", typeOfX);
console.log("A variável é", typeOfY);
console.log("A variável é", typeOfZ);

/*
    Ativar o formatador Prettier
    ALT + SHIFT + F
*/

// Operadores relacionais
console.log('5' != 5); // Diferença
console.log("5" == 5); // Compara tipo OU valor
console.log("5" === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // Incremento após o retorno do valor
console.log(x);
console.log(++x); // Incremento antes o retorno do valor
