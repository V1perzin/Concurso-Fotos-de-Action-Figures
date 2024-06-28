function validateForm() {
    let isValid = true;

    // Reset previous errors
    document.querySelectorAll('.error').forEach(element => {
        element.textContent = '';
    });

    // Validate Nome
    let nome = document.getElementById('nome').value.trim();
    if (nome === '') {
        document.getElementById('error-nome').textContent = 'Campo obrigatório';
        isValid = false;
    }

    // Validate Email
    let email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('error-email').textContent = 'Campo obrigatório';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('error-email').textContent = 'Email inválido';
        isValid = false;
    }

    function validarTelefone() {
        // Resetar mensagens de erro
        document.getElementById('error-telefone').textContent = '';
    
        // Pegar valor do campo telefone e remover espaços em branco
        let telefone = document.getElementById('telefone').value.trim();
    
        // Padrão para aceitar exatamente 11 dígitos numéricos
        let telefonePattern = /^\d{9,11}$/;
    
        // Validar telefone
        if (telefone === '') {
            document.getElementById('error-telefone').textContent = 'Campo obrigatório';
        } else if (!telefonePattern.test(telefone)) {
            document.getElementById('error-telefone').textContent = 'Telefone deve conter exatamente 11 dígitos numéricos';
        } else {
            // Telefone válido
            alert('Telefone válido: ' + telefone);
            // Aqui você pode fazer qualquer ação adicional, como enviar o formulário, etc.
        }
    }

    // Validate Foto
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
        // You can also check for file size here if needed
    }

    return isValid;
}

function isValidEmail(email) { /*função não habilitada é necessário back-end*/
    // Basic email validation using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
