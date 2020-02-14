const arr = [1, 2, 3];
const obj = {
    name: "John",
    age: 30
};
function f1() {
    return "Donic";
}
const firstArray = [1, true, 25, "str1", "str123", 35, 8,
    Infinity, arr, [2, 4, 6], false, null, 124, "Stiga", obj, f1()];
const secondArray = [8, 2, true, 25, "Stiga", null, Infinity, arr,
    "str123", [2, 4, 6], false, "str123", 35, obj, f1()];
let resultArray = [];
console.time("compLoop");
for (let i = 0; i < firstArray.length; i++){
    for (let j = 0; j < secondArray.length; j++){
        if (firstArray[i] === secondArray[j]){
            if (typeof  secondArray[j] === "number" && secondArray[j] % 5 === 0){
                resultArray.push("FIVE");
            } else if (typeof  secondArray[j] === "string" && secondArray[j].length > 5){
                resultArray.push("FSTR");
            } else {
                resultArray.push(secondArray[j]);
            }
        }
    }
}
console.log(resultArray);
console.timeEnd("compLoop");



