class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;

    }
    buzina(){
        return this.modelo + " buzinou: Biiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen","Gol",2013);

console.log(uno);
console.log(gol);
console.log(gol.modelo)
console.log(gol.buzina())
console.log(uno.buzina())
gol.ano = 2021;
console.log(gol)
document.getElementById('carro').innerHTML= `Marca : ${uno.marca},  Modelo: ${uno.modelo} e Ano: ${uno.ano}`;