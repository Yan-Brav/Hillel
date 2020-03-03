var user = "";
//It's link to MDN https://developer.mozilla.org/ru/docs/Web/API/Console/count
//This function conflicts with MDN????
/*function greet() {
    console.count();
    return "hi" + user;
}*/
//This function agrees with MDN????
function greet() {
    console.count(user);
    return "hi" + user;
}

user = "Dan";
greet();
user = "Alex";
greet();
greet();
console.count();
