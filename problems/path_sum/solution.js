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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
      if (root == null)
        return false;
    
    
    let sumStack = [];
    let nodeS = [];
    
    
    sumStack.push(targetSum - root.val)
    nodeS.push(root)
    
    
    while(nodeS.length !== 0){
        
        let currNode = nodeS.pop();
        let currSum = sumStack.pop()
        
        if(currNode.left === null && currNode.right === null && currSum === 0) return true
        
        if(currNode.left !== null) {
            nodeS.push(currNode.left)
            sumStack.push(currSum - currNode.left.val)
        }
         if(currNode.right !== null) {
            nodeS.push(currNode.right)
            sumStack.push(currSum - currNode.right.val)
        }
    }
    return false
    
};