/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length
    if (n < 2){
        return 0
    }
    let leftMax = Array(n).fill(height[0])
    let rightMax = Array(n).fill(height[n-1])
    let ans = 0
    for(let i = 1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i - 1] , height[i])
        rightMax[n - i - 1] = Math.max(rightMax[n - i] ,  height[n - i - 1])
    }
    console.log(leftMax,rightMax)
    for(let i = 0; i < n; i++){
        ans += Math.min(leftMax[i],rightMax[i]) - height[i]
    }
    return ans

};