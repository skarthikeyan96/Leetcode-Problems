/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i,1) // will create one more loop
            i--
        }
    }
    console.log(nums)
    
    
};

