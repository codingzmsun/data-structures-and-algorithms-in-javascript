/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 * the contiguous subarray [4,−1,2,1] has the largest sum = 6
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    var previous = Math.max(0, nums[0]), max = nums[0];
    for(var i = 1; i < nums.length; i++){
        previous = Math.max(previous + nums[i], nums[i]);
        max = Math.max(previous, max);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));