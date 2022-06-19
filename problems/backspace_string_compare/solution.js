/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  
    let string = removeBackspace(s.split(''));
    let target = removeBackspace(t.split(''));
    
    // console.log(string, target)
    
    if(string === target) return true
    else  return false

};

const removeBackspace = (stringArray) => {
    
   let stack = [];
    
    for(let i=0;i<stringArray.length;i++){
        
        if(stringArray[i] === '#'){
            stack.pop()
        }else{
         stack.push(stringArray[i])
        }
        
       
        
    }
    return(stack.toString())
}