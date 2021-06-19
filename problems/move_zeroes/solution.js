/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
  // return the array if there is only one element and it is zero
//     if(nums.length===1 && nums[0] === 0) return nums
//     if(nums.indexOf(0) === -1) return nums

    let count = 0;

//      let filtered = nums.filter(function(num){
//         if(num===0){
//             count++
//         }
//         return num!=0
//     })
//     console.log(nums)
// console.log(filtered.concat(new Array(count).fill(0)))
    nums.splice(0, nums.length,...nums.filter(function(num){
        if(num===0){
            count++
        }
        return num!=0
 }).concat(new Array(count).fill(0)))

};