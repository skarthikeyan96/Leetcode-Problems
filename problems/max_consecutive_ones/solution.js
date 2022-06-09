/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
      let sum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] === 1) {
      sum++;
    } else {
      // numbers not equal to 1
      console.log('not equal to 1', sum);
      result.push(sum);
      sum = 0;
    }
  }
  // pushing the final sum when the loop ends
  result.push(sum);
  console.log(sum);
  console.log(result);
  return result.sort((a, b) => b - a)[0];
  
};