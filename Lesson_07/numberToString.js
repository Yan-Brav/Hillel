var text = "Alex is #1, John is #2 and Mark is #3. Early John was #1, Mark was #2 and Alex was #3";
var newText;
var reg1 = /1/g;
var reg2 = /2/g;
var reg3 = /3/g;
console.log(text);
console.time("text");
newText = text.replace(reg1, "one");
text = newText;
newText = text.replace(reg2, "two");
text = newText;
newText = text.replace(reg3, "three");
text = newText;
console.timeEnd("text");
console.log(text);

