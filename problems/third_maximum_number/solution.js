/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let filtered = nums.filter((num, index)  => nums.indexOf(num) == index).sort((a,b) => b-a)
    
    if(filtered.length >= 3) return(filtered[2])
    else return(filtered[0])
};