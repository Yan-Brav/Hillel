var regLog = /^[A-Z].*\D\d{2}$/;
var regPass = /^[a-zа-я]{1,5}$/;
var login = prompt("Enter your login");
var password = "";

function validLogin() {
    if (regLog.test(login)){
        password = prompt("Enter your password");
        validPass(password, regPass);
    } else {
        login = prompt("Be careful. Try to enter your login again");
        validLogin(login, regLog);
    }
}

function validPass(strPass, regPassword) {
    if (regPassword.test(strPass)){
        alert("Hello " + login);
    } else {
        strPass = prompt("Be careful. Try to enter your password again");
        validPass(strPass, regPassword);
    }
}
validLogin(login, regLog);










