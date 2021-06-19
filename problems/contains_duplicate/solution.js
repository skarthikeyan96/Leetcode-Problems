/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.filter((num,pos) => {   
        return nums.indexOf(num) === pos
    }).length === nums.length ? false: true 
};