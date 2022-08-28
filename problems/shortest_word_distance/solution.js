/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let word1count = [];
    let word2count = [];
    
    
    for(let i=0;i<wordsDict.length;i++){
        if(wordsDict[i] === word1) word1count.push(i)
    }
    
     for(let i=0;i<wordsDict.length;i++){
        if(wordsDict[i] === word2) word2count.push(i)
    }
    
    
    // console.log(word1count)
    // console.log(word2count)
    
    
    let resultArray = [];
    
    
    if(word1count.length  >= word2count.length){
     
     
        for(let j=0;j<word2count.length;j++){
            for(let i=0;i<word1count.length;i++){
                let diff = Math.abs(word1count[i] - word2count[j]);
        
                resultArray.push(diff)
             } 
        }
        
        return(Math.min(...resultArray))
        
    }
    
        
    if(word1count.length  < word2count.length){
     
     
        for(let j=0;j<word1count.length;j++){
            for(let i=0;i<word2count.length;i++){
                let diff = Math.abs(word1count[j] - word2count[i]);
        
                resultArray.push(diff)
             } 
        }
        
        return(Math.min(...resultArray))
        
    }
    
    
   
    
//     console.log(resultArray)
//     console.log(Math.min(...resultArray))
    
};