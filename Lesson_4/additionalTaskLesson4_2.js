// I'll code generator tomorrow, I hope.
// Could you check this code, please.
var testArray = ['1xEr', '78TTfv', 'x31'];
var stringFromArray = testArray.join();
var count = 0;

for (var i = 0; i < stringFromArray.length; i++){
    var newString = "";
    for (var j = 0; j < stringFromArray.length; j++){
        if (i === j){
            continue
        }
        if (stringFromArray.charAt(i) === stringFromArray.charAt(j) && stringFromArray.charAt(i) !== ","){
            // j = 0;
            var re = new RegExp(stringFromArray.charAt(j), 'g');
            newString = stringFromArray.replace(re, "");
            stringFromArray = newString;
            count++;
        }
    }

}
testArray = stringFromArray.split(",");
console.log(testArray);
