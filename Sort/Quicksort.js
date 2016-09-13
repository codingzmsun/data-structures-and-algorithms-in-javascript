/*
 The algorithm for Quicksort is:
 1. Pick a pivot element that divides the list into two sublists.
 2. Reorder the list so that all elements less than the pivot element are placed before
 the pivot and all elements greater than the pivot are placed after it.
 3. Repeat steps 1 and 2 on both the list with smaller elements and the list of larger
 elements.
 */

function qSort(arr)
{
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        console.log("pivot: " + pivot + " current element: " + arr[i]);
        if (arr[i] < pivot) {
            console.log("moving " + arr[i] + " to the left");
            left.push(arr[i]);
        } else {
            console.log("moving " + arr[i] + " to the right");
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

//test code
var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log();
console.log(qSort(a));