/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let lookup = {}

    let temp = head;
    let previousNode = head;


    while (temp !== null) {
        
        if (lookup[temp.val]) {
            let currentNode = temp;
            let nextNode = temp.next;
            
            if (nextNode !== null) {
                previousNode.next = currentNode.next;
            } else {
                previousNode.next = null
            }
        } else {
            lookup[temp.val] = true
            previousNode = temp
        }
        temp = temp.next
    }
    return (head)
};