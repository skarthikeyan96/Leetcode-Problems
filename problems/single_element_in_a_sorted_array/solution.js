/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

  let hashTable = {};

  for(let i=0;i<nums.length; i++){
      let num = nums[i];

      if(num in hashTable){
          hashTable[num] = hashTable[num] + 1
      }else{
          hashTable[num] = 0
      }
  }  

  for(let key in hashTable){
      if(hashTable[key] === 0){
          return key
      }
  }

};