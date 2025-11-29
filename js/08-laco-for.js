// Laços de repetição permitem que você repita um bloco de código várias vezes, de forma automatica.

// Ou seja, você não precisa escrever o mesmo código várias vezes, mas sim definir quantas vezes ele deve ser executado.

// Os laços são muito utéi para trabalhar com listas, automação de tarefas, veirifcações, animações, entre outros.

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

for (let i = 1; i < 5; i++) {
  console.log("Bom dia", i);
}

for (let index = 0; index < 11; index++) {
  if (index === 10) {
    console.log("Feliz ano novo!");
  } else {
    console.log("Contando: ", index);
  }
}

let soma = 0;

for (let i = 5; i <= 10; i++) {
  console.log("A soma é: ", (soma += i));
}
