// Construtor - Protótipo de Objeto
function Product(name, sto, ram, price, qty, category) {
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product("IPhone", 256, 16, 5000, 10, "Celular");
const p2 = new Product("IPad", 512, 16, 8000, 20, "Tablet");
const p3 = new Product("Macbook", 1024, 24, 15000, 30, "Notebook");
const p4 = new Product("IPhone Pro Max", 256, 16, 7000, 15, "Celular");
const p5 = new Product("IPad Pro", 512, 16, 10000, 25, "Tablet");
const p6 = new Product("Macbook Pro", 1024, 24, 25000, 35, "Notebook");

const e = [{ ...p1 }, { ...p2 }, { ...p3 }, { ...p4 }, { ...p5 }, { ...p6 }];
console.log(e);

/* Desafio 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por preço (crescente/descrescente)
  c) Ordene os produtos por nome (crescente/descrescente)
  d) Filtre produtos de acordo por uma categoria

*/

// let valorTotal = 0;
// const { price, qty} = valorTotal;
// console.log(price * qty)
console.log("a) Valor total de todos os produtos em estoque");
const valorTotal = e
  .reduce((valor, p) => valor + p.price * p.qty, 0)
  .toFixed(2);
console.log(`O valor total é R$ ${valorTotal}.`);

console.log("b) Ordene os produtos por preço (crescente/descrescente)");
console.log("Crescente:");
// Product.price.toSorted((a, b) => a - b)
const precoCresc = e.toSorted((a, b) => a.price - b.price);
console.log(precoCresc);

console.log("Descrescente:");
const precoDesc = e.toSorted((a, b) => b.price - a.price);
console.log(precoDesc);

// c) Ordene os produtos por nome (crescente/descrescente)
console.log("c) Ordene os produtos por nome (crescente/descrescente)");
console.log("Crescente:");
const nomeCresc = e.toSorted((a, b) => a.name.localeCompare(b.name));
console.log(nomeCresc);

console.log("Descrescente:");
const nomeDesc = e.toSorted((a, b) => b.name.localeCompare(a.name));
console.log(nomeDesc);

// d) Filtre produtos de acordo por uma categoria
console.log("d) Filtre produtos de acordo por uma categoria");
let tablet = e.filter((a) => a.category === "Tablet");
console.log(tablet);
