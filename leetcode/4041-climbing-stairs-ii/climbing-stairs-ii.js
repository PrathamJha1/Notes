/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    const dp = Array(n).fill(-1)
    function recursion(i) {
        if (i === n) {
            return 0
        }
        if(dp[i] != -1){
            return dp[i]
        }
        let ans = Number.POSITIVE_INFINITY
        for (let j = i + 1; j <= Math.min(n, i + 3); j++) {
            ans = Math.min(recursion(j) + costs[j - 1] + (j - i) ** 2, ans)
        }
        dp[i] = ans
        return dp[i]
    }
    return recursion(0)
};