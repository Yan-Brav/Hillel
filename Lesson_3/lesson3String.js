//Task#1 ----------------------------------------------------

//DOM (Document Object Model) it is API which interacts with HTML or XML documents. It is model which downloaded in
//browser. DOM presents documents as tree of nodes (element, text or comment).
/*BOM provides access to the browser window and allows you to manipulate it and its elements.
    BOM objects provide access to browser functionality regardless of the content of the web page.
    Using the Browser Object Model (BOM), you can control browser behavior from JavaScript.
    BOM includes several objects.
    ----------------Window object------------------------
    In browsers the Window object plays the role of a global object. It cannot be accessed directly, however, it has
    a window property that refers to the object itself, which can be used instead of the this keyword
    to refer to the global object.
    All variables and functions declared globally become its properties and methods.
    Methods: alert, confirm, close, focus, open, print, prompt, stop and many others.
    Properties: document, frames, history, length, location, navigator, parent and many others.
    --------------Object Navigator---------------------------
    The Navigator object is a property of the Window object and is available in all browsers.
    Properties: appName, appVersion, geolocation, platform and others.
    --------------Screen Object-------------------------------
    The Screen object (which is also a property of the Window object) is one of the few JavaScript objects that are hardly used in the code.
    It simply provides information about the graphical parameters of the client system outside the browser window, such as width and height in pixels.
    The availability of certain properties of the Screen object depends on the browser.
    Properties: availHeight, availWidth, colorDepth and others.
    -------------History object-----------------------------
    The History object provides a navigation log for the entire time you work with a particular window.
    Length property
    Methods: back, forward and go.
    ------------Location object--------------------------------
    The Location object contains information about the URL of the current document with which it is associated.
    To change or get the current URL, it is not necessary to use the methods or properties of the object, you can also do this by
    contacting the location property directly:
    For example:
    var someURL = window.location;
    window.location = 'httr: //www.puzzleweb.ru';

    Methods: assign, reload, replace.
    Properties: hash, host, hostname, href, origin, pathname, port, protocol and search*/


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



