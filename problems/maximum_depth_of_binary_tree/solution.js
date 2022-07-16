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
var maxDepth = function(root) {
    
    
    let queue = [];
    let currentNode = root;
    let level = 0;
    
    queue.push(currentNode);
    
    if(root === null) return 0
    
    while(queue.length !== 0){
        
        let queueLength = queue.length; 
        for(let i=0;i<queueLength;i++){    
             let tempNode = queue.shift();
             if(tempNode.left!==null) queue.push(tempNode.left);
            if(tempNode.right!==null) queue.push(tempNode.right);
        }  
       level++ 
    }
    
    return(level)
};