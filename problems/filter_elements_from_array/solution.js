/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let value = [];

    for(let i=0;i<arr.length;i++){
        const bool = fn(arr[i],i);
        if(bool) value.push(arr[i])
    }

    return value;
};