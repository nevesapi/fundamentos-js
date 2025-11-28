// O JavaScript possui 8 tipos de dados, sendo 7 deles, os chamados de tipos primitivos

//  1 - tipo NUMBER - usado para numero inteiros ou decimais
let idade = 25;
let preco = 379.9;

console.log(preco);
console.log(typeof preco)
console.log("--------------------");

// 2 - tipo STRING - usado para textos
let nome = "Mago";
console.log(nome);

let sobrenome = 'Da Silva';
console.log(sobrenome);

let frase = "Apenas um teste de aspas simples ${nome}";
console.log(frase);

let frase2 = `Exemplo de string com crase - ${nome}`;
console.log(frase2);
console.log(typeof frase2);

let nomeCompleto = `${nome} - ${sobrenome}`;
console.log(nomeCompleto);

// 3 - tipo BOOLEAN - usado para valores lógicos e que só pode ter duas respostas possiveis
// verdadeiro - true
// falso - false

let maiorDeIdade = true;
let aprovado = false;

console.log(typeof maiorDeIdade)

//  4- tipo UNDEFINED - usado para variaveis que não foram inicializadas, ou seja, não receberam nenhuma valor
let x;
console.log(x);

x = 5;
console.log(x);

//  5 - tipo NULL
let resposta = null;
let user = null;

// 6 - tipo SYMBOL (símbolo) - usado para criar identificadores únicos para objetos
const senha = Symbol("senha");
console.log(senha);
console.log(typeof senha);


const id2 = Symbol("id");
console.log(id2);

// 7 - tipo BIGINT - é usado para representar números inteiros ENORMES, maiores que o limite do tipo NUMBER
const numeroGrande = 1234567890123456789012345678901234567890n;
console.log(numeroGrande);
console.log(typeof numeroGrande);
