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

    
//     let first = list1;
    
//     while(list1.next !== null){
//         list1 = list1.next;
//     }
//     // console.log(list1)
//     // connect list1 and list 2
//     list1.next = list2
    
//     // sort the list 
//     // console.log(first)
    
//     let pointerOne = first;
    
//     while(pointerOne !== null){
        
//         let current = pointerOne;
        
//         while(current.next !== null){
            
//             if(current.val > current.next.val){
//                 let t = current.next.val;
//                 current.next.val = current.val;
//                 current.val = t;
//             }else{
//                 console.log(current.val);
//                 console.log(current.next.val)
//             }
//             current = current.next
//         }
        
//         pointerOne = pointerOne.next;
//     }
    
   
    
//     return(first)
    
    
    let temp1 = list1;
    let temp2 = list2;
    let array = []
    
    let resultList = null;
//     console.log(temp1.val)
//     console.log(temp2.val)
    
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
    // // console.log(array)
    // return constructList(array.concat(traverseList(temp2)))
};


const traverseList = (temp2) => {
    let array = []
    
    while(temp2 !== null){
        array.push(temp2.val) 
        temp2 = temp2.next
    }
    
    return array
}

const constructList = (arr) => {
    let list = new ListNode();
    
    list.val = arr[0];
    list.next = null;
    
    
    let temp1 = list;
    
    for(let i=1;i<arr.length;i++){
        let temp = new ListNode();
        temp.val = arr[i];
        temp.next = null;
        
        // console.log(temp)
        
        temp1.next = temp
        temp1 = temp1.next
        // console.log(temp1)
    }
    
        return(list)

}
