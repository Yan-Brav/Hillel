var arr = ["Word", true, 1, undefined, Infinity, null, function () {}, {}, NaN];

for (var i = 0; i < arr.length; i++){
    if (arr[i] === null){
        console.log("Type of element = " + arr[i] + ", value of element = " + arr[i]);
    }
    console.log("Type of element = " + typeof (arr[i])+ ", value of element = " + arr[i])
}
