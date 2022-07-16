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
var zigzagLevelOrder = function(root) {
    let finalArray = [];
    let queue = [];
    
    let level = 0;
    
    
    if(root === null) return []
    
    queue.push(root)
    
    while(queue.length !== 0){
        
        finalArray.push([]) // start the level;
        
        let queueLength = queue.length;
        
        for(let i=0;i<queueLength;i++){
            
            let node = queue.shift()
            
            if(level %2 === 0){
                            finalArray[level].push(node.val)

            }else{
                finalArray[level].unshift(node.val)
            }
            
            
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            
            
            
           
            
        }
        level++
    }
    
    return(finalArray)
};