/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    const n = stones.length
    const mp = {0:0,1:0,2:0}
    for(let i =0 ;i < n; i++){
        stones[i] %= 3
        mp[stones[i]] = (mp[stones[i]] || 0) + 1
    }
    if(mp[0] % 2 == 0){
        return mp[1] >= 1 && mp[2] >= 1
    }

    return Math.abs(mp[1] - mp[2]) > 2 
};