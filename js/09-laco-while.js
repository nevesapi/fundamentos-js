// Usamos o While quando não sabemos exatamente quantas vezes o loop vai repetir.

// Geralmente sabemos a condição que precisa permanecer verdadeira.

/* 

  // inicialização
  let variavelDeControle = 0;

  while(condição){
    // bloco de código que será executado ENQUANTO a condição for verdadeira

    // incremento/decremento
    variavelDeControle++;
  } 

*/

// variavel de controle
let numero = 0;

while (numero <= 10) {
  console.log("O número atual é: ", numero);

  // incremento = atualiza o valor da variavel de controle, garantindo que o loop não seja infinito
  numero++;
}

let entrada = "";
console.log(entrada);

while (entrada !== "ok") {
  entrada = prompt("Digite 'ok' para continuar");
  console.log(entrada);
}
