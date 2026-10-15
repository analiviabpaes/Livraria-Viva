document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo Mobile
    const menuToggle = document.getElementById('menuToggle');
    const menuNav = document.getElementById('menuNav');

    if (menuToggle && menuNav) {
        menuToggle.addEventListener('click', () => {
            menuNav.classList.toggle('ativo');
        });
    }

    // Validação do Formulário de Contacto
    const formContato = document.getElementById('formContato');
    const feedback = document.getElementById('mensagemFeedback');

    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                exibirFeedback('Por favor, preencha todos os campos do formulário.', 'erro');
                return;
            }

            if (!validarEmail(email)) {
                exibirFeedback('Por favor, insira um endereço de e-mail válido.', 'erro');
                return;
            }

            exibirFeedback('Mensagem enviada com sucesso! Obrigado pelo seu contacto.', 'sucesso');
            formContato.reset();
        });
    }

    function exibirFeedback(texto, tipo) {
        feedback.textContent = texto;
        feedback.className = `feedback ${tipo}`;
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});