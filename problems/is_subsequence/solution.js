/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  
   // note : target should be in the same order in source
   // Try re-constructing target to match source

  const equalItems = [];
    
   const splitArr = t.split("")
   const sourceArr = s.split("")
   
   let leftPointer = 0;
   let rightPointer = 0;
    
    let i = 0;
    
    let count = 0
   while(leftPointer < s.length && rightPointer < t.length){
       
       if(s[leftPointer] === t[rightPointer]){
           count++
           leftPointer++;
           rightPointer++
       }
       else{
           rightPointer++
       }
       
       
   }
    
   return(count === s.length)
    
};