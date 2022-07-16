/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    
    if(head === null || head.next === null){
        return false
    }
    
   let previous = head;
    let current = head
    
    
    
    while(previous !==null && previous.next !== null){
        
     previous = previous.next.next;
    current = current.next;
    if(previous === current){
       return true
    }
       
        
    }
    
    return false
   
};