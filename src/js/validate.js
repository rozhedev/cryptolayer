'use strict'

window.addEventListener('DOMContentLoaded', function () {

    // Валидация форм регистрации и входа

    const signUpform = document.querySelector('#signup__form'),
        fullName = document.querySelector('#fullname'),
        username = document.querySelector('#username'),
        email = document.querySelector('#email'),
        pass = document.querySelector('#password'),
        confirm = document.querySelector('#confirm'),
        checkbox = document.querySelector('#checkbox');


    signUpform.addEventListener('submit', function (e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const fullNameValue = fullName.value.trim(),
            usernameValue = username.value.trim(),
            emailValue = email.value.trim(),
            passValue = pass.value.trim(),
            confirmValue = confirm.value.trim();

        if (fullNameValue === '') {
            setErrorFor(fullName, "Fullname can't be blank");
        } else {
            setSuccessFor(fullName);
        }
        if (usernameValue === '') {
            setErrorFor(username, "Username can't be blank");
        } else {
            setSuccessFor(username);
        }
        if (emailValue === '') {
            setErrorFor(email, "Email can't be blank");
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, "Please enter email correctly");
        } else {
            setSuccessFor(email);
        }
        if (passValue === '') {
            setErrorFor(pass, "Password can't be blank");
        } else {
            setSuccessFor(pass);
        }
        if (confirmValue === '') {
            setErrorFor(confirm, "Confirm input can't be blank");
        } else if (passValue !== confirmValue) {
            setErrorFor(confirm, "Password doesn't match");
        } else {
            setSuccessFor(confirm);
        }
        if (checkbox.checked == false) {
            setErrorFor(checkbox, "You need to agree with the rules");
        } else {
            setSuccessFor(checkbox);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        formControl.classList.remove('success');
        formControl.classList.add('error');
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;

        formControl.classList.remove('error');
        formControl.classList.add('success');
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    // Validation login form

    // const loginForm = document.querySelector('#login__form'),
    // loginUser = document.querySelector('#username2'),
    // loginPass = document.querySelector('#password2');

    // loginForm.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     checkLogIn();
    // });

    // function checkLogIn() {
    //     const loginUserValue = loginUser.value.trim(),
    //         loginPassValue = loginPass.value.trim();

    //     if (loginUserValue === '') {
    //         setErrorFor(loginUser, "Username can't be blank");
    //     } else {
    //         setSuccessFor(loginUser);
    //     }
    //     if (loginPassValue === '') {
    //         setErrorFor(loginPass, "Password can't be blank");
    //     } else {
    //         setSuccessFor(loginPass);
    //     }
    // }
})