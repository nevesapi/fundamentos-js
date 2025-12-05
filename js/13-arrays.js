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

// trabalho com for of para acessar dinamicamente valores do array
// percorre diretamente os valores do array

// para fruta da minha lista de frutas
for (const fruta of frutas) {
  // imprima o valor da fruta
  console.log(fruta);
}
console.log("--------------");

// arrays aninhados
const tecnologias = [
  ["HTML", "CSS", "JavaScript"], //0
  ["PHP", "Python", "C++"], // 1
  "Exemplo", // 2
];

// acessando/pegando as informações de um array aninhado
console.log(tecnologias);
console.log(tecnologias[0][2]);
console.log(tecnologias[1][2]);

// Manipulando o array com metodos
// criando um array vazio
let princesasDaDisney = [];

console.log(princesasDaDisney);

// adicionando itens a um array
// o método push adiona itens ao final do array
princesasDaDisney.push("Pocahontas");
princesasDaDisney.push("Fiona");
princesasDaDisney.push("TEste");
console.log(princesasDaDisney);

// unshift - adicoona itens ao inicio da lista
princesasDaDisney.unshift("Ariel");
console.log(princesasDaDisney);

// pop - remove o último item da lista
princesasDaDisney.pop();
console.log(princesasDaDisney);

// shift - remove o primeiro item da lista
princesasDaDisney.shift();
console.log(princesasDaDisney);
