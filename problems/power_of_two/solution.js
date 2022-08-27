/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 1) return true
    
   let result = Math.log2(n) ;
    
    if(typeof (result) === "number" && !Number.isNaN(result) && Number.isInteger(result)){
        return true
    }
    
    return false
   
};

