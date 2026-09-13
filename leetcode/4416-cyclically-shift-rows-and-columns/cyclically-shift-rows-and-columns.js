/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function (n, grid, rowShift, colShift) {
    function row(grid,shft) {
        for (let i = 0; i < n; i++) {
            let curr = [...grid[i]]
            for (let j = 0; j < n; j++) {
                grid[i][j] = curr[(j + shft[i] + n) % n]
            }
        }
        return grid
    }
    function transpose(grid) {
        let gd = grid.map(row => [...row])
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                gd[i][j] = grid[j][i]
            }
        }
        return gd
    }
    

    grid = row(grid,rowShift)
    let gd = transpose(grid)
    grid = row(gd,colShift)
    grid = transpose(gd)
    return grid
};