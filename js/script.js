
const criarContaBtn = document.getElementById("criar-conta-btn");
const loginBtn = document.getElementById("login-btn");


const criarContaDialog = document.getElementById("criar-conta-dialog");
const fecharModalBtn = document.getElementById("fechar-modal");
const loginDialog = document.getElementById("login-dialog");
const fecharLoginModalBtn = document.getElementById("fechar-login-modal");


function openDialog(dialog) {
    dialog.showModal();
}


function closeDialog(dialog) {
    dialog.close();
}


criarContaBtn.addEventListener("click", () => openDialog(criarContaDialog));
loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openDialog(loginDialog);
});
fecharModalBtn.addEventListener("click", () => closeDialog(criarContaDialog));
fecharLoginModalBtn.addEventListener("click", () => closeDialog(loginDialog));


function closeDialogOnOutsideClick(dialog) {
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
            closeDialog(dialog);
        }
    });
}

closeDialogOnOutsideClick(criarContaDialog);
closeDialogOnOutsideClick(loginDialog);


const form = document.getElementById("form-cadastro");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

email.addEventListener("blur", () => checkInputEmail());
username.addEventListener("blur", () => checkInputUsername());
password.addEventListener("blur", () => checkInputPassword());
passwordConfirmation.addEventListener("blur", () => checkInputPasswordConfirmation());

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
        form.reset();
        setTimeout(hideMessage, 1000);
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    formItem.classList.add("error");
    showMessage(message, "error");
    setTimeout(hideMessage, 1000);
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


const loginForm = document.getElementById("form-login");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkLoginForm();
});

loginEmail.addEventListener("blur", () => checkInputLoginEmail());
loginPassword.addEventListener("blur", () => checkInputLoginPassword());

function checkInputLoginEmail() {
    const emailValue = loginEmail.value;
    if (emailValue === "") {
        errorInput(loginEmail, "O email é obrigatório.");
        return false;
    } else {
        removeError(loginEmail);
        return true;
    }
}

function checkInputLoginPassword() {
    const passwordValue = loginPassword.value;
    if (passwordValue === "") {
        errorInput(loginPassword, "A senha é obrigatória.");
        return false;
    } else {
        removeError(loginPassword);
        return true;
    }
}

function checkLoginForm() {
    const isEmailValid = checkInputLoginEmail();
    const isPasswordValid = checkInputLoginPassword();
    if (isEmailValid && isPasswordValid) {
        showMessage("LOGIN COM SUCESSO!", "success");
        loginForm.reset();
        setTimeout(hideMessage, 1000);
    }
}

window.watsonAssistantChatOptions = {
    integrationID: "ef970137-0a80-48fc-b5cd-a8248df53058",
    region: "au-syd",
    serviceInstanceID: "1a4679c3-4026-4987-90a8-8e82c5ac3ef9",
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
