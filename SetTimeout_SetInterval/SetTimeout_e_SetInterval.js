function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    //ativa a função apenas uma vez quando der o tempo especificado
    tempo = setTimeout(function () {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
        document.body.style.backgroundColor='blue';
    }, 5000);


}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem!"
}