let animal = {};

animal.nome = [];
animal.cor = 'Azul';
animal.idade = '30 anos';
animal.peso = '40kg';
animal['idade']= '50 anos';

animal.nome[0]= 'Bolinha';
animal.nome[1]= 'Fofinha';
animal.nome[2]= 'Pudim';
animal.nome[3]= 'Baleia';




console.log(animal.nome,animal.cor,animal.idade,animal.peso);
console.log(animal['peso']);
console.log(animal.nome[1]);

let variavel = {};
variavel.obj = {};

variavel.obj.name = 'Luiz';
console.log(variavel.obj.name);

const carro = {
    marca:"ford",
    modelo:"Ka", 
    ano:2015,
    placa:"ABC-1234",
    buzina:function(){
        alert('Biiiiiiiiii');
    },
    completo:function(){
        return"A marca é"+ this.marca + "e o modelo" + this.modelo;
    }
      
};

console.log(carro);
console.log(carro.ano);
console.log(carro['marca']);
carro.buzina();

console.log(carro.completo());


