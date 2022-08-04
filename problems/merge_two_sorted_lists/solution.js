/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    
    if(list1 === null && list2 === null) return null;
    
    if(list1 === null && list2 !== null) return list2;
    
    if(list2 === null && list1 !== null) return list1;

    
    
    let temp1 = list1;
    let temp2 = list2;
    let array = []
    

    let head = new ListNode();
    let tail = head;
    
    while(temp1 !== null && temp2 !== null){
        
        if(temp1.val > temp2.val){
            // push to separate list
            tail.next = temp2   
            
            temp2 = temp2.next;
                // console.log(resultList)

        }else{
           tail.next = temp1
            temp1 = temp1.next;
        }
        
        tail = tail.next;
               


    }
    
    tail.next = temp1 == null ? temp2 : temp1
    
    return(head.next)
   
};

