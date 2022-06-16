/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const index = matrix.flat().indexOf(target);
    return index !== -1 ? true : false
};