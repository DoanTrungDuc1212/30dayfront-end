var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");


function showError(input, message) {
    let parent = input.parentElement;

    let small = parent.querySelector('small');
    console.log(parent);
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = "";
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, "Không được để trống");
            isEmptyError = true;
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);
    if (isEmailError) {
        showError(input, "Email không tồn tại")
    } else {
        showSuccess(input);
    }
    return isEmailError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min) {
        showError(input, `Độ dài tối thiểu ${min} ký tự`)
        return true;
    }

    if (input.value.length > max) {
        showError(input, `Độ dài tối đa ${max} ký tự`)
        return true;
    }

    showSuccess(input)
    return false;
}

function checkMatchPassword(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, "Mật khẩu không khớp")
        return true;
    }
    return false;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 6, 20);
    let isCheckMatchPassword = checkMatchPassword(password, confirmPassword);

    if (isEmptyError || isEmailError || isUsernameLengthError || isCheckMatchPassword) {
        //Do nothing
    }
    else{
        //logic, call API, ....
    }
})