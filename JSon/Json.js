const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

// converteu para texto Json.
let texto = JSON.stringify(carro);

//colocou para texto no HTML
document.getElementById('objeto').innerHTML = texto;

// convertemos texto em objeto.
let obj = JSON.parse(texto);

//pegamos um valor do objeto.
console.log(obj.modelo);
document.getElementById('objeto2').innerHTML = obj.modelo;
console.log(obj.motor[1]);
document.getElementById('motor').innerHTML = obj.motor[1];






const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send()
ajax.onload = function () {
    document.getElementById('pegar').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}


function buscarCep() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+input+'/json/');
    ajax.send()

    ajax.onload = function () {
        document.getElementById('texto').innerHTML=this.responseText;
        //tranformamos o texto em objeto.
        let obj = JSON.parse(this.responseText);
        // pegamos os valores desejados.
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado =obj.uf;
        document.getElementById('texto').innerHTML = "Logradouro:"+logradouro+ "<br>"+ "Cidade:" +cidade+ "<br>"+ "Estado:"+estado;
    }


}





// let texto2 = JSON.stringify(carro.marca);
// document.getElementById('objeto2').innerHTML = texto2;