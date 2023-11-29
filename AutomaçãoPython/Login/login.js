document.getElementById("loginButton").addEventListener("click", function() {
    // Obter os valores de nome de usuário e senha digitados
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Obter os dados de usuário armazenados no localStorage
    var userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && username === userData.username && password === userData.password) {
        //Alerta e Redirecionar para a tela de perfil
        alert("Login bem-sucedido!");
        window.location.href = "perfil.html";
    } else {
        // Exibir mensagem de erro
        document.getElementById("errorMessage").textContent = "Nome de usuário ou senha incorretos."; 
    }
});