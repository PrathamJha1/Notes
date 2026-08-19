/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const obj = {}
    const n = s.length
    let l = 0 , r = 0
    let max_f = 0
    let ans = 0
    while(r < n){
        const char = s[r]
        obj[char] = (obj[char] || 0) + 1
        max_f = Math.max(max_f,obj[s[r]])
        while((r - l + 1) - max_f > k){
            obj[s[l]] -= 1
            l += 1
        }
        ans = Math.max(ans,r - l + 1)
        r++
    }
    return ans
};