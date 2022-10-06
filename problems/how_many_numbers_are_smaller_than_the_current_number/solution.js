/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    
    let count = 0
    let result = []
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            
            if(i!==j && nums[j]<nums[i]){
                count++
            }
        }
        
        result.push(count)
        count = 0
    }
    
    return(result)
};