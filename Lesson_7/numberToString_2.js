var text = "Alex is #1, John is #2 and Mark is #3. Early John was #1, Mark was #2 and Alex was #3";
var newText = "";
console.log(text);
console.time("text");
for (var i = 0; i < text.length; i++){
    if (text[i] === "1"){
        newText = text.replace(text[i], "one");
        text = newText;
    }
    if (text[i] === "2"){
        newText = text.replace(text[i], "two");
        text = newText;
    }
    if (text[i] === "3"){
        newText = text.replace(text[i], "three");
        text = newText;
    }
}
console.timeEnd("text");
console.log(text);

