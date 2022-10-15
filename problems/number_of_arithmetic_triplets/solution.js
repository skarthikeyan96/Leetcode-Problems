/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    
    let count = 0;
    
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            for(let k=2; k<nums.length;k++){
                
                if(i<j<k && nums[j] - nums[i] == diff && nums[k] - nums[j] == diff){
                    count++
                }
               
            }
        }
    }
    
    return(count)
};