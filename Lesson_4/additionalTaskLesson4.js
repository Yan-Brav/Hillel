var testArray = [false, NaN, 25, "Hello", 0, -15, "", undefined, null, true, "DHS"];
for (var i =0; i < testArray.length; i++){
    if (!testArray[i]){
        testArray.splice(i, 1);
        if (isNaN(testArray[i])){
            testArray.splice(i, 1);
            if (testArray[i] === null){
                testArray.splice(i, 1);
            }
        }
    }
}
console.log(testArray);
