// Laços de repetição permitem que você repita um bloco de código várias vezes, de forma automatica.

// Ou seja, você não precisa escrever o mesmo código várias vezes, mas sim definir quantas vezes ele deve ser executado.

// Os laços são muito utéis para trabalhar com listas, automação de tarefas, veirifcações, animações, entre outros.

// Os laços mais comuns na programação são: for, while e do...while

// Laço for - O laço for geralmente é usado quando você já SABE QUANTAS VEZES deseja repetir um bloco de código.

// A sintaxe do laço for é a seguinte:
/* 

  for(inicialização; condição; incremento/decremento){
    // bloco de código que será repetido
  }
    let i = 2 
  i++ ---> i = 2 + 1 
*/

for (let i = 1; i < 50; i += 2) {
  console.log("Bom dia", i);
}
console.log("-------------------------");

for (let index = 0; index < 11; index++) {
  console.log("Contando: ", index);
}

console.log("-------------------------");

let soma = 0;

for (let i = 5; i <= 10; i++) {
  console.log("A soma é: ", (soma += i));
}

console.log("-------------------------");

for (let bala = 1; bala <= 3; bala++) {
  console.log("Comi a bala: ", bala);
}

console.log("-------------------------");
// 10 --> 0
// 9 --> 0
// 8 --> 0
// 7 --> 0
// 6 --> 0
// 5 --> 0
// 4 --> 0
// 3 --> 0
// 2 --> 0
// 1 --> 0
// 10 --> 0

for (let index = 10; index >= 0; index--) {
  if (index === 0) {
    console.log("Feliz Natal");
  } else {
    console.log("Contagem regressiva: ", index);
  }
}
