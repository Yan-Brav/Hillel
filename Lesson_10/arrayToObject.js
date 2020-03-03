let myObject = {};
let randomString = prompt("Enter any suggestion");
let arr = randomString.split(" ");
arr.forEach(function (elem, index, array) {
    if(index%2 === 0 || index === 0){
        myObject[elem] = array[index+1];
    }
    return myObject;
});
console.log(myObject);

