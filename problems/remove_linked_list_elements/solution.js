/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // find the number
   
    let sentinelNode = new ListNode(0)
    sentinelNode.next = head;
    
    let temp = head;
    let previous = sentinelNode;
    
    while(temp !== null){
        if(temp.val === val){
            previous.next = temp.next
        }else{
         previous = temp;   
        }
        
        temp = temp.next;
    }
    console.log(head)
    return(sentinelNode.next)
    
};