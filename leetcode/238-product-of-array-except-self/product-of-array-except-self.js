/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    let pro = 1
    let count_zeroes = 0
    let ans = Array(n).fill(0)
    for(let num of nums){
        if (num == 0){
            count_zeroes += 1
        }
        else {
            pro *= num
        }
    }
    for(let i = 0;i < n; i++){
        if (count_zeroes == 1){
            if(nums[i] == 0){
                ans[i] = pro
            }
        }
        else if(count_zeroes === 0){
            ans[i] = pro / nums[i]
        }
    }
    return ans
};