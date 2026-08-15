/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const n = piles.length
    let l = 1 , r = Math.max(...piles)
    const check = (m,h) => {
        let cnt = 0
        for(let i = 0; i < n; i ++){
            cnt += Math.ceil(piles[i] / m)
        }
        return cnt <= h
    }
    while(l < r){
        const m = Math.floor((l + r)/2) 
        //console.log(l,r,m)
        if(check(m,h)){
            r= m
        }
        else{
            l = m + 1
        }
    }
    return l
};