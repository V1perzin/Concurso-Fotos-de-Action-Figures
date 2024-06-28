function validateForm() {
    let isValid = true;

    // Redefinir erros anteriores
    document.querySelectorAll('.error').forEach(element => {
        element.textContent = '';
    });

    // Validar Nome
    let nome = document.getElementById('nome').value.trim();
    if (nome === '') {
        document.getElementById('error-nome').textContent = 'Campo obrigatório';
        isValid = false;
    }

    // Validar Email
    let email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('error-email').textContent = 'Campo obrigatório';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('error-email').textContent = 'Email inválido';
        isValid = false;
    }

    // Validar Telefone
    function validarTelefone() {
        // Resetar mensagens de erro
        document.getElementById('error-telefone').textContent = '';
    
        // Pegar valor do campo telefone e remover espaços em branco
        let telefone = document.getElementById('telefone').value.trim();
    
        // Padrão para aceitar entre 9 a 11 dígitos
        let telefonePattern = /^\d{9,11}$/;
    
        // Validar telefone
        if (telefone === '') {
            document.getElementById('error-telefone').textContent = 'Campo obrigatório';
        } else if (!telefonePattern.test(telefone)) {
            document.getElementById('error-telefone').textContent = 'Telefone deve conter exatamente 11 dígitos numéricos';
        } else {
            // Telefone válido
            alert('Telefone válido: ' + telefone);
        }
    }

    // Validar Foto
    let foto = document.getElementById('foto').files[0];
    if (!foto) {
        document.getElementById('error-foto').textContent = 'Anexe uma foto';
        isValid = false;
    } else {
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedExtensions.exec(foto.name)) {
            document.getElementById('error-foto').textContent = 'Formato de arquivo inválido';
            isValid = false;
        }
        // Também é possível verificar o número do arquivo, se necessário.
    }

    return isValid;
}

function isValidEmail(email) { /*função não habilitada é necessário back-end*/
    // Validação básica de email usando REGEX (Aprimoramento futuro).
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}