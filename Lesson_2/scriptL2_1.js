//Object isn't equal number
console.log(new Number(5) === 5);
//Objects aren't equal each other
console.log("-----------------------");
console.log(new Number(5) == new Number(5));
console.log("--------------------------");
console.log({} === {});
// number and string have equal values
console.log("--------------------------");
console.log(5 == "5");
// number and string aren't equal each other
console.log("--------------------------");
console.log(5 === "5");
// NaN isn't equal another NaN
console.log("--------------------------");
console.log(NaN == NaN);
// NaN isn't equal another NaN
console.log("--------------------------");
console.log(Infinity === Infinity);
// NaN isn't equal another NaN
console.log("--------------------------");
console.log(0 == false);
console.log("" == false);
console.log([] == false);
//Why???
console.log(null == false);
console.log(undefined == false);
var x = NaN;
console.log(x !== x);
console.log(x === x);
