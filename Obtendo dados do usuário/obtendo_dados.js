// Importa o módulo 'readline' do Node.js, usado para interagir com o terminal
const readline = require('readline');

// Cria uma interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,  // Define que a entrada virá do teclado (stdin)
    output: process.stdout // Define que a saída será exibida no terminal (stdout)
});

// Faz uma pergunta ao usuário e aguarda uma resposta
rl.question("Qual é o seu nome? ", (nome) => {
    // Exibe uma mensagem no terminal usando o nome que o usuário digitou
    console.log(`Olá, ${nome}!`);
    
    // Fecha a interface após capturar a entrada do usuário
    rl.close();
});

