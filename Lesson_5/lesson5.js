var regLogin = /^[A-Z].*\D\d{2}$/g;
var regPassword = /^[a-z]{1,5}$/g;
var login = prompt("Enter your login");
var password = prompt("Enter your password");

if (!regLogin.test(login)){
    alert("Be careful. Try to enter your login again");
}
!regLogin.test(login);
console.log(regLogin.test(login));
if (!regPassword.test(password)){
    alert("Be careful. Try to enter your password again");
}
!regPassword.test(password);
console.log(regPassword.test(password));

alert("Hello " + login);





