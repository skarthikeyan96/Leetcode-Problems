/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    let lookup = {}
    
    
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        
       if(lookup.hasOwnProperty(diff)){
           console.log(i,lookup[diff])
           return [lookup[diff],i]
       }
        lookup[nums[i]] = i
    
    
    }
console.log(lookup)
    
};