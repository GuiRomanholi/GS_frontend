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

const form = document.getElementById("form-cadastro");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
});

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha um username!");
    return false;
  } else {
    removeError(username);
    return true;
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
    return false;
  } else {
    removeError(email);
    return true;
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
    return false;
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    return false;
  } else {
    removeError(password);
    return true;
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
    return false;
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
    return false;
  } else {
    removeError(passwordConfirmation);
    return true;
  }
}

function checkForm() {
  const isUsernameValid = checkInputUsername();
  const isEmailValid = checkInputEmail();
  const isPasswordValid = checkInputPassword();
  const isConfirmationValid = checkInputPasswordConfirmation();

  if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmationValid) {
    showMessage("CADASTRADO COM SUCESSO!", "success");
    form.reset(); // Resetar o formulário após sucesso
    setTimeout(hideMessage, 1000); // Ocultar a mensagem após 3 segundos
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  formItem.classList.add("error");
  showMessage(message, "error");
  setTimeout(hideMessage, 1000); // Ocultar a mensagem de erro após 3 segundos
}

function removeError(input) {
  const formItem = input.parentElement;
  formItem.classList.remove("error");
  hideMessage();
}

function showMessage(message, type) {
  const modalErro = document.querySelector("#msg-erro");
  const modalText = modalErro.querySelector("h1");
  modalText.textContent = message;
  modalErro.className = `message ${type}`;
  modalErro.showModal();
  modalErro.style.top = "50%";
  modalErro.style.left = "50%";
  modalErro.style.transform = "translate(-50%, -50%)";
}

function hideMessage() {
  const modalErro = document.querySelector("#msg-erro");
  modalErro.close();
}
