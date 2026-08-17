/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n= nums.length
    let queue = []
    let ans = []
    for(let i = 0 ; i < n; i ++){
        const num = nums[i]
        //console.log(queue)
        if(queue.length > 0  && i - k == queue[0]){
            queue.shift()
        }
        while(queue.length > 0 && nums[queue[queue.length - 1]] < num){
            queue.pop()
        }
        queue.push(i)
        if(i >= k - 1){
            ans.push(nums[queue[0]])
        }
    }
    return ans
};