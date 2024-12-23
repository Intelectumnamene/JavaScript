// Função tradicional
const somas = function(a, b) {
    return a + b;
  };
  
  // Arrow function
 const somar = (a, b) => a + b;


  const mensagem = () => console.log("Olá, mundo!");
mensagem();

const dobro = n => n * 2;
console.log(dobro(5)); // 10

const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

const verificarParImpar = numero => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
};

console.log(verificarParImpar(7)); // "Ímpar"

//Os sinais => são usados para criar funções de seta (arrow functions) em JavaScript. Essas funções são uma maneira mais concisa e moderna de definir funções, introduzidas no ES6 (ECMAScript 2015).
// Principais Características das Arrow Functions

// Sintaxe Compacta:
//     Uma arrow function é geralmente mais curta do que a declaração tradicional de uma função.

// Exemplo:

// Função tradicional
const somars = function(a, b) {
return a + b;
};

// Arrow function
const soma = (a, b) => a + b;

// Sem this Próprio:

// Arrow functions não têm seu próprio this. O valor do this é herdado do contexto no qual a função foi definida.
// Isso é útil em situações como manipuladores de eventos e funções de callback.

// Exemplo:

function Teste() {
this.nome = "Arrow Function";

// Função tradicional: cria um novo contexto de `this`
setTimeout(function() {
console.log(this.nome); // undefined
}, 1000);

// Arrow function: usa o `this` do contexto atual
setTimeout(() => {
console.log(this.nome); // "Arrow Function"
}, 1000);
}

new Teste();

// Sintaxe para Retorno Simples:

// Se a função contém apenas uma expressão, você pode omitir as chaves {} e a palavra-chave return.

// Exemplo:

const quadrado = x => x * x;
console.log(quadrado(4)); // 16

// Não Pode ser Usada como Construtor:
//     Arrow functions não podem ser usadas com new. Elas não têm o método interno [[Construct]].

// Sintaxe Geral

// (param1, param2, ..., paramN) => {
// // Corpo da função
// }

// Exemplos de Uso

// Sem Parâmetros:

const mensagens = () => console.log("Olá, mundo!");
mensagem();

// Com um Parâmetro (parênteses opcionais):

const dobros = n => n * 2;
console.log(dobro(5)); // 10

// Com Múltiplos Parâmetros:

const multiplicars = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

// Com Corpo de Função Mais Complexo:

// Use chaves {} se houver mais de uma linha no corpo da função.

const verificarParImpars = numero => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
};

console.log(verificarParImpar(7)); 
// "Ímpar"

// Benefícios

// Código mais limpo e legível.
// Herdam o this, evitando problemas de escopo em callbacks ou eventos.
// Excelente para funções de callback ou de uso rápido.

// Se precisar de mais exemplos ou de ajuda com arrow functions, é só avisar!