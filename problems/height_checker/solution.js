/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let original = [...heights]
    let expected = heights.sort((a,b) => a-b)
    let count = 0;
    
    console.log(original)
    console.log(expected)
    for(let i=0;i<heights.length;i++){
        if(expected[i] !== original[i]){
            count++
        }
    }
    return(count)
};