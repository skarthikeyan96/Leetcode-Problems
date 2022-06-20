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
var preorderTraversal = function(root) {

let array = []

const calculatePreorderTraversal = (root) => {
    if(root !== null){
         array.push(root.val)
        calculatePreorderTraversal(root.left)
        calculatePreorderTraversal(root.right) 
    }
    
    
}
   calculatePreorderTraversal(root)
    
    return array
    
}



