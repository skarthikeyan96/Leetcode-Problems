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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    
    // traverse the list and get the array
    
    
    let queue = [];
    
    let node = root;
    
    queue.push(node)
    
    let sum = 0;
    
    while(queue.length !==0 )
     {
    
         let curr = queue.shift();
         
         if(curr.val >= low  && curr.val <= high ){
             sum+=curr.val;
         }
         
         
         if(curr.left){
             queue.push(curr.left)
         }
         
         
         if(curr.right){
             queue.push(curr.right)
         }
     
     }
    
    
    return(sum)
};