/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = parseInt(x.toString().split('').reverse().join('').toString());
    
    if(x < 0) number*=-1
    
    if(number < Math.pow(2,31)*-1 || number > Math.pow(2,31) - 1) return 0;
    
    return number
    
    
//     let answer;
    
//      if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
//     if(arr[0] === "-"){
        
        
//         return(`${arr[0]}${arr.slice(1, arr.length).reverse().join("")}`)
//     }else{
//         return(arr.reverse().join(""))
//     }
};