let currentTab = 0; // Etapa atual (começa na 0)
const tabs = document.querySelectorAll(".form-step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progress-bar");
const stepIndicators = document.querySelectorAll(".step-indicator");
const regForm = document.getElementById("regForm");
const navButtons = document.getElementById("form-navigation");
const loadingOverlay = document.getElementById("loading-overlay");
const successMessage = document.getElementById("success-message");

showTab(currentTab); // Mostra a etapa inicial

function showTab(n) {
    // Reseta a visualização de todas as abas
    tabs.forEach(tab => tab.classList.remove("active-step"));
    // Mostra a aba atual
    tabs[n].classList.add("active-step");

    // Controle dos botões
    if (n === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "inline";
    }

    if (n === (tabs.length - 1)) {
        nextBtn.innerHTML = "Finalizar Cadastro";
        populateSummary(); // Preenche o resumo na última etapa
    } else {
        nextBtn.innerHTML = "Próximo";
    }

    updateProgressBar(n);
}

function nextPrev(n) {
    // Se for para avançar, valida a etapa atual
    if (n === 1 && !validateForm()) return false;

    // Se estiver na última etapa e clicar em finalizar
    if (currentTab === tabs.length - 1 && n === 1) {
        submitForm();
        return;
    }

    // Esconde a aba atual
    tabs[currentTab].classList.remove("active-step");
    // Incrementa ou decrementa a aba atual
    currentTab = currentTab + n;

    // Se chegou ao final (segurança extra)
    if (currentTab >= tabs.length) {
        submitForm();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let valid = true;
    const currentTabInputs = tabs[currentTab].querySelectorAll("input[required], select[required], select[multiple]");

    currentTabInputs.forEach(input => {
        let isFieldValid = true;

        // Remove estado de erro anterior ao começar a validar
        input.classList.remove("invalid");

        // 1. Validação Padrão HTML5 (Required, Type)
        if (!input.checkValidity()) {
            isFieldValid = false;
        }

        // 2. Validações Customizadas JS
        if (input.id === 'phone') {
            // Remove tudo que não é dígito e verifica o tamanho
            const phoneDigits = input.value.replace(/\D/g, '');
            if (phoneDigits.length < 10) isFieldValid = false;
        }

        if (input.id === 'cep') {
            const cepDigits = input.value.replace(/\D/g, '');
            if (cepDigits.length !== 8) isFieldValid = false;
        }

        // Validação específica para Select Múltiplo
        if (input.multiple) {
            if (input.selectedOptions.length === 0) {
                 isFieldValid = false;
            }
        }

        // Aplica o resultado da validação
        if (!isFieldValid) {
            input.classList.add("invalid");
            valid = false;
        }
    });

    // Se encontrar um campo inválido, foca no primeiro deles
    if (!valid) {
        tabs[currentTab].querySelector(".invalid").focus();
    }

    return valid;
}

function updateProgressBar(n) {
    // Calcula a porcentagem (n+1 porque n começa em 0)
    const percent = ((n + 1) / tabs.length) * 100;
    progressBar.style.width = percent + "%";

    // Atualiza indicadores numéricos
    stepIndicators.forEach((indicator, index) => {
        if (index <= n) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function populateSummary() {
    // Dados Pessoais
    document.getElementById("sum-fullname").textContent = document.getElementById("fullname").value;
    document.getElementById("sum-email").textContent = document.getElementById("email").value;
    document.getElementById("sum-phone").textContent = document.getElementById("phone").value;
    document.getElementById("sum-dob").textContent = document.getElementById("dob").value.split('-').reverse().join('/'); // Formata data

    // Endereço
    const addressFull = `${document.getElementById("street").value}, ${document.getElementById("number").value} - ${document.getElementById("neighborhood").value}, ${document.getElementById("city").value}/${document.getElementById("state").value} - CEP: ${document.getElementById("cep").value}`;
    document.getElementById("sum-address").textContent = addressFull;

    const complement = document.getElementById("complement").value;
    if(complement) {
        document.getElementById("sum-complement").textContent = complement;
        document.getElementById("sum-complement-row").style.display = "block";
    } else {
        document.getElementById("sum-complement-row").style.display = "none";
    }

    // Perfil
    document.getElementById("sum-profession").textContent = document.getElementById("profession").value;
    document.getElementById("sum-company").textContent = document.getElementById("company").value || "Não informada";

    // Coletar múltiplos interesses
    const selectedInterests = Array.from(document.getElementById("interests").selectedOptions).map(option => option.text);
    document.getElementById("sum-interests").textContent = selectedInterests.join(", ");
}

function submitForm() {
    // Simulação de envio
    regForm.style.display = "none";
    navButtons.style.display = "none";
    loadingOverlay.style.display = "block";

    setTimeout(() => {
        loadingOverlay.style.display = "none";
        successMessage.style.display = "block";
        progressBar.style.width = "100%";
    }, 2500); // Espera 2.5 segundos para simular rede
}


// --- MÁSCARAS DE INPUT ---
// Remove a classe de erro assim que o usuário interage com o campo
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('invalid');
    });
});

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11); // Limita tamanho

    // Aplica máscara (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    }
    e.target.value = value;
});

const cepInput = document.getElementById('cep');
cepInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 8); // Apenas números, max 8
    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{1,3})$/, '$1-$2');
    }
    e.target.value = value;
});