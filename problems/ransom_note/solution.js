/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    
    let ransomArray = ransomNote.split("")
    
    
    for(let i=0;i<magazine.length;i++){
        
        let char = magazine[i]
        if(ransomArray.indexOf(char) !== -1){
            let index = ransomArray.indexOf(char)
            ransomArray.splice(index, 1)
        }
        
    }
    
           return ransomArray.length === 0

    
};