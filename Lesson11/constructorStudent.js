function Student() {
    let university = "Cambridge";
    let speciality = "Frontend developer";
    this.propToConsole = function () {
        console.log("I'm studying at " + university + " my future occupation will be " + speciality);
    };
}
let paul = new Student();
let john = new Student();
paul.name = "Paul";
paul.greeting = function(){
    return console.log("Hello I'm " + this.name);
};
john.name = "John";
john.greeting = function(){
    return console.log("Hello I'm "  + this.name);
};
paul.propToConsole();
paul.greeting();
john.propToConsole();
john.greeting();
console.log(paul);
console.log(john);
