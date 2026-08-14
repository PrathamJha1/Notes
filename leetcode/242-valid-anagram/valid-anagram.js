/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const freq = Array(26).fill(0);
    for(let i = 0; i< s.length; i++){
        freq[s.charCodeAt(i) - 97] += 1
    }
    for(let i = 0; i< t.length; i++ ){
        freq[t.charCodeAt(i) - 97] -= 1
    }
    for(let i = 0; i < 26; i++){
        if(freq[i]!= 0)
            return false
    }
    return true 
};