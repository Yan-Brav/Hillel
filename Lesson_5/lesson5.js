var regLogin = /^[A-Z].*\D\d{2}$/;
var regPassword = /^[A-ZА-Я]{1,5}$/;
var login = prompt("Enter your login");
var password = prompt("Enter your password");

console.log(regLogin.test(login));
console.log(regPassword.test(password));




