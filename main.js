// E-MAIL

const emailRegExp = /^(([^<>(){}[\].!?#%^-_,=+*&"':\s@]+(\.[^<>(){}[\].!?#%^-_,=+*&"':\s@]+)*)|(".+"))@(([^<>(){}[\].!?#%^-_,=+*&"':\s@]+\.)+[^<>(){}[\].!?#%^-_,=+*&"':\s@]{2,})$/iu
const emailInput = document.querySelector('input')

function isEmailValid(value) {
    return emailRegExp.test(value)
}
function email() {
    if (isEmailValid(emailInput.value)) {
        emailInput.style.borderColor = 'green'
    } else {
        emailInput.style.borderColor = 'red'
    }
}
emailInput.addEventListener('email', email)

// PASSWORD

const passwordRegExp = /(?=.*)[0-9a-zA-Z._]{8,}/
const passInput= document.getElementById('password')

function isPasswordValid(value) {
    return passwordRegExp.test(value)
}
function password() {
    if (isPasswordValid(passInput.value)) {
        passInput.style.borderColor = 'green'
    } else {
        passInput.style.borderColor = 'red'
    }
}
passInput.addEventListener('password', password)

const showPassword = document.getElementById("showPassword")
const button = () => {
    const password = document.getElementById('password')
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}
showPassword.addEventListener('change',button)

//CONFIRM PASSWORD

const conPassword = /(?=.*)[0-9a-zA-Z._]{8,}/
const conInput= document.getElementById('confirmPassword')

function isConPasswordValid(value) {
    return conPassword.test(value)
}

function confirmPassword() {
    if (isConPasswordValid(conInput.value)) {
        conInput.style.borderColor = 'green'
    } else {
        conInput.style.borderColor = 'red'
    }
}
conInput.addEventListener('password', confirmPassword)

const showPassword2 = document.getElementById("showPassword2")
const button2 = () => {
    const password2 = document.getElementById('confirmPassword')
    if (password2.type === 'password') {
        password2.type = 'text'
    } else {
        password2.type = 'password'
    }
}
showPassword2.addEventListener('change',button2)




