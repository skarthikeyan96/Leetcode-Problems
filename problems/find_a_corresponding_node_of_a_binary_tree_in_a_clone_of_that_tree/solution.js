/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  
    
    let temp = cloned;
    
    let queue = [];
    
    queue.push(temp)
    
    while(queue.length !== 0){
        
        let node = queue.shift()
        
        if(node.val === target.val){
            return node;
        }
        
        if(node.left){
            queue.push(node.left)
        }
        
        if(node.right){
            queue.push(node.right)
        }
    }
    
    
};