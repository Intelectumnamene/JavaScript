

let data = new Date();
let dataFormatada = data.toLocaleDateString('pt-BR', {
    weekday: 'long',   // Exibe o dia da semana (quarta-feira)
    year: 'numeric',   // Exibe o ano completo
    month: 'long',     // Exibe o mês completo (novembro)
    day: 'numeric'     // Exibe o dia do mês
});
console.log(dataFormatada);
document.getElementById('data').innerHTML = dataFormatada;


let dia = new Date();

let ano = data.getFullYear()
console.log(ano);
document.getElementById('ano').innerHTML = `Aqui está o ano:` + " " + ano;

console.log(dia);
document.getElementById('dia').innerHTML = `Aqui sem a formatação para o Português <br>` + dia;


//mes no formato escrito
let mes = data.getMonth();
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezenbro"]
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mes);
document.getElementById('mes').innerHTML = mesEscrito;

//pegar o dia do mes
let diaMes = data.getDate();
console.log(diaMes);
document.getElementById('diames').innerHTML = `O dia de hoje é:` + " " + diaMes;


//dia da semana 0 até 6
let diaSemana = data.getDay();
const diasDasemana = ["Segunda-Feira", "Terça-feira", "Quarta-Feira", "Quinta-Feira", "Sexta-feira", "Sábado", "Domingo"];
let diasEscritos = diasDasemana[data.getDay()];
console.log(diasEscritos);
document.getElementById('diaSemana').innerHTML = diasEscritos;

//pegar a hora de 0 a 23
let hora = data.getHours();
console.log(hora);
document.getElementById('hora').innerHTML = `Horas: ` + " " + hora;
//pegar minutos
let minutos = data.getMinutes();
console.log(minutos);
document.getElementById('minuto').innerHTML = `Minutos:` + " " + minutos;

//pegar segundos

let segundos = data.getSeconds();
console.log(segundos);
document.getElementById('segundos').innerHTML = `Pegando segundos ` + segundos;

//pegar milisegundos

let milisegundos = data.getMilliseconds();
console.log(milisegundos);
document.getElementById('milisegundos').innerHTML = `Pegando milisegundos: ` + milisegundos;

//pegar a data no padrão brasileiro - Dia/Mes/Ano

let dataBr = data.toLocaleString('pt', { dateStyle: 'short' });
console.log(dataBr)
document.getElementById('dataBr').innerHTML = `data ` + dataBr;
//pegar hora
let timeBr = data.toLocaleString('pt', { timeStyle: 'short' });
console.log(timeBr)
document.getElementById('timeBr').innerHTML = `Hora simplificada: ` + timeBr;

//Pegar valores separados
d = new Date
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x }

let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBr);
document.getElementById('dataPadraoBr').innerHTML = `Padrão: ` + dataPadraoBr;


//comparar datas - maior ou menor ex: Vencimentos

let hoje = new Date();
let vencimento = new Date(2024, 10, 27)

if (hoje > vencimento) {
    console.log("Sua conta venceu")
    document.getElementById('vencimento').innerHTML = `Conta vencida!`
} else {
    console.log("Conta ativa.")
    document.getElementById('vencimento').innerHTML = `Conta Ativa!`
}

//diferença em dias entre duas datas

let dataInicial = new Date();
let dataFinal = new Date(2024, 11, 31);
let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))
console.log(diferencaDias);
document.getElementById('restante').innerHTML = `Dias restantes: ` + diferencaDias;