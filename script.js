// Função para realizar o login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("main-container").classList.remove("hidden");
        return false; // Impede o envio do formulário
    } else {
        alert("Usuário ou senha incorretos!");
        return false;
    }
}

// Função para alternar entre seções do conteúdo
function showContent(section) {
    var sections = document.getElementsByClassName("content-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden");
    }
    document.getElementById(section).classList.remove("hidden");
    document.getElementById("main-title").innerText = section.charAt(0).toUpperCase() + section.slice(1);
}

// Função para realizar logout
function logout() {
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
}
