const array = [5, 3, 2, 8, 1, 0, 4, 11];
function sortArrayByOdd(array) {
    const newArray = [];
    let count = 0;
    array.forEach(function (item) {
        if (item % 2 !== 0) {
            newArray.push(item);
        }
        newArray.sort((a, b) => a-b)
    });
    array.forEach(function (item, index) {
        if (item % 2 !== 0){
            array.splice(index, 1, newArray[count]);
            count++;
        }
    });
    return array;
}
console.log(sortArrayByOdd(array));

