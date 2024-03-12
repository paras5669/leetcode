/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(!nums || nums.length === 0){
        return 0;
    }

    let minProduct =  nums[0];
    let maxProduct =  nums[0];
    let maxResult =  nums[0];

    for(let i =  1 ; i < nums.length; i++){

        if(nums[i]< 0){
            [ minProduct , maxProduct] = [maxProduct , minProduct]
        }

        maxProduct = Math.max(nums[i],maxProduct * nums[i])
        minProduct = Math.min(nums[i],minProduct * nums[i])

        maxResult = Math.max(maxResult, maxProduct)        

    }

    return maxResult;
};