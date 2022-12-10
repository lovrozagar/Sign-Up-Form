"use strict"

const password = document.querySelector('#password');
const confirmedPassword = document.querySelector('#confirm-password');
const errorAlert = document.querySelector('#pass');


confirmedPassword.addEventListener('input', () => {
    if (confirmedPassword.value != null && confirmedPassword.value !== password.value) {
        password.style.border = "1.5px solid #C54242";
        confirmedPassword.style.border = "1.5px solid #C54242";
        errorAlert.classList.add('no-match');
        return;
    }
    password.style.border = "1.5px solid #E7E9EC";
    confirmedPassword.style.border = "1.5px solid #E7E9EC";
    errorAlert.classList.remove('no-match');
});