/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let count = 0;
    let step = 1;
    
    if(n === 1) return 1
    while(n > 0){
        
        n = n - step; // total no of coins - step count
        if(n < 0) break;
        step++;
        count++
    }
    
    return(count)
};