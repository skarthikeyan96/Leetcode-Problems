/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let distinctNumbersArray = []
  for (let i = 0; i <= nums.length; i++) {
    distinctNumbersArray.push(i);
  }

  const result = distinctNumbersArray.filter((num) => nums.indexOf(num) === -1);

  return result[0];
};