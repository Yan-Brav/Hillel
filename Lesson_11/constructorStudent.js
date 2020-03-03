function Student() {
    let university = "Cambridge";
    let speciality = "Frontend developer";
    this.getProps = function () {
        return [university, speciality];
    }
}
Student.prototype.propToConsole = function () {
    console.log("I'm studying at " + this.getProps()[0] + " my future occupation will be " + this.getProps()[1]);
};

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
paul.greeting();
paul.propToConsole();
john.greeting();
john.propToConsole();
console.log(paul);
console.log(john);
