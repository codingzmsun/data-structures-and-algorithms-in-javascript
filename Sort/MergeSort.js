// Merge sort has two parts: divide and conquer

function merge(left, right){
    var result  = [],
        l = 0,
        r = 0;

    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be added to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr){
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left   = arr.slice(0, middle),
        right  = arr.slice(middle);
    console.log('left: '+left);
    console.log('right: '+right);
    console.log('left mergeSort: '+ mergeSort(left));
    console.log('right mergeSort: '+ mergeSort(right));
    return merge(mergeSort(left), mergeSort(right));
}

//test code
// var a = [];
// for (var i = 0; i < 10; ++i) {
//     a[i] = Math.floor((Math.random()*100)+1);
// }
// console.log(a);
// console.log(mergeSort(a));

console.log(mergeSort([5,3,7,2,3,12,8,56,9]))