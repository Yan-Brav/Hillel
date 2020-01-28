//Task#1 ----------------------------------------------------

//DOM (Document Object Model) it is API which interacts with HTML or XML documents. It is model which downloaded in
//browser. DOM presents documents as tree of nodes (element, text or comment).
//BOM (Browser Object Model) it is additional browser's objects which can work with anything except document
//such as alert, confirm, prompt, location, navigator and many others.

//Task#2 ---------------------------------------------------

//Alert  outputs with help BOM in modal window.
//Console.log() outputs with help JavaScript in console

//Task#3 ---------------------------------------------------

//Syntax error is orthographic error which makes application don't run or stop
//working during implementation.
//Runtime error arises during implementation of application and can make unexpected result.

//Task#4 ---------------------------------------------------

var m; //It's all right, but a little information
var M; //It's all right, but will be better use camel case
//var 7e; identifier mustn't  start with digital

//Task#5 ---------------------------------------------------

console.log(!1);//false
console.log(!!1);//true
console.log(!"str");//false
console.log(!"");//true
console.log(!!"str");//true
console.log(!NaN);//true
console.log(!0);//true
console.log(!{});//false
console.log(!!{});//true
console.log(!![]);//true
console.log("----------------------------");
console.log(!undefined);//true
console.log(!!Infinity);//true
//Task#6----------------------------------------------------

// console.log("23" + 20 + "); This line will return syntax error after 20

//This line return "2320" because "23" is string and 20 will be converted to string
//and then 2 string will be concatenated with each other
console.log("23" + 20);// result 2320

// At first will execute adding in the brackets and then result will be converted to string
//and then "1" and result ("23") will be concatenated with each other
console.log("1" + (20 + 3));//123

//String "a" will try to convert to number and as a result we get NaN
console.log("a"/5);//NaN

//We can split this sentence on 3 sentences
//"str" || 5 = "str";
//"str" > 0 = false;
// 10 && true = true;
//and in the end  false || true = true;
console.log(("str" || 5) > 0 || (10 && true));//true



