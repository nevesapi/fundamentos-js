// O switch/case ele também é uma estrutura condicional
// Geralmente é utilizado quando temos muitas condições para verificar

// Ele é ideal quando você quer testar UM ÚNICO VALOR contra múltiplas opções, tipo, uma variavel, expressão ou retorno de uma função.

/* 
  Exemplo da estrutura switch/case:

  switch(expressão/condição, variavel){
    case valor1:
      // código a ser executado se o valor for igual a valor1
      break; // interrompe a execução do switch
  }
*/

// Exemplo prático bot do whatsapp:
// \n -> quebra de linha Exemplo: "Olá \nTudo bem?";
// let opcao = prompt("Selecione uma opção \nTesteeeee");
// let opcao = Number(
//   prompt(`Selecione uma opção:
//   1 - Falar com o(a) atendente
//   2 - Suporte técnico
//   3 - Setor financeiro
//   `)
// );

// console.log(opcao);

// switch (opcao) {
//   case 1:
//     console.log("Falando com o atendente");
//     break; // Sem o break, ele continuaria executando os próximos cases

//   case 2:
//     console.log("Falando com o suporte técnico!");
//     break;

//   case 3:
//     console.log("Falando com o setor financeiro!");
//     break;

//   default:
//     console.log("Opção inválida, tente novamente!");
//     break;
// }

// Outro exemplo

let operador = prompt("Escolha um operador artimético: +, -, *, /");

switch (operador) {
  case "+":
    let resultado = numero1 + numero2
    console.log("Você selecionou a adição!");
    console.log(resultado)
    break;

  case "-":
    console.log("Você selecionou a subtração!");
    break;

  case "*":
    console.log("Você selecionou a multiplicação!");
    break;

  case "/":
    console.log("Você selecionou a divisão!");
    break;

  default:
    console.log("Operador inválido!");
    break;
}
