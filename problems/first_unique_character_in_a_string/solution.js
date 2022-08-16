/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  
    let dict = {}
    
    for(let i=0;i<s.length;i++){
        let current = s[i]
        if(!dict.hasOwnProperty(current)){
            dict[current] = 0
        }else{
            dict[current]+=1
        }
    }
    
    let nRKey = "";
    
    for(let key in dict){
        if(dict[key] === 0){
            return s.indexOf(key)
        }
    }
    
    return -1
    
    // console.log(dict)
};