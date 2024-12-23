//Aqui estão alguns exemplos de métodos do console em JavaScript:

//console.log(): Exibe informações gerais. É o método mais usado para depuração e exibição de mensagens no console.

//console.error(): Exibe mensagens de erro no console. Geralmente usado para destacar falhas ou problemas no código.

//console.warn(): Exibe avisos. Pode ser usado para alertar o desenvolvedor sobre algo que não é um erro, mas que pode ser um comportamento inesperado.

//console.table(): Exibe dados em formato de tabela no console. É útil para visualizar arrays e objetos de maneira mais organizada.



//### 1. `console.log()`
//Este método exibe mensagens informativas, úteis para depuração geral.


let nome = "Maria";
console.log("Bem-vinda, " + nome + "!"); // Exibe "Bem-vinda, Maria!" no console


//### 2. `console.error()`
//Usado para exibir mensagens de erro. Ideal para destacar problemas no código.


let idade = -5;
if (idade < 0) {
    console.error("Erro: A idade não pode ser negativa."); // Exibe mensagem de erro
}

//### 3. `console.warn()`
//Exibe avisos, úteis para alertar sobre possíveis problemas que não são erros.

let altura = 300;
if (altura > 200) {
    console.warn("Aviso: Altura acima do limite recomendado."); // Exibe um aviso
}

//### 4. `console.table()`
//Organiza dados em formato de tabela, facilitando a visualização de arrays e objetos.


let alunos = [
    { nome: "João", idade: 20 },
    { nome: "Ana", idade: 22 },
    { nome: "Pedro", idade: 19 }
];
console.table(alunos); // Exibe os dados dos alunos em formato de tabela

//Esses métodos ajudam a analisar e depurar o código diretamente pelo console do navegador ou terminal Node.js.



/*
### 5. `console.dir()`
O `console.dir()` exibe uma representação de um objeto e suas propriedades, permitindo que você veja a estrutura interna do objeto em detalhes.*/

let pessoa = {
    nome: "Carlos",
    idade: 30,
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.dir(pessoa);  // Exibe a estrutura detalhada do objeto 'pessoa' no console

/*Esse comando é particularmente útil para inspecionar objetos complexos ou elementos DOM no navegador, mostrando propriedades que podem ser expandidas e exploradas.

### 6. `debugger;`
A instrução `debugger;` interrompe a execução do código e abre as ferramentas de desenvolvedor no navegador (ou o depurador no Node.js). É ideal para examinar variáveis e o estado do programa linha a linha.
*/

function saudacao(nome) {
    let mensagem = "Olá, " + nome + "!";
    debugger;  // Pausa a execução aqui para inspecionar as variáveis
    console.log(mensagem);
}

saudacao("Maria");

/*
Quando o código atinge `debugger;`, a execução é interrompida, e você pode inspecionar o valor de `mensagem` e outras variáveis no depurador.

### 7. `console.time()` e `console.timeEnd()`
Esses comandos permitem medir o tempo de execução de um trecho de código entre as chamadas `console.time()` e `console.timeEnd()`.

*/
console.time("tempoExecucao");  // Inicia o temporizador com o rótulo "tempoExecucao"

let soma = 0;
for (let i = 0; i < 1000000; i++) {
    soma += i;
}

console.timeEnd("tempoExecucao");  // Exibe o tempo decorrido desde o início do temporizador

/*
O console exibirá o tempo necessário para executar o loop `for`, útil para identificar gargalos de desempenho.

### 8. `console.trace()`
O `console.trace()` exibe a pilha de chamadas (stack trace), mostrando a sequência de funções que levaram ao ponto em que ele foi chamado.

*/

function funcaoA() {
    funcaoB();
}

function funcaoB() {
    funcaoC();
}

function funcaoC() {
    console.trace("Rastreamento da pilha de chamadas");  // Exibe a sequência de chamadas até aqui
}

funcaoA();

/*

Quando `console.trace()` é executado, o console mostrará o caminho das chamadas de funções (funcaoA → funcaoB → funcaoC), ajudando a entender como o código chegou a esse ponto.

Esses comandos são poderosos para análise de código e são usados para depuração mais avançada em aplicações JavaScript.*/