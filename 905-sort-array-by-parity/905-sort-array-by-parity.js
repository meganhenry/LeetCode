/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // check each int in input array
    // if it's even
        // use unshift to add to beginning of array
        // remove number from its original index
    
    for (var i = 0; i < nums.length; i++ ) {
        if (nums[i] % 2 === 0) {
            nums.unshift(nums[i]);
            nums.splice(i+1, 1);
        }
    }
    return nums;
};