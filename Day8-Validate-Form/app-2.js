var username = document.querySelector('#username');
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");

var form = document.querySelector('form');

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = "";
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value){
            showError(input, "Không được để trống");
            isEmptyError = true;
        }else{
            showSuccess(input);
        }
    })
    return isEmptyError;
}

function checkEmailError(input){
    input.value = input.value.trim();
    const regexEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
    
    let isEmailError = !regexEmail.test(input.value);

    if(isEmailError){
        showError(input, "Email không hợp lệ");
    }else{
        showSuccess(input);
    }
    return isEmailError;
}

form.addEventListener('submit', function(e){
    // e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email)
})