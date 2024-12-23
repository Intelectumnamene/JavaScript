const prompt = require('prompt-sync')();

const nome = prompt("Qual seu nome? ");
console.log(`Olá ${nome}`);

const idade = prompt("Qual sua idade?")
console.log(`Bom sabe que você tem ${idade} anos!`)

function soma(a, b){
    return a + b
}

resultado = soma( 5 ,6);
console.log("A soma é "+resultado)

for(let x=0; x <10; x++){

    console.log(x)
}

let comida = ["Arroz", "Fiejao","Batata"];
console.log(comida)
