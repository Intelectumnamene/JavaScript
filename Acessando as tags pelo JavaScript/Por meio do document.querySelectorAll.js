//2. Por meio do document.querySelectorAll
const elementos = document.querySelectorAll('tag'); // Substitua 'tag' pelo nome da tag

//Para acessar todas as tags <li>:
const listaItens = document.querySelectorAll('li');
listaItens.forEach(item => console.log(item.textContent)); // Itera sobre os itens
