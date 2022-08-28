/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    
    let sArray = s.split(" ")
    let count = 0;
    
    for(let i=0;i<sArray.length;i++){
        if(sArray[i] !== ''){
            count++
        }
    }
    return(count)
};