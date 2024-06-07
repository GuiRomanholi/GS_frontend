// Seleciona o botão "Criar Conta"
const criarContaBtn = document.getElementById("criar-conta-btn");

// Seleciona o botão "Login"
const loginBtn = document.getElementById("login-btn");

// Seleciona o modal de criação de conta
const criarContaDialog = document.getElementById("criar-conta-dialog");

// Seleciona o botão de fechar o modal
const fecharModalBtn = document.getElementById("fechar-modal");

// Evento de clique no botão "Criar Conta"
criarContaBtn.addEventListener("click", () => {
    criarContaDialog.showModal();
});

// Evento de clique no botão "Login"
loginBtn.addEventListener("click", () => {
    // Redirecionar para a página de login
    window.location.href = "./paginas/login.html";
});

// Evento de clique no botão de fechar o modal
fecharModalBtn.addEventListener("click", () => {
    criarContaDialog.close();
});

