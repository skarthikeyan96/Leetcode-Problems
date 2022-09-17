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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
    
    let queue = [];
    let node = root;
    
    queue.push(node)
    
    
    while(queue.length !== 0){
        
        let currNode = queue.shift();
        
        if(currNode.val === val){
            return currNode
        }
        
        if(currNode.left){
        
            queue.push(currNode.left)
        
        }
        
        if(currNode.right){
            queue.push(currNode.right)
        }
        
        
    }
    
    return null
};