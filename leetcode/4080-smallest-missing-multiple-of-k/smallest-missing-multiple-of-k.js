/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    const obj = {}
    for (let i of nums) {
        obj[i] = true
    }
    let p = k
    let cnt = 1
    while (true) {
        console.log(p, cnt, obj[p])
        if (obj[p] !== true) {
            return p
        }
        cnt += 1
        p = cnt * k
    }

};