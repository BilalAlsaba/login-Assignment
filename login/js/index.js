var all_user = [];
all_user = JSON.parse(localStorage.getItem('all_user'))

var singInEmail = document.getElementById('signinEmail');
var signInPassword = document.getElementById('signinPassword');




function login() {
    if (singInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('incorrect').innerHTML = `<p class = 'text-center text-danger'>Please enter all input.</p>`;
    } else {
        checkUser();
    }
}


function checkUser() {
    for (var i = 0; i < all_user.length; i++) {
        if (singInEmail.value == all_user[i].email && signInPassword.value == all_user[i].password) {
            var y = all_user[i].name;
            localStorage.setItem('userName', y);
            location.href = '../home/index.html';
            break;
        }
    }
}