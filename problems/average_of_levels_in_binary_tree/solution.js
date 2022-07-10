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
var averageOfLevels = function(root) {
    
    let temp = root;
    return bfs(temp)
};

const bfs = (temp) => {
    let finalArray = []
    let queue = []
    
    queue.push(temp)
    
    while(queue.length !== 0){
           let level = 0
    let sum = 0
        let tempQueue = [];
               
       while(queue.length !== 0){
            let currNode = queue.shift() // root
            
           // console.log(currNode.val)
           sum += currNode.val
           level++
           
           if(currNode.left) tempQueue.push(currNode.left)
           if(currNode.right) tempQueue.push(currNode.right)
           
           
       }
        
        
        queue = tempQueue
//         console.log(level)
       
//         console.log("sum",sum)
        finalArray.push(1.0*sum/level)
                // console.log("====")

        sum = 0
      
    }
   return(finalArray)
}