/*There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for(var i = 0; i < nums2.length; i++){
        var n = idxToInsert(nums1, nums2[i]);
        nums1.splice(n, 0, nums2[i]);
    }

    var temp = Math.floor(nums1.length / 2);
    if(nums1.length % 2 === 1){
        return nums1[temp];
    }
    else {
        return (nums1[temp] + nums1[temp - 1]) / 2;
    }
};

var idxToInsert = function(nums, num){
    var i = 0;
    var j = nums.length - 1;
    var n = -1;
    while(i <= j){
        n = Math.floor((i + j) / 2);
        if(nums[n] === num){
            return n;
        }
        else if(nums[n] > num){
            j = n - 1;
        }
        else{
            i = n + 1;
        }
    }
    if(num > nums[n]){
        return n + 1;
    }
    else{
        return n;
    }
};

console.log(findMedianSortedArrays([1,4,6,8,9],[2,3,7,5]));
