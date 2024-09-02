var signUpName = document.getElementById('signupName');
var signUpEmail = document.getElementById('signupEmail');
var signUpPassword = document.getElementById('signupPassword');
var all_user = [];



if (localStorage.getItem('all_user') != null) {
    all_user = JSON.parse(localStorage.getItem('all_user'))
} else {
    all_user = [];
}


function signUp() {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        document.getElementById('exist').innerHTML = `<p class = 'text-center text-danger'>Please enter all input.</p>`
    }else {
        var user = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        all_user.push(user);
        location.href = '../Login/index.html';
        localStorage.setItem('all_user', JSON.stringify(all_user));
    }
}