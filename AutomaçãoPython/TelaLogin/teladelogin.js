document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var predefinedUsername = "admin";
    var predefinedPassword = "admin";

    if (username === predefinedUsername && password === predefinedPassword) {

        //alert("Login bem-sucedido!");
        window.location.href = "http://fakebsod.com/windows-8-and-10";
    } else {
        document.getElementById("errorMessage").textContent = "Nome de usuário ou senha incorretos.";
    }
});
