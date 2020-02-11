var str = "I am Yan. Я живу в Днепре, Но не в реке Днепр, but in The City DnEpr";
var arrFromStr = str.split(" ");
var arrSingleStr = [];
var newArrFromStr = [];
console.log(str);
for (var i = 0; i < arrFromStr.length; i++){
    arrSingleStr = arrFromStr[i].split("");
    for (var j = 0; j < arrFromStr[i].length; j++){
        if (arrFromStr[i].charAt(j) === arrFromStr[i].charAt(j).toUpperCase()){
            for (var k = 0; k < arrSingleStr.length; k++){
                if(arrSingleStr[k] === arrSingleStr[k].toUpperCase()){
                    arrSingleStr[k] = arrSingleStr[k].toLowerCase();
                } else {
                    arrSingleStr[k] = arrSingleStr[k].toUpperCase();
                }
            }
            newArrFromStr.push(arrSingleStr.join(""));
        } else {
            newArrFromStr.push(arrFromStr[i]);
        }
        break;
    }
}
str = newArrFromStr.join(" ");
console.log("----------------");
console.log(str);

