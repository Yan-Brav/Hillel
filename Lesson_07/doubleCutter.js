var arr = [1, 1, 1, 2, 1, 1, 1, 1, "str", "str", "str", "str"];
var arrSize = arr.length;
for (var i = 0; i < arrSize; i++){
    for (var j = i+1; j < arrSize; j++){
        if( arr[j] === arr[i]){
            arr.splice(j, 1);
            j--;
            arrSize--;
        }
    }
}
console.log(arr);
