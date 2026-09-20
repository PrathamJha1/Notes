/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function(intervals) {
    const n = intervals.length
    let ans = 0 
    for(let i = 0; i < n; i++){
        for(let j = 0 ; j < n; j++){
            if(Math.max(intervals[i][0],intervals[j][0]) <= Math.min(intervals[i][1],intervals[j][1]) &&  i != j){
                ans += 1
            }
        }
    }
    return ans/2
};