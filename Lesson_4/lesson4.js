var userArray = [];
var firstSuggestion = prompt("Enter first suggestion");
var secondSuggestion = prompt("Enter second suggestion");
var thirdSuggestion = prompt("Enter third suggestion");
userArray.push(firstSuggestion);
userArray.push(secondSuggestion);
userArray.push(thirdSuggestion);

var defaultArray = ["Stiga", 1, "Donic", 2, "Xiom", 3];
var resultArray = defaultArray.concat(userArray);
var symbolNumber = resultArray.join("").length;
console.log(symbolNumber);
alert(symbolNumber);
