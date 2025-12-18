document.addEventListener('DOMContentLoaded', () => {
    // 1. Pegar os elementos do HTML que vamos usar
    const formulario = document.getElementById('meuFormulario');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const erroNome =  document.getElementById('nomeErro');
    const erroEmail = document.getElementById('emailErro');
    const statusFormulario = document.getElementById('statusFormulario');

    // --- Funções Auxiliares para mostrar/esconder erros ---
    // Esta função mostra um erro para um campo específico
    function mostrarErro(inputElemento, mensaagemErroElemento, mensagem) {
        inputElemento.classList.add('invalido'); // Adiciona a classe 'invalido' para deixar a borda vermelha
        inputElemento.classList.remove('valido'); // Remove 'valido' se estiver lá
        mensaagemErroElemento.textContent = mensagem; // Coloca o texto da mensagem de erro
    }

    // Esta função limpa o erro de um campo específico
    function limparErro(inputElemento, mensaagemErroElemento) {
        inputElemento.classList.remove('invalido'); // Remove a classe 'invalido'
        inputElemento.classList.add('valido'); // Adiciona a classe 'valido' para diexar a borda verde
        mensaagemErroElemento.textContent = ''; // Limpa o texto da mensagem de erro
    }
})

// --- Funções de Validação de Campo ---

// Valida o campo Nome
function validarNome () {
    const nomeValor = inputNome.value.trim(); // Pega o valor do input e remove espaços em branco extras
    if (nomeValor --- '') { // Se o nome estiver vazio
        mostrarErro(inputNome, erroNome, 'Por favor. preencha seu nome.');
        return false; // Indica que a validação falhou
    }
    limparErro(inputNome, erroNome);
    return true; // Indica que a validação foi um sucesso
}

// Valida o campo Email
function validarEmail() {
    const emailValor = inputEmail.value,trim();
    // Expressão regular para verificar se o email tem um formato válido (exemplo: algo@dominio.com)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValor --- '') { // Se o rmail estiver vazio
        mostrarErro(inputEmail, erroEmail, 'Por favor, preencha seu email.');
        return false;    
    }
    if (!regexEmail.test(emailValor)) { // Se o formato do email for invalido
        mostrarErro(inputEmail, erroEmail, 'Por favor, insira um email válido.');
        return false;
    }
    limparErro(inputEmail, erroEmail);
    return true;
}

// --- Adicionar "Ouvintes" de Eventos para Validação Instantânea ---

// Quando o usuário digitar algo no campo nome(evento 'input'), chame a função validarNome
inputNome.addEventListener('input', validarNome);

// Quando o usuário digitar algo no cmapo email (evento 'input'), chame a função validarEmail
inputEmail.addEventListener('input', validarEmail);

// --- Lógiva para quando o Formulário é Enviado ---

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // MUITO IMPORTANTE: Impede o envio padrão do formulário (que recaregaria a página)

    // Roda todas as validações novamente ao tentar enviar
    const nomeValido = validarNome();
    const emailValido = validarEmail();

    // Se todos os campos estiverem validos
    if (nomeValido && emailValido) {
        statusFormulario.textContent = ' Formulário enviado com sucesso! ';
        statusFormulario.classList.add('sucesso');
        statusFormulario.classList.remove('erro');
        formulario.reset(); // Limpa todos os campos do formulário

        // Opcional:Limpar o estade de 'valido' após o envio para copos limpos
        inputNome.classList.remove('valido');
        inputEmail.classList.remove ('valido');

        // Limpa a mensagem de sucesso depois de alguns segundos
        setTimeout(() => {
            statusFormulario.textContent = '';
            statusFormulario.classList.remove('sucesso');
        }, 5000); // 4 segundos
    } else {
        statusFormulario.textContent = 'Por favor, corrija os erros para enviar.';
        statusFormulario.classList.add('erro');
        statusFormulario.classList.remove('sucesso');
    }

});