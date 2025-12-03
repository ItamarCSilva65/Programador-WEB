document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');
    const forgotPassword = document.getElementById('forgotPassword');
    const signupLink = document.getElementById('signupLink');


    
    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Função para validar senha
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Validação em tempo real
    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#ff6b6b';
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (validatePassword(passwordInput.value)) {
            passwordError.style.display = 'none';
            passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            passwordError.style.display = 'block';
            passwordInput.style.borderColor = '#ff6b6b';
        }
    });
    
    // Envio do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValid = validateEmail(emailInput.value);
        const passwordValid = validatePassword(passwordInput.value);
        
        if (emailValid && passwordValid) {
            // Simulação de login bem-sucedido
            loginSuccess.style.display = 'block';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            // Aqui você normalmente enviaria os dados para o servidor
            console.log('Login realizado:', {
                email: emailInput.value,
                password: passwordInput.value
            });
            
            // Redirecionar após um breve delay (simulação)
            setTimeout(function() {
                alert('Login realizado com sucesso! Redirecionando...');
            }, 1000);
        } else {
            if (!emailValid) {
                emailError.style.display = 'block';
                emailInput.style.borderColor = '#ff6b6b';
            }
            if (!passwordValid) {
                passwordError.style.display = 'block';
                passwordInput.style.borderColor = '#ff6b6b';
            }
        }
    });
    
    // Link "Esqueci minha senha"
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha será implementada em breve!');
    });
    
    // Link "Cadastre-se"
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecionando para página de cadastro...');
        // window.location.href = 'signup.html'; // Descomente para redirecionar
    });
});


// VARIÁVEIS GLOBAIS
    
const body = document.body;
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const highContrastBtn = document.getElementById('high-contrast');
const normalViewBtn = document.getElementById('normal-view');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password');
const successMessage = document.getElementById('success-message');


// CONTROLES DE FONTE


// Aumenta o tamanho da fonte em 20%
increaseFontBtn.addEventListener('click', function() {
    body.classList.add('large-text');
    body.classList.remove('high-contrast');
    showTemporaryMessage('Tamanho da fonte aumentado. Pressione Ctrl+0 para voltar ao normal.');
    // Move o foco para o título principal para feedback
    document.getElementById('main-title').focus();
});

// Diminui o tamanho da fonte (volta ao normal)
decreaseFontBtn.addEventListener('click', function() {
    body.classList.remove('large-text');
    body.classList.remove('high-contrast');
    showTemporaryMessage('Tamanho da fonte redefinido.');
});


// CONTROLES DE CONTRASTE


// Ativa o modo de alto contraste
highContrastBtn.addEventListener('click', function() {
    body.classList.add('high-contrast');
    body.classList.remove('large-text');
    showTemporaryMessage('Modo de alto contraste ativado.');
});

// Volta à visualização normal
normalViewBtn.addEventListener('click', function() {
    body.classList.remove('high-contrast');
    body.classList.remove('large-text');
    showTemporaryMessage('Visualização normal ativada.');
});

// MOSTRAR/OCULTAR SENHA


togglePasswordBtn.addEventListener('click', function() {
    const isPasswordVisible = passwordInput.type === 'text';
    
    // Alterna entre tipo password e text
    if (isPasswordVisible) {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = 'Mostrar';
        togglePasswordBtn.setAttribute('aria-label', 'Mostrar senha');
        togglePasswordBtn.setAttribute('aria-pressed', 'false');
    } else {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = 'Ocultar';
        togglePasswordBtn.setAttribute('aria-label', 'Ocultar senha');
        togglePasswordBtn.setAttribute('aria-pressed', 'true');
    }
});

// FUNÇÕES AUXILIARES NECESSÁRIAS
     
     // Mostra mensagem de erro para um campo específico
     function showError(inputElement, message) {
        const errorId = inputElement.id + '-error';
        const errorElement = document.getElementById(errorId);
        
        // Adiciona classe de erro ao input
        inputElement.classList.add('error');
        inputElement.setAttribute('aria-invalid', 'true');
        
        // Mostra mensagem de erro
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Foca no campo com erro
        inputElement.focus();
    }
    
    // Reseta todas as mensagens de erro
    function resetErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        const inputs = document.querySelectorAll('input');
        
        errorMessages.forEach(function(error) {
            error.style.display = 'none';
            error.textContent = '';
        });
        
        inputs.forEach(function(input) {
            input.classList.remove('error');
            input.setAttribute('aria-invalid', 'false');
        });
    }
    
    // Mostra mensagem temporária no topo da página
    function showTemporaryMessage(message) {
        // Cria elemento para a mensagem
        const messageElement = document.createElement('div');
        messageElement.setAttribute('role', 'status');
        messageElement.setAttribute('aria-live', 'polite');
        messageElement.style.cssText = `
            position: fixed;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #3498db;
            color: white;
            padding: 15px 20px;
            border-radius: 4px;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            max-width: 90%;
            text-align: center;
        `;
        messageElement.textContent = message;
        
        // Adiciona ao body
        document.body.appendChild(messageElement);
        
        // Remove após 3 segundos
        setTimeout(function() {
            messageElement.remove();
        }, 3000);
    }
    
    // MELHORIAS DE NAVEGAÇÃO POR TECLADO
    
    // Adiciona navegação por teclado na barra de acessibilidade
    const accessibilityButtons = document.querySelectorAll('.accessibility-btn');
    
    accessibilityButtons.forEach((button, index) => {
        // Navegação com Tab entre botões
        button.addEventListener('keydown', function(event) {
            // Enter ou Space ativa o botão
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
            
            // Setas direcionais navegam entre botões (para usuários que não usam Tab)
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                const nextButton = accessibilityButtons[index + 1] || accessibilityButtons[0];
                nextButton.focus();
            }
            
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                const prevButton = accessibilityButtons[index - 1] || accessibilityButtons[accessibilityButtons.length - 1];
                prevButton.focus();
            }
        });
    });
    
    // Foco no primeiro campo ao carregar a página
    usernameInput.focus();
    
    // TRATAMENTO DO LINK "ESQUECI MINHA SENHA"
    
    document.getElementById('forgot-password').addEventListener('click', function(event) {
        event.preventDefault();
        showTemporaryMessage('Em uma aplicação real, você seria redirecionado para a página de recuperação de senha.');
        
        // Em uma aplicação real, aqui seria o redirecionamento
        // window.location.href = '/recuperar-senha';
    });
    
    // SUPORTE A TECLAS DE ATALHO
    
    document.addEventListener('keydown', function(event) {
        // Alt+1 vai para o conteúdo principal
        if (event.altKey && event.key === '1') {
            event.preventDefault();
            document.getElementById('main-title').focus();
        }
        
        // Alt+2 vai para o formulário de login
        if (event.altKey && event.key === '2') {
            event.preventDefault();
            usernameInput.focus();
        }
        
        // Ctrl+0 volta ao tamanho normal da fonte
        if (event.ctrlKey && event.key === '0') {
            event.preventDefault();
            body.classList.remove('large-text');
            body.classList.remove('high-contrast');
            showTemporaryMessage('Tamanho da fonte redefinido.');
        }
    });
    
    // INICIALIZAÇÃO FINAL
    
    // Anuncia recursos de acessibilidade para leitores de tela
    // (apenas uma vez, quando a página carrega)
    setTimeout(function() {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.classList.add('visually-hidden');
        announcement.textContent = 'Página de login acessível carregada. Use Alt+1 para ir ao conteúdo principal ou Alt+2 para ir ao formulário de login.';
        document.body.appendChild(announcement);
        
        // Remove após ser lido
        setTimeout(function() {
            announcement.remove();
        }, 1000);
    }, 1000);


