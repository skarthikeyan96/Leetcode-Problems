/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        
   while(s.includes("{}") || s.includes("()") || s.includes("[]")){
       s = s.replace("{}","")
       s = s.replace("()","")
       s = s.replace("[]","")
   }
   console.log(s.length)
   
   if(s.length === 0)return true
   else return false
};