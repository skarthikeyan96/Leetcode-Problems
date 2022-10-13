/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    let hashMap = {}
    
    for(let i=0;i<indices.length;i++){
        hashMap[indices[i]] = s[i] 
    }
    return (Object.values(hashMap).join(''))
};