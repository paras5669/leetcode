/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while(left <= right){

        let mid =  Math.floor((left+right)/2);

        if(nums[mid] === target){
            return mid;
        }

        // Determine which side is properly sorted
        if (nums[left] <= nums[mid]) {
            // Left side is sorted
            if (nums[left] <= target && target < nums[mid]) {
                // If target is in the sorted range
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right side is sorted
            if (nums[mid] < target && target <= nums[right]) {
                // If target is in the sorted range
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

    }
    return -1;
};