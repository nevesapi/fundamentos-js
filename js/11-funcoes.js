// "Uma função, principalmente no JS, ela é utilizada pra gente reutilizar uma determindada ação no nosso código. A ideia é criar a função a fim de evitar repetição desnecessária" - Oliveira, Gustavo.

/* 

  sintaxe:

  function nomeDaFuncao(){
    // bloco de código que será executado
  } 

*/

function banana() {
  console.log("Função da banana!");
}

// Para a função funcionar, precisamos "invocar". Para invocar a função, basta passar o nome da função seguido de um par de parenteses.
banana();

// Trabalhando com parametros em funções
function saudacao(nomeUsuario) {
  console.log(`Olá, seja bem vindo(a) ${nomeUsuario}!`);
}

// const nome = prompt("Digite seu nome: ");
const nome = "Allan PH";

saudacao(nome);

// trabalhando com mais de um parametro
function somar(numeroA, numeroB) {
  let resultadoSoma = numeroA + numeroB;
  console.log(resultadoSoma);
}

somar(123, 123);
// somar(undefined, undefined);

// trabalhando com o return
function multiplicacao(a, b) {
  console.log("Antes do return");
  return a * b;
  // O return ignora todo o restante do código
  // É o ponto de parada da função

  // return `A multiplicação entre ${a} * ${b} é igual a: ${a * b}`;
  console.log("Depois do return");
}

let resultadoMultiplicacao = multiplicacao(5, 5); //125
console.log(resultadoMultiplicacao);

// Tipos de funções
// 1 - funções declaradas/nomeada
function falar() {
  console.log("Olá");
}
falar();

// 2 - função expressão/anonima
let latir = function () {
  console.log("Au Au!");
};

latir();

// 3 - arrow function/ função da seta
let subtrair = (a, b) => {
  return a - b;
};

subtrair(10, 5);

// HOISTING
