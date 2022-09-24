/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const originalString = s.split(' ').join('').toLowerCase().replace(/[^a-z|0-9]*/gim,'');
    const reversedString = originalString.split('').reverse().join('')
    
    console.log(originalString)
    return originalString === reversedString
};