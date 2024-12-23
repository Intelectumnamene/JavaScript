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

