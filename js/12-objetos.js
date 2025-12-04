// Os objetos são estruturas que armazenam dados e funcionalidades, como por exemplo, PROPRIEDADES e METODOS, em pares de CHAVE e VALOR.

// Propriedades - caracteristicas do objeto
// Método - são funções de um objeto

// Os objeto servem para representar coisas do mundo real ou estruturas de dados organizadas.

/*  Exemplo de objetos que podem ser criados 
  - usuário
  - produto
  - postagem
  - pessoa
  ...etc.
*/

const pessoa = {
  //chave: valor
  nome: "Arthur Coelho",
  idade: 20,
  altura: 1.7,
};

// acessando informações de um objeto
// Para acessarmos informações de um objeto, passamos o nome do objeto, seguindo de um ponto(.) e o nome da propriedade
console.log(pessoa.nome);
console.log(pessoa.idade);

// também é possivel acessar com colchetes
console.log(pessoa["altura"]);

let prop = "idade";
console.log(pessoa[prop]);

// Exemplo de acesso com laço de repetição
const produto = {
  nome: "Mouse gamer Logitech",
  preco: 599.79,
  emEstoque: true,
  quantidade: 55,
};

for (let key in produto) {
  console.log("----------");

  console.log(key);
  console.log(produto[key]);
}

// Objeto com métodos
const pessoaB = {
  nome: "Ana",
  idade: 20,
  status: true,
  falar() {
    return "Olá, eu sou a Ana!";
  },
};

console.log(pessoaB.falar());
console.log(`${pessoaB.falar()}, tenho ${pessoaB.idade} anos.`);
