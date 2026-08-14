/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const t1 = s.split("").sort().join("") , t2 = t.split("").sort().join("")
    return t1 === t2
};