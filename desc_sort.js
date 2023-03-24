const array1 = [3, 6, 9, -2, 1, 10, 0];
var array2 = [];

function sort(array){
    if(array.length == 1){
        return;
    }
    else{
    for( let i = 0; i < array.length; i++){
        if(array[i] > array[array.length - 1])
            [array[i], array[array.length - 1]] = [array[array.length - 1], array[i]];
    }
    array2.push(array[array.length - 1]);
    array.length = array.length - 1;
    sort(array);
}
}

sort(array1);
console.log(array2);