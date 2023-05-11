/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result = x;
        let newFunctions = functions.reverse()
        for(let i=0;i<newFunctions.length;i++){
            result = functions[i](result)
        }

        return result
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */