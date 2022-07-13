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
var middleNode = function(head) {
    // get length and calculate the middle value
    let lengthOfList = calculateLength(head);
    let middleValue = lengthOfList % 2 === 0 ?  (lengthOfList / 2)+1 : (lengthOfList+1)/2
    
    let root = head
    let index = 1
    while(index!==middleValue){
        root = root.next;
        index++
    }
   return(root)
};

const calculateLength = (head) => {
    let length = 0
    while(head !== null){
        length++
        head = head.next;
    }
    return length;
}