const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = ""
    else
        textError.textContent = "Name is Incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input', function () {
    output.textContent = salary.value;
})

/*Email*/
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2})?$');
    if (emailRegex.test(email.value))
    emailError.textContent = ""
    else
    emailError.textContent = "Email is Incorrect";
});

/*Number*/
const number = document.querySelector('#contact');
const numError = document.querySelector('.number-error');
number.addEventListener('input', function () {
    let numRegex = RegExp("^[0-9]{10}$");
    if (numRegex.test(number.value))
    numError.textContent = ""
    else
    numError.textContent = "Number is Incorrect";
});

/*Password*/
const password = document.querySelector('#pwd');
const pwdError = document.querySelector('.password-error');
password.addEventListener('input', function () {
    let pwdRegex = RegExp("^[0-9A-Za-z!@#$%^&*?<>]{8,}$");
    if (pwdRegex.test(password.value))
    pwdError.textContent = ""
    else
    pwdError.textContent = "password is Incorrect";
});
