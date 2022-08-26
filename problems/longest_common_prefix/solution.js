/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    
    let diff = strs[0]
    
    
    if(strs.length >= 2){
    for(let i=0;i<strs.length-1;i++){
        let respon = difference(diff, strs[i+1])
        if(respon.length === 0){
            return ""
            
        }
         diff = respon
     }
    
    return(diff)
    }
    
    return diff
    
  

};

const difference = (st1, st2) => {
    
    const sarr1 = st1.split('') 
    const sarr2 = st2?.split('') || []
    
    let result = []
    
    for(let i=0;i<sarr1.length;i++){
            if(sarr1[i] !== sarr2[i]){
                break;
            }
       result.push(sarr1[i])
    }
    
    return result.join('')
    // return sarr1.filter((s, index) => sarr2.indexOf(s) === index).join('')
}