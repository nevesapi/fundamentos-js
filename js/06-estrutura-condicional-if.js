// Estruturas condicionais são recursos de programação que permitem executar diferentes blocos de código com base em condições específicas.Ou seja, serve basicamente para tomar decisões no código.

let idade = prompt("Digite a sua idade:");

/* if (se) - 

if(condição){
  bloco de código que será executado se a condição for verdadeira
} */

// if simples
if (idade >= 18) {
  alert("Você é maior de idade!");
}

// if composto - if/else
/* 
  if(condição){
  bloco de código que será executado se a condição for verdadeira
  } else{
    bloco de código que será executado se a condição NÃO for verdadeira
  }
*/
let emailEsperado = "marciano@gmail.com";
let email = prompt("digite o seu email:");

if (email === emailEsperado) {
  alert(`Seja bem vindo ${email}`);
} else {
  alert("Email inválido!");
}

let hora = 11;
if (hora < 10) {
  console.log("Bom dia");
} else {
  console.log("Boa noite");
}
