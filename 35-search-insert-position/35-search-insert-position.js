/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = -1, low = 0, high = nums[nums.length-1];
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            index = i; 
            break;
        }
        if (nums[0] > target) {
            index = 0;
            break;
        }
        
        while (nums[i] < target){
            low = nums[i];
            index = i + 1;
            i++;
        }
    }
     return index;
}
    
    
    /*
    isInArray is true;
    
    while current number doesn't equal the target,
        start in the middle
        
        if the current number equals the target,
            return the index of the current number.
        
        if the current number is higher than the target,
            set the current number as the new highest
            increase the index by one
            start again at the number in the middle of the lowest number and the highest
        
        if the current number is lower than the target,
            set the current number to the lowest
            increase the index by one
            start again at the number in the middle of the lowest number and the highest 
    */
    
    
//     let left = 0, right = nums[nums.length - 1], mid = 0;
    
//     while (right - left > 1) {
//         mid = Math.floor((right + left)/2);
//         if (mid > target) {
//             right = mid;
//         } else if (mid < target) {
//             left = mid;
//         } else if (mid == target) {
            
//         }
//     }
//     return nums[left]
// }; 
