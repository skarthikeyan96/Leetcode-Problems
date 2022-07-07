/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let result = letters.map((letter,index) => letter.charCodeAt(0))  
  let targetCode = target.charCodeAt(0)
   
 
  let minCode = 0;
    
  for(let i=0;i<result.length;i++){
      if(targetCode < result[i] ){
          minCode = result[i]
          break;
      }
  }
    
    if(minCode === 0){
        return(String.fromCharCode(result[0]))
    }
      return(String.fromCharCode(minCode))

    
};