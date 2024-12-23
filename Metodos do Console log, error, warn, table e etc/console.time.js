console.time("tempoExecucao");  // Inicia o temporizador com o rótulo "tempoExecucao"

let soma = 0;
for (let i = 0; i < 10; i++) {
    soma += i;
}

console.timeEnd("tempoExecucao");  // Exibe o tempo decorrido desde o início do temporizador