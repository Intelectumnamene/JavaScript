//Retorna todos os elementos de um tipo específico de tag.

const elementos = document.getElementsByTagName('tag');

//Exemplo:

//Para acessar todas as tags <p>:

const paragrafos = document.getElementsByTagName('p');
console.log(paragrafos[0].textContent); // Acessa o primeiro parágrafo