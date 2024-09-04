document.addEventListener('DOMContentLoaded', function() {
    var btnSignin = document.querySelector("#signin");
    var btnSignup = document.querySelector("#signup");

    var body = document.querySelector("body");

    btnSignin.addEventListener("click", function () {
       body.className = "sign-in-js"; 
    });

    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
    });

    var signupForm = document.getElementById('signupForm');
    var signupButton = document.getElementById('signupButton');
    var successMessage = document.getElementById('successMessage');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var goToLogin = document.getElementById('goToLogin');
    var loginButton = document.getElementById('loginButton');
    var taskListContainer = document.getElementById('taskListContainer');
    var authContainer = document.getElementById('authContainer');

    function checkFormFields() {
        if (username.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '') {
            signupButton.disabled = false;
        } else {
            signupButton.disabled = true;
        }
    }

    username.addEventListener('input', checkFormFields);
    email.addEventListener('input', checkFormFields);
    password.addEventListener('input', checkFormFields);

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!signupButton.disabled) {
            signupForm.style.display = 'none';
            successMessage.style.display = 'block';
        }
    });

    goToLogin.addEventListener('click', function() {
        btnSignin.click(); 
    });

    loginButton.addEventListener('click', function() {
        authContainer.style.display = 'none';
        taskListContainer.style.display = 'flex';
    });

    var addTaskButton = document.getElementById('addTaskButton');
    var taskList = document.getElementById('taskList');
    var newTaskInput = document.getElementById('newTaskInput');

    addTaskButton.addEventListener('click', function() {
        var taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            var li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            newTaskInput.value = "";
        }
    });
});
