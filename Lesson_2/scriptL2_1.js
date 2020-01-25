//Object isn't equal number
console.log(new Number(5) === 5);//false
//Objects aren't equal each other
console.log("-----------------------");
console.log(new Number(5) == new Number(5));//false
console.log("--------------------------");
console.log({} === {});
// number and string have equal values
console.log("--------------------------");
console.log(5 == "5");//true
// number and string aren't equal each other
console.log("--------------------------");
console.log(5 === "5");//false
// NaN isn't equal another NaN
console.log("--------------------------");
console.log(NaN == NaN);//false
// NaN isn't equal another NaN
console.log("--------------------------");
console.log(Infinity === Infinity);//true
// NaN isn't equal another NaN
console.log("--------------------------");
console.log(0 == false);//true
console.log("" == false);//true
console.log([] == false);//true
//Why???
console.log(null == false);//false I don't know why
console.log(undefined == false);//false I don't know why
var x = NaN;
console.log(x !== x);//true
console.log(x === x);//false
