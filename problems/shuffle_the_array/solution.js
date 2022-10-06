/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    let firstArray = [];
    let secondArray = [];
    
    
    for(let i=0;i<n;i++){
        firstArray.push(nums[i])
    }
    
    for(let j=n; j<nums.length;j++){
        secondArray.push(nums[j])
    }
    
    console.log(firstArray)
        console.log(secondArray)
    
    
    let result = [];
    
    for(let i=0;i<firstArray.length;i++){
    
        result.push([firstArray[i], secondArray[i]])
    }
    
    return(result.flat())

    
};