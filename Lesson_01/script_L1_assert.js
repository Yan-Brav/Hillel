//I have a heap of questions about assert
var obj = {
    name: "Vasya",
    lastName: "Pupkin",
    age: 20
};
var obj2 = {
    name: "Petya",
    lastName: "Piyatochkin",
    age: 12
};

console.assert(true, "Hello", [obj, obj2]);
console.dir(obj2);
console.dirxml(obj2);
console.table([obj, obj2]);

