var twoSum = function(nums, target) {
  var result = [];
  var sum = 0;

  loop1:
  for (var i = 0; i < nums.length; i++) {
    loop2:
    for (var j = 1; j < nums.length; j++) {
      sum = nums[i] + nums[j]
      if (i != j && sum == target) {
        result.push(i, j);
        break loop1;
        }
      }
   } 
    return result;
  }