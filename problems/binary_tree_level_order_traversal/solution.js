/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    let finalArray = [];
    
    let queue = [];
    queue.push(root)
    
    if(root === null) return [];
    
    let level = 0
    while(queue.length !== 0){
        let length = queue.length;
        
        finalArray.push([])
        
        for(let i=0;i<length;i++ ){
            let elt = queue.shift()
            
            finalArray[level].push(elt.val)
            
            if(elt.left !== null) queue.push(elt.left)
            if(elt.right !== null) queue.push(elt.right)
        }
        console.log(level)
        level ++
    }
    
    return(finalArray)
};