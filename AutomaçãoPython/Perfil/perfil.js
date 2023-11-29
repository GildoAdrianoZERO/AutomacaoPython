// Obter os dados do usuário armazenados no localStorage
var userData = JSON.parse(localStorage.getItem("userData"));

// Preencher os campos no perfil
document.getElementById("profileFullName").textContent = userData.fullName;
document.getElementById("profileEmail").textContent = userData.email;
document.getElementById("profileUsername").textContent = userData.username;
document.getElementById("profilePassword").textContent = userData.password;