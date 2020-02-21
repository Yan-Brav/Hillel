let john = {
    firstName: "John",
    lastName: "Dou",
    age: 25,
    job: "frontend"
};
let paul = {
    firstName: "Paul",
    lastName: "Dou",
    age: 30,
    job: "frontend"
};
function compareObjects(obj1, obj2) {
    let resultObj = {};
    let listOfKeys1 = Object.keys(obj1);
    let listOfKeys2 = Object.keys(obj2);
    let  key;
    let value;
    listOfKeys2.forEach(function (elem, index) {
        if (listOfKeys1.includes(elem)){
            if (obj1[elem] === obj2[elem]){
                key = obj1[elem];
                value = elem;
                resultObj[key] = value;
            }
        }
    });
    return resultObj;
}
console.log(compareObjects(john, paul));
