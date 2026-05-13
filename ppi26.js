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
console.log("5" != 5); // Diferença
console.log("5" == 5); // Compara tipo OU valor
console.log("5" === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // Incremento após o retorno do valor
console.log(x);
console.log(++x); // Incremento antes o retorno do valor

// Aula 07/05/2026

// x++;
// ++x;
// x += 1;
// x = x + 1;

// Operadores lógicos - && (AND), || (OR), ! (NOT)
let isExpression = (true && 5 + 2 * 3 < 10) || false; // 1º operadores aritmétricos, 2º operadores relacionais, 3º operadores lógicos
console.log(isExpression);

// IF ELSE
/*
if (condition) {
    condition === true

} else {
    condition === false

}
*/

// Template Strings
let text = `React é "tudo de bom"!\\
Programar é minha vida!/
Eu amo o IFRN! '❤'\\`;
console.log(text);

// Estruturas de repetição (for)
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

// Arrays
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length); // Tamanho

console.log(fruits[0]); // Buscar o índice

fruits.push("Kiwi"); // Insere o elemento no final da lista
console.log(fruits);

console.log(fruits.pop()); // Retorna e remove o último elemento
console.log(fruits);

console.log(fruits.shift()); // Retorna e remove o primeiro elemento
console.log(fruits);

fruits.unshift("Lemon"); // Insere o elemento no início da lista
console.log(fruits);

// Argumento 1 - posição
// Argumento 2 - quantos elementos serão removidos
// Argumento 3 - lista de elementos que serão inseridos
fruits.splice(2, 0, "Kiwi", "Blueberry"); // Insere dois elementos após o 2º elemento
console.log(fruits);

fruits.splice(2, 1); // Remove o 3º elemento
console.log(fruits);

// Desafio - substituir 'Apple' por 'Kiwi'
fruits.splice(3, 1, "Kiwi");
console.log(fruits);

// Busca índice do elemento 'Kiwi'
let index = fruits.indexOf("Kiwi");
console.log(index);

fruits.splice(index, 1, "Apple");
console.log(fruits);

console.log("Ordenação");

let sortedFruits = fruits.toSorted(); // Não altera o array
console.log(sortedFruits);

let reversedFruits = fruits.toReversed(); // Não altera o array
console.log(reversedFruits);

// Ordernar em ordem crescente
fruits.sort(); // Altera o array
console.log(fruits);

// Ordernar em ordem decrescente
fruits.reverse(); // Altera o array
console.log(fruits);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// Desafio - criar um array chamado 'numbers2' que duplique os valores de 'numbers'
// Output: [90, 8, 18, 32, 50]

let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i] * 2;
  numbers2.push(element);
}

console.log(numbers2);

// function
function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

// Arrow function
console.log(numbers.map((number) => number * 2));

// Ordenar em ordem crescente com números
console.log(numbers.toSorted((a, b) => a - b));

// Ordenar em ordem descrescente com números
console.log(numbers.toSorted((a, b) => b - a));

// Pegar maior valor
numbers.sort((a, b) => a - b);
console.log("Maior =", numbers[numbers.length - 1]);

// Pegar menor valor
console.log("Menor =", numbers[0]);

// ================================================================
// Aula 13/05/2026 - Funções, array destructuring, spread operator
console.log(fruits);

// Juntar duas arrays - Spread
const fruits2 = ["Kiwi", "Avocado"];
console.log([...fruits2, "Grape"]);

// Desafio - Exibir todas as frutas que comecrem com "A"
const fruits3 = [...fruits, ...fruits2];
const out = [];
const letra = "a";
// for (let i = 0; i < fruits3.length; i++) {
//   const fruit = fruits3[i];
//   // toLowerCase - minúscula, toUpperCase - maiúscula
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// }
// console.log(out);

// fruits3.map((fruit) => {
//     if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });

// find - retorna a Primeira ocorrência,
// de acordo com a condição
let outFind = fruits3.find((fruit) => fruit[0].toLowerCase() === letra);

console.log(outFind);

// find - retorna Todas as ocorrências,
// de acordo com a condição
let outFilter = fruits3.filter((fruit) => fruit[0].toLowerCase() === letra);

console.log(outFilter);

// Desafio - Exiba o valor da soma de todos os
// números do array 'numbers'

//map
let sum = 0;
numbers.map((num) => {
  sum += num;
});
console.log(sum);

// reduce
console.log(numbers.reduce((sum, num) => sum + num));

// Object
const pessoa = {
  nome: "Zé Vaqueiro",
  idade: 25,
  profissão: "Cantor/Compositor",
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);
