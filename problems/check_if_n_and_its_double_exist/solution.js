/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    // let N = arr[0];
    let found = false;
    
    for(let i=0;i<arr.length;i++){
        let N = arr[i]
        for(let j=0;j<arr.length;j++){
            if(i !== j && N === 2*arr[j]){
                found = true
            }
        }
    }
    return found
};