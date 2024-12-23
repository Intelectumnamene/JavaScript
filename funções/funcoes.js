function calcular(num1, num2){
    return num1 + num2

}
let resultado = calcular(10,10);
console.log(resultado);

var variavel = function(){
    console.log("Minha função como variável!");

};
console.log(typeof(variavel));

function meu(){
    var nome = 'Luiz';
    return nome;
    
}
console.log(meu());

let obj = {'nome': 'Luiz', 'idade':'42'};
console.table(obj);
obj.func = function(){
   console.log('Minha função!')
}
obj.func();
