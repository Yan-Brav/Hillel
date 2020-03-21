//First way with global variable
let summ = 0;
function sumParam(num) {
    return summ += num;
}
console.log(sumParam(5));
console.log(sumParam(10));
console.log(sumParam(20));
console.log(sumParam(30));
//Second way without global variable
function SumParam2() {
    let summ = 0;
    return function (num) {
        return summ += num;
    }
}
let addition = SumParam2();
console.log(addition(5));
console.log(addition(100));
console.log(addition(200));
console.log(addition(300));
let anotherAddition = SumParam2();
console.log(anotherAddition(10));
console.log(anotherAddition(20));
console.log(anotherAddition(40));
console.log(anotherAddition(80));
