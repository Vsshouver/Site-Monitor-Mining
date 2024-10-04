// Função de Login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de login
    if (username === "admin" && password === "senha") {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("main-container").classList.remove("hidden");
        loadCharts(); // Carregar os gráficos após o login
    } else {
        alert("Usuário ou senha inválidos!");
    }
    return false; // Para evitar recarregar a página
}

// Função para mostrar o conteúdo
function showContent(section) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(section).classList.remove("hidden");
}

// Ocultar cabeçalho na tela de login
const header = document.getElementById('header');
const button = document.getElementById('botaoLogin');

button.addEventListener('click', function() {
    header.style.display = 'block;'
});

// Função para logout
function logout() {
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
}

// Função para gerar um novo relatório
function generateReport() {
    alert("Relatório gerado com sucesso!");
}

// Função para carregar gráficos
function loadCharts() {
    // Gráfico de DF
    const dfCtx = document.getElementById('dfChart').getContext('2d');
    const dfChart = new Chart(dfCtx, {
        type: 'doughnut',
        data: {
            labels: ['Disponível', 'Indisponível'],
            datasets: [{
                data: [85, 15],
                backgroundColor: ['#CDA434', '#EAEAEA'],
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Disponibilidade Física (DF)'
                }
            }
        }
    });

    // Gráfico de UT
    const utCtx = document.getElementById('utChart').getContext('2d');
    const utChart = new Chart(utCtx, {
        type: 'doughnut',
        data: {
            labels: ['Utilização', 'Não Utilizado'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#CDA434', '#EAEAEA'],
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Utilização (UT)'
                }
            }
        }
    });

    // Gráfico de Produtividade
    const prodCtx = document.getElementById('prodChart').getContext('2d');
    const prodChart = new Chart(prodCtx, {
        type: 'doughnut',
        data: {
            labels: ['Produtiva', 'Não Produtiva'],
            datasets: [{
                data: [65, 35],
                backgroundColor: ['#CDA434', '#EAEAEA'],
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Produtividade de Equipamentos'
                }
            }
        }
    });
}
