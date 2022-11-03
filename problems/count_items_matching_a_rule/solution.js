/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    
    for(let i=0;i<items.length;i++){
        let values = items[i];
        
  
            let type = values[0]
            let color = values[1]
            let name = values[2]
        
            if((ruleKey==="type" && ruleValue === type) || (ruleKey==="color" && ruleValue === color) || (ruleKey==="name" && ruleValue === name)  ){
                count ++
            }
        
       
    }
    
    return count;
};