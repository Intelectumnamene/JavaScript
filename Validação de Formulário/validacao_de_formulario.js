// Selecionando o formulário e os campos
const formulario = document.getElementById("meuFormulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

// Selecionando os elementos para exibir erros
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

// Adicionando evento de envio do formulário
formulario.addEventListener("submit", function(event) {
    let valido = true;

    // Resetando mensagens de erro
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";

    // Validação do campo Nome
    if (nome.value.trim() === "") {
        erroNome.textContent = "O nome é obrigatório.";
        valido = false;
    } else if (nome.value.trim().length < 3) {
        erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
        valido = false;
    }

    // Validação do campo E-mail
    if (email.value.trim() === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        valido = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
        erroEmail.textContent = "Insira um e-mail válido.";
        valido = false;
    }

    // Validação do campo Senha
    if (senha.value.trim() === "") {
        erroSenha.textContent = "A senha é obrigatória.";
        valido = false;
    } else if (senha.value.trim().length < 6) {
        erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        valido = false;
    }

    // Impede o envio do formulário se houver erros
    if (!valido) {
        event.preventDefault();
    }
});
