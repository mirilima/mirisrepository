document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});