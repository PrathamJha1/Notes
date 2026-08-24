/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    const n = grid.length
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Array(n).fill(-1))
        )
    );
    let cherries;
    function memo(r1,c1,r2,c2,grid,dp){
        if(r1 === n - 1 && c1 == n - 1){
            return grid[r1][c1] !== -1 ? grid[r1][c1] : -Infinity
        }
        if(r1 > n - 1 || r2 > n - 1 || c1 > n - 1 || c2 > n - 1 || grid[r1][c1] == -1 || grid[r2][c2] == -1){
            return -Infinity
        }
        if(dp[r1][c1][r2][c2] != -1){
            return dp[r1][c1][r2][c2]
        }
        if(r1 == r2 && c1 == c2){
            cherries = grid[r1][c1]
        }
        else{
            cherries = grid[r1][c1] + grid[r2][c2]
        }
        const res = cherries + Math.max(memo(r1,c1 + 1, r2 , c2 + 1,grid,dp), memo(r1 + 1,c1 , r2 + 1, c2 , grid,dp) , memo(r1 + 1,c1,r2,c2 + 1,grid,dp),memo(r1,c1 + 1,r2 + 1,c2, grid,dp))
        dp[r1][c1][r2][c2] = res
        return res
    }
    const res = memo(0,0,0,0,grid,dp) 
    return res > 0 ? res : 0
};