const arr = [1, 2, 3];
const obj = {
    name: "John",
    age: 30
};
function f1() {
    return "Donic";
}
const firstArray = [1, true, 25, "str1", "str123", 35, 8,
    Infinity, arr, false, null, 124, "Stiga", obj, f1(), NaN];
const secondArray = [8, 2, true, 25, "Stiga", null, Infinity, arr,
    "str123", false, "str123", 35, obj, f1(), 50, NaN];
let resultArray = [];
    secondArray.filter(function (item){
        if (firstArray.includes(item)){
            if (typeof  item === "number" && item % 5 === 0){
                resultArray.push("FIVE");
            } else if (typeof  item === "string" && item.length > 5){
                resultArray.push("FSTR");
            } else {
                resultArray.push(item);
            }
        }
        return resultArray;
    });
console.log(resultArray);



