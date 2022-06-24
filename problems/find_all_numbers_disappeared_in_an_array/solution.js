/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    const arrayTocompare = []
    
    for(let i=1;i<=nums.length;i++){
        arrayTocompare.push(i)
    }
    
    return arrayTocompare.filter((item,index) => nums.indexOf(item) === -1);
};