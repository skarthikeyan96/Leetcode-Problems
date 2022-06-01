/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let array = nums.filter((value, index) => index !== nums.indexOf(value));
    
    
   console.log(array)
    
   return array.length === 0 ? false : true
};

