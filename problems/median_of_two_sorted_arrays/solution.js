/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  let mergedArray = nums1.concat(nums2)
  mergedArray.sort((a,b) => a-b)
    
    
  let median = (mergedArray.length + 1)/2
  
    
//   if(nums1.length === 0 && nums2.length === 1) return sendFloatResult(nums2[0])

//   if(nums2.length === 0 && nums1.length === 1) return sendFloatResult(nums1[0])

  if(mergedArray.length %2 !== 0){
     return sendFloatResult(mergedArray[median - 1])
  }
  else{
      let index = parseInt(median)
      
      let finalResult = sendFloatResult((mergedArray[index] + mergedArray[index-1]) / 2)
      return(finalResult)
  }

  
};

const sendFloatResult = (number) =>{ 
    return parseFloat(number).toFixed(5)
}