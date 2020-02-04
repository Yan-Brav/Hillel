//The random strings generator
var alphabeticString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789_-,.:;";
var stringSize = parseInt(prompt("Enter required size of string"));
var numberOfString = parseInt(prompt("Enter required number of strings"));
var index = 0;
var randomString = "";
var testArray = [];

console.time("double");
for (let k = 0; k < numberOfString; k++){
    for (let i = 0; i < stringSize; i++){

        index = Math.floor(Math.random() * alphabeticString.length);
        randomString += alphabeticString[index];
    }
    testArray.push(randomString);
    randomString = "";
}
console.log(testArray);
console.log("---------------------");

// var testArray = ['1xEr', '78TTfv', 'x31'];
var stringFromArray = testArray.join();

for (let i = 0; i < stringFromArray.length; i++){
    var newString = "";
    for (let j = 0; j < stringFromArray.length; j++){
        if (i === j){
            continue
        }
        if (stringFromArray.charAt(i) === stringFromArray.charAt(j) && stringFromArray.charAt(i) !== ","){
            // j = 0;
            var re = new RegExp(stringFromArray.charAt(j), 'g');
            newString = stringFromArray.replace(re, "");
            stringFromArray = newString;
        }
    }
}
testArray = stringFromArray.split(",");
console.timeEnd("double");
console.log(testArray);
alert(testArray);
