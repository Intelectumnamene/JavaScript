let animal = [];

animal[0] = 'Fofinha';
animal[1] = 'Baleia';
animal[2] = 'Bolinha';
animal[3] = 'Pudim';

console.log(typeof(animal));
console.log(Array.isArray(animal));

let bicho = {};

bicho['tipo'] = 'Cachorro';
bicho['nome'] = 'Pudim';
bicho['peso'] = '30Kg';

console.log(typeof(bicho));
console.log(Array.isArray(bicho));

let nome = 'Luiz';

nome = false

console.log(typeof(nome));


/*JavaScript foi projetado com base em uma tipagem simples. 
Arrays foram adicionados como um tipo especializado de objeto, 
mas não criaram uma categoria própria no sistema de tipos. Assim,
o operador typeof sempre retorna "object" para arrays.
Essa decisão mantém o sistema de tipos simples, 
mas às vezes pode ser confusa, daí a necessidade de métodos como Array.isArray. */