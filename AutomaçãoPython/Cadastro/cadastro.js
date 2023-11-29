// cadastro.js
document.getElementById("meuFormulario").addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada é a tecla Enter (código 13)
    if (event.key === "Enter") {
        // Chama a função de envio do formulário
        cadastrarUsuario();
    }
});

function cadastrarUsuario() {
    // Obter os valores do formulário de cadastro
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;

    // Verificar se os campos são preenchidos
    if (username && password && fullName && email) {
        // Armazenar os dados no localStorage (simulação de armazenamento)
        var userData = {
            username: username,
            password: password,
            fullName: fullName,
            email: email
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        // Redirecionar para a tela de login
        window.location.href = "Login/login.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
