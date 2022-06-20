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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let array = [];
    
    const calcPostOrder = (root) =>{
        if(root !== null){
            calcPostOrder(root.left)
            calcPostOrder(root.right)
            array.push(root.val)
            
        }
    }
    
    calcPostOrder(root);
    return array
};