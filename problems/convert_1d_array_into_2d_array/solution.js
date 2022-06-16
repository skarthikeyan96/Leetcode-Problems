/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  let arr1 = [];
  let final = [];

    if(m*n != original.length) return []

    for (let i = 0; i < original.length; i++) {
    arr1.push(original[i]);
    if (arr1.length === n) {
      final.push(arr1);
      arr1 = [];
    }
  }
  return(final)
    
  
};