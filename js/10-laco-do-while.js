// Sobre o laço do...while (faça...enquanto)

/* 
  sintaxe:
    let variavelDeControle
    do{
      // bloco de código que será executado

    } while(condição)
    
    
    while(condição){
      // bloco de código que será executado
    }
*/

// let senha;

// do {
//   senha = prompt("Digite sua senha: ");
// } while (senha !== "1234");

let opcao;
do {
  opcao = prompt(`
    1 - Compra
    2 - Vendas
    0 - Encerrar atendimento
    `);

  console.log(opcao);
} while (opcao !== "0");
