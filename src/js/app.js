// Evento para quando o DOM é completamente carregado
// document.addEventListener('DOMContentLoaded', function () {

    // Elementos do botão de login e signup
    let btnSignin = document.querySelector("#signin");
    let btnSignup = document.querySelector("#signup");

    // Containers de autenticação e de tarefas
    let body = document.querySelector("body");
    let authContainer = document.getElementById('authContainer');
    let taskContainer = document.getElementById('taskContainer');

    // Troca para a tela de login
    btnSignin.addEventListener("click", function () {
        body.className = "sign-in-js";
    });

    // Troca para a tela de cadastro
    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
    });

    // Exibe a tela de tarefas ao fazer login
    let loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        authContainer.style.display = 'none';
        taskContainer.style.display = 'block';
    });

    // Evento para logout, volta à tela de login
    let logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            taskContainer.style.display = 'none';
            authContainer.style.display = 'flex';
            body.className = "sign-in-js";
        });
    }

    // Elementos do formulário de signup
    let signupForm = document.getElementById('signupForm');
    let signupButton = document.getElementById('signupButton');
    let successMessage = document.getElementById('successMessage');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let goToLogin = document.getElementById('goToLogin');

    // Função para habilitar/desabilitar o botão de cadastro com base nos campos
    function checkFormFields() {
        if (username.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '') {
            signupButton.disabled = false;
        } else {
            signupButton.disabled = true;
        }
    }

    // Verificação dos campos de cadastro conforme o usuário digita
    username.addEventListener('input', checkFormFields);
    email.addEventListener('input', checkFormFields);
    password.addEventListener('input', checkFormFields);

    // Submissão do formulário de signup e exibição da mensagem de sucesso
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!signupButton.disabled) {
            signupForm.style.display = 'none';
            successMessage.style.display = 'block';
        }
    });

    // Botão para voltar à tela de login a partir da tela de cadastro
    goToLogin.addEventListener('click', function () {
        btnSignin.click();
        signupForm.style.display = 'block';
        successMessage.style.display = 'none';
        signupForm.reset();
        signupButton.disabled = true;
    });

    // Elementos para adicionar tarefas
    let addTaskButton = document.getElementById('addTaskButton');
    let taskList = document.getElementById('taskList');

    // Campos do formulário de nova tarefa
    let taskTitle = document.getElementById('taskTitle');
    let taskResponsible = document.getElementById('taskResponsible');
    let taskPriority = document.getElementById('taskPriority');
    let taskDate = document.getElementById('taskDate');

    // Evento para adicionar nova tarefa à lista de tarefas
    addTaskButton.addEventListener('click', function () {
        let title = taskTitle.value.trim();
        let responsible = taskResponsible.value.trim();
        let priority = taskPriority.value;
        let date = taskDate.value;

        // Verifica se todos os campos estão preenchidos
        if (title !== '' && responsible !== '' && priority !== '' && date !== '') {

            // Cria o elemento de tarefa
            let taskItem = document.createElement('div');
            taskItem.classList.add('task-item');

            // Detalhes da tarefa
            let taskDetailTitle = document.createElement('p');
            taskDetailTitle.classList.add('task-detail');
            taskDetailTitle.textContent = 'Tarefa: ' + title;

            let taskDetailResponsible = document.createElement('p');
            taskDetailResponsible.classList.add('task-detail');
            taskDetailResponsible.textContent = 'Responsável: ' + responsible;

            let taskDetailPriority = document.createElement('p');
            taskDetailPriority.classList.add('task-detail');
            taskDetailPriority.textContent = 'Prioridade: ' + priority;

            let taskDetailDate = document.createElement('p');
            taskDetailDate.classList.add('task-detail');
            taskDetailDate.textContent = 'Data de Entrega: ' + new Date(date).toLocaleDateString();

            // Adiciona os detalhes ao item de tarefa
            taskItem.appendChild(taskDetailTitle);
            taskItem.appendChild(taskDetailResponsible);
            taskItem.appendChild(taskDetailPriority);
            taskItem.appendChild(taskDetailDate);

            // Adiciona o item de tarefa à lista de tarefas
            taskList.appendChild(taskItem);

            // Limpa os campos do formulário após a adição da tarefa
            taskTitle.value = '';
            taskResponsible.value = '';
            taskPriority.value = '';
            taskDate.value = '';
        } else {
            // Alerta se algum campo estiver vazio
            alert('Preencha todos os campos antes de adicionar uma tarefa.');
        }
    });
