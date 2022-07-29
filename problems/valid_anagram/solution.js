/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
 
 Solution 1 : 
 var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
    let source = s.split('')
    let target = t.split('')
    
   for(let i=0;i<source.length;i++){
    if(target.indexOf(source[i]) !== -1){
        target.splice(target.indexOf(source[i]),1)
    } 
   }
    
   if(target.length === 0) return true
    else 
        return false
};

*/

 var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
     let source = s.split("").sort().join("")
     let target =  t.split("").sort().join("")
    return (source === target)
};
