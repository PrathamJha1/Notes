/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    const n = nums.length
    let ans = 1
    let count = 1
    let curr = nums[0]
    for (let i = 1; i < n; i++) {
        if (nums[i] > curr) {
            count += 1
            ans = Math.max(count, ans)
        }
        else {
            count = 1
        }
        curr = nums[i]
    }

    curr = nums[0]
    count = 1
    for (let i = 1; i < n; i++) {
        if (nums[i] < curr) {
            count += 1
            ans = Math.max(ans, count)
        }
        else {
            count = 1
        }
        curr = nums[i]
    }
    return ans
};