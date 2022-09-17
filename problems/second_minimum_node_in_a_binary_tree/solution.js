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
var findSecondMinimumValue = function(root) {
    
    
    let queue = [];
    let result = [];
    
    let currNode = root;
    
    queue.push(currNode)
    
    while(queue.length !== 0){
        
        
        let temp = queue.shift(currNode);
        
        result.push(temp.val);
        
        if(temp.left){
            
            queue.push(temp.left)
            
        }
        
        if(temp.right){
            queue.push(temp.right)
        }
        
    }
    
    
    const filteredArray = result.sort((a,b) => a-b).filter((item,index) => result.indexOf(item) === index)
    
    return filteredArray[1] ? filteredArray[1] : -1
    
};