/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const dup_elts = nums.filter((item, index) => nums.indexOf(item) !== index);
  return(dup_elts);
  
};