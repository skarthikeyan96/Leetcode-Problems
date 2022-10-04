/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = []
    for(let i=0;i<2*(nums.length);i++){
       arr.push(nums[i%nums.length])
    }
    return(arr)
};