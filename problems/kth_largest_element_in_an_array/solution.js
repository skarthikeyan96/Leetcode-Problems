/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    console.log(nums.sort(function(a, b){return b-a}))
    return(nums.sort(function(a, b){return b-a})[k-1])
};