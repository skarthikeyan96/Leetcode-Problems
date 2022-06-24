/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  
    let count = 0
    let countArray = [];
    let keysArray = []
    
    for(let i=0;i<nums.length;i++){
      if(keysArray.indexOf(nums[i]) !== -1){
         // number is present
          let index = keysArray.indexOf(nums[i]);
          countArray[index] = countArray[index] + 1
      }else{
          keysArray.push(nums[i])
          countArray.push(0)
      }
    }
    
    
    return(keysArray[countArray.indexOf(Math.max(...countArray))])
};