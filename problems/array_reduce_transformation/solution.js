/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    if(nums.length === 0) return init

    let finalVal = init;

    for(let i=0;i<nums.length; i++){
        finalVal = fn(finalVal, nums[i])
    }
    
    return finalVal
};