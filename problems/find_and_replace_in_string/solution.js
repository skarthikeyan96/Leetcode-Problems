/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
        const n = indices.length;
    const chars = s.split("");
   
    for (let i = 0; i < n; i++) {
        const [index, source, target] = [indices[i], sources[i], targets[i]];
        
        if (s.substring(index).startsWith(source)) {
            replaceChars(chars, index, source, target);
        }
    }
    
    return chars.join("");
    
    
    function replaceChars(chars, start, source, target) {
        chars[start] = target;
        
        for (let i = 1; i < source.length; i++) {
            chars[start + i] = "";
        }
    }
};