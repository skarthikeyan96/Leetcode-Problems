/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let lookup = {};
    
    for(let i=0;i<numbers.length;i++){
        let difference = target - numbers[i];
        
        if(lookup.hasOwnProperty(difference)){
            return([lookup[difference] + 1 , i+1])
        }
        
        lookup[numbers[i]] = i
    }
};