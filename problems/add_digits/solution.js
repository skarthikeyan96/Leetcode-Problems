/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    while(num > 9){
        num = addTwo(num)
    }

    return(num)
};


const addTwo = (n) =>  {
    
    let sum = 0;
    let x = 0
    while(n > 0){
        x = n % 10 
        sum+= x;
        n = parseInt(n / 10)
    }
    
    // console.log(sum)
   return(sum)
}