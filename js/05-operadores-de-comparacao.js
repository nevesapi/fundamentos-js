// Os operadores de comparação são usados para comparar dois valores e SEMPRE retornam um valor booleano - verdaeiro(true) ou falso(false).

// Igualdade (==) - Geralmente usado para comparar valores, ignorando o tipo de dado.

let a = 5; // number
let b = "5"; // string

console.log(typeof a);
console.log(typeof b);

console.log(a == b);

// Estritamente Igual (===) - Compara valores e tipos de dados.
console.log(a === b);

// != Diferença - Verifica se os valores são diferentes, ignorando o tipo de dado.
console.log(a != b);

//  Estritamente diferente !== - Verifica se os valores ou tipos de dados são diferentes.
console.log(a !== b);

//  Outros operadores de comparação:
let x = 15;
let y = 18;

// Maior que ( > )
console.log(`X:${x} é maior que Y:${y} ? ${x > y}`);

// Menor que ( < )
console.log(`X:${x} é menor que Y:${y} ? ${x < y}`);

// Maior ou igual ( >= )
console.log(`X:${x} é maior ou igual a Y:${y} ? ${x >= y}`);

// Maior ou igual ( <= )
console.log(`X:${x} é menor ou igual a Y:${y} ? ${x <= y}`);
