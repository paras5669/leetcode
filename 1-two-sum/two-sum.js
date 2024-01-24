/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let numMap = {};

    for(let i =0 ; i < nums.length;i++){

        let pending = target - nums[i];

        if(numMap[pending] !== undefined){
            return [numMap[pending],i]
        }

        numMap[nums[i]] = i;

    }

    return [];

};