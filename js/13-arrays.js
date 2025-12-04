// Arrays no JavaScript são LISTAS ORGANIZADAS DE VALORES
// Pense nos arrays como uma caixinha com vários compartimentos numerados, onde você pode guardar coisas em ordem e acessar depois.

// DEFINIÇÃO GERAL: Um array é uma estrutura que guarda vários valores dentro de uma mesma variável

// criando um array
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pêra", "Tomate"]; //colchetes
console.log(frutas);

// acessando/pegando as informações de um array
console.log(frutas[0]); //Maçã
console.log(frutas[3]);

// acessando o tamanho do array
console.log(frutas.length);

// alterando valores de um array
console.log(frutas[4]);

frutas[4] = "Kiwi";

console.log(frutas);