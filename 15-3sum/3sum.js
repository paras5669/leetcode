/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
      // Step 1: Sort the array
  nums.sort((a, b) => a - b);
  
  const triplets = []; // To store the result triplets
  
  for (let i = 0; i < nums.length - 2; i++) {
    // Step 3: Skip duplicate elements for `i`
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    // Step 4: Initialize `left` and `right` pointers
    let left = i + 1;
    let right = nums.length - 1;
    
    // Step 5: Find triplets with sum zero
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      
      if (currentSum === 0) {
        // Step 5a: Add the triplet to the result list
        triplets.push([nums[i], nums[left], nums[right]]);
        
        // Step 5b: Move `left` pointer while avoiding duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        
        // Step 5b: Move `right` pointer while avoiding duplicates
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        
        // Step 5c: Move both pointers for the next iteration
        left++;
        right--;
      } else if (currentSum < 0) {
        // Step 5d: Increment `left` to increase the sum
        left++;
      } else {
        // Step 5e: Decrement `right` to decrease the sum
        right--;
      }
    }
  }
  
  // Step 6: Return the list of unique triplets
  return triplets;
};