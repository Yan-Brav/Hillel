function First() {}
function Second() {}
function Third() {}
First.prototype.run = function () {
    console.log("I'm running")
};
First.prototype.go = function () {
    console.log("I'm going")
};
First.prototype.say = function () {
    console.log("I'm saying")
};
Second.prototype = Object.create(First.prototype);
Second.prototype.constructor = Second;
Second.prototype.run = function () {
    console.log("I can run faster than first");
};
Second.prototype.go = function () {
    console.log("I can go longer than first");
};
Third.createObject = function (ConstrName) {
    return new ConstrName();
};
let objFirst = new First();
let objSecond = new Second();
let objThird = new Third.createObject(Second);
//Testing
objFirst.run();
objSecond.run();
objSecond.go();
objSecond.say();
objThird.run();
objThird.go();
objThird.say();
console.log(objFirst);
console.log(objSecond);
console.log(objThird);
console.log(Second.prototype.constructor);
