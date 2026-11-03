/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a,b) => a - b)
    let n = nums.length
    let t = nums[n - 1]
    let ans = 0
    for(let i = 0 ; i < n ;i ++){
        ans += Math.abs(nums[i] - t)
    }
    return ans
};