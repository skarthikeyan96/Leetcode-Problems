/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // find the indices of duplicates
    
    let indices = {};
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] in indices){
            const j = indices[nums[i]];
            if(Math.abs(j -i) <= k){
                return true
            }
           
        }
        
        indices[nums[i]] = i
    }
    
    return false
    
//     for(let i=0;i<nums.length;i++){
//         for(let j=1;j<nums.length;j++){
//             if(i !== j && nums[i] === nums[j]){
//                 if(Math.abs(i - j) <= k){
//                     return true
//                 }
            
//             }
            
//         }
//     }
    
//     return false
  
};