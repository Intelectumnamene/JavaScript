const pessoa = ["Luiz", "Pedro","Gisele","Maria",  ];

//remover o primeiro item da lista.
pessoa.shift();

//sem declarar nenhum parãmetro, remove o último elemento.
pessoa.pop();

// acrescenta um item na lista.
pessoa.push("Eva");

//adiciona um elemento no primeiro índice.
pessoa.unshift("Bolinha");

//Ao usar delete.pessoa[0]; o índice fica como undefined.É melhor pop ou o shift para não deixar índices vazios.


//o número 1 define em qual posição quer adicionar o item e 0 quantos itens quer retirar depois do número 1.
pessoa.splice(1,0,"Item adicionado1", "item adicionado 2" );



document.getElementById("teste").innerHTML = pessoa.join(" - ");


const lista1 = ["Arroz","feijão","leite","macarrão"];
const lista2 = ["suco","refrigerante","carne"];
const lista3 = ["salgado","bife","limão"];

//concat = junta todas a listas
const superLista = lista1.concat(lista2,lista3);
document.getElementById("lista").innerHTML = superLista.join(" - ");


const jogadores = ["Biro Biro","Ribamar","Pelé","Maradona", "Neymar","Cristiano Ronaldo","Vampeta","Dimitri" ];

//sort = ordem alfabética
const jogOrdem = jogadores.sort();
document.getElementById("alfabetico").innerHTML = jogOrdem.join(" - ");


//slice= seleciona apenas as matrizes desejadas
const craques = jogadores.slice(2,6);
document.getElementById("craques").innerHTML=craques.join(" - ");


const jogReverse = jogadores.reverse()
document.getElementById("reverse").innerHTML=jogReverse.join(" - ");

const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

numeros.sort(function(a,b){return(a-b)})
//order númerica.
document.getElementById("numOrder").innerHTML=numeros.join(" - ");

function MaiorNumero(array){
    return Math.max.apply(null, array);
}
document.getElementById('maiorNumero').innerHTML=MaiorNumero(numeros)

function MenorNumero(array){
    return Math.min.apply(null,array);
}
document.getElementById('menorNumero').innerHTML = MenorNumero(numeros)

//filtragem
function filtragem(value, index,array){
    return value >20;
}
document.getElementById('filtragem').innerHTML = (maior20);