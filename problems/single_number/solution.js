/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let keysArray = []
    let valuesArray = []
    
    for(let i=0;i<nums.length;i++){
        
        if(keysArray.indexOf(nums[i]) !== -1){
            // element is present
            let index = keysArray.indexOf(nums[i])
            valuesArray[index] += 1
        }else{
            keysArray.push(nums[i])
            valuesArray.push(0)
        }
    }
    
    return(keysArray[valuesArray.indexOf(0)])
};