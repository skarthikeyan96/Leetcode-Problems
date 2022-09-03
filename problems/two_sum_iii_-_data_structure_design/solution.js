
var TwoSum = function() {
    this.obj = []
};

/**  
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.obj.push(number)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    
   let arr = this.obj;
    
    let lookup = {}
    
    for(let i=0;i<arr.length;i++){
        let diff = value - arr[i];
        
        if(diff in lookup){
            return true
        }
        lookup[arr[i]] = i
    }
    return false
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */