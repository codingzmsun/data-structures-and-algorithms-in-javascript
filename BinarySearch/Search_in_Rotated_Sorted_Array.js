/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;

    var index = -1,
        head = 0,
        tail = nums.length - 1,
        mid;

    while (head <= tail) {
        mid = Math.floor((head + tail) / 2);
        if (nums[mid] === target) {
            index = mid;
            break;
        } else if ((nums[head] <= target && target < nums[mid]) ||
            (nums[head] > nums[mid] && (nums[head] <= target || target < nums[mid]))) {
            tail = mid - 1;
        } else {
            head = mid + 1;
        }
    }

    return index;
};

console.log(search([4,5,6,7,0,1,2,3], 0))