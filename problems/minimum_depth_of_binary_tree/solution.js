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
 * @return {number}
 */
var minDepth = function(root) {
  
    if(root === null) return root;
    
    let queue = [];
    queue.push(root)
    let level = 1
    
    while(queue.length !== 0){
        let queueLength = queue.length;
        for(let i=0;i<queueLength;i++){
            
            let node = queue.shift()
            
            if(node === null) return 0;
            if(node.left === null && node.right === null) return level
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
        level++
    }
    return level
    
};