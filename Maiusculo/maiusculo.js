let palavra = "caminho correto";
let maiusculo = palavra.toUpperCase();
console.log(maiusculo)


//Primeiro caractere em maiúsculo.

let palavras = "javascript";
let primeiraMaiuscula = palavras.charAt(0).toUpperCase() + palavra.slice(1);

console.log(primeiraMaiuscula); // Saída: "Javascript"

//Explicação:

// palavra.charAt(0).toUpperCase():
// Obtém o primeiro caractere da palavra e o transforma em maiúscula.
// palavra.slice(1):
// Retorna o restante da palavra (a partir do índice 1).
// O operador + concatena a primeira letra maiúscula com o restante da palavra.
// Frase inteira
let frase = "aprendendo javascript é divertido";
let fraseFormatada = frase
  .split(" ") // Divide a frase em palavras
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // Converte a primeira letra de cada palavra
  .join(" "); // Junta as palavras novamente em uma frase

console.log(fraseFormatada); // Saída: "Aprendendo Javascript É Divertido"
