/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xor = 0
    const n = nums.length
    let maxi = 0
    for(let i = 0; i < nums.length; i++){
        maxi = Math.max(nums[i],maxi)
        xor ^= nums[i]
    }
    if(xor === 0){
        return maxi === 0 ? 0 : n - 1
    }
    return n
};