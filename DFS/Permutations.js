/**
 * Given a collection of distinct numbers, return all possible permutations.
 * For example, [1,2,3] have the following permutations:
 * [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var visited = [];

    helper(nums, 0, visited, [], result);

    return result;
};

var helper = function(nums, index, visited, output, result) {
    if(nums.length === output.length) {
        result.push(output.slice());
    }

    for(var i = 0; i < nums.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            output.push(nums[i]);
            helper(nums, index+1, visited, output, result);
            output.pop();
            visited[i] = false;
        }
    }
};

console.log(permute([1,2,3]));