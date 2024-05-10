/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
      let left = 0; // Start pointer
  let right = height.length - 1; // End pointer
  let maxWater = 0; // Variable to track the maximum area

  // Continue while left pointer is less than right pointer
  while (left < right) {
    // Calculate the current area based on the shorter line and the width
    const currentWater = Math.min(height[left], height[right]) * (right - left);

    // Update the maximum area if the current area is larger
    maxWater = Math.max(maxWater, currentWater);

    // Move the pointer pointing to the shorter line
    if (height[left] < height[right]) {
      left++; // Move left pointer to the right
    } else {
      right--; // Move right pointer to the left
    }
  }

  return maxWater; // Return the maximum area found
};