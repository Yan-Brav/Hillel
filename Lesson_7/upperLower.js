var str = "I am Yan. Я жиВу в Днепре, Ho нE в реKе Днепр, but in The CiTy DnEpr";
var arrFromStr = str.split(" ");
var arrSingleStr = [];
var newArrFromStr = [];
var regUpperCase = /[A-ZА-Я]/;
console.log(str);
console.time("Upp");
for (var i = 0; i < arrFromStr.length; i++){
    arrSingleStr = arrFromStr[i].split("");
    if (regUpperCase.test(arrFromStr[i])){
        for (var j = 0; j < arrSingleStr.length; j++){
            if (arrSingleStr[j] === arrSingleStr[j].toUpperCase()){
                arrSingleStr[j] = arrSingleStr[j].toLowerCase();
            } else {
                arrSingleStr[j] = arrSingleStr[j].toUpperCase();
            }
        }
    }
    newArrFromStr.push(arrSingleStr.join(""));
}
str = newArrFromStr.join(" ");
console.log("----------------");
console.log(str);
console.timeEnd("Upp");
