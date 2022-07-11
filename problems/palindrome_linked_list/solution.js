/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {  
    let original = traverseListAndPushToArray(head);
   return(original.toString() === [...original].reverse().toString())
};

const traverseListAndPushToArray = (head) => {
    let final = []
    while(head !== null){
        final.push(head.val)
        head = head.next;
    }
    return(final)
}