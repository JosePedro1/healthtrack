var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signupButton = document.getElementById('signupButton');
    const successMessage = document.getElementById('successMessage');

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

   
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

    
    document.getElementById('goToLogin').addEventListener('click', function() {
        btnSignin.click(); 
    });
});
