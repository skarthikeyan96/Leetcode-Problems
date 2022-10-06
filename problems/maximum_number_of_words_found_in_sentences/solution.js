/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let result = []
    
    let max = 0;
    for(let i=0;i<sentences.length;i++){
        let sentence = sentences[i];
        
        let words = sentence.split(' ');
        
        if(max < words.length){
            max = words.length
        }
        
    }
    
    return(max)
    // return Math.max(...result)
};