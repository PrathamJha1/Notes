/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    st = []
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            st.push(i)
            ans = Math.max(ans, st.length)
        }
        else if (s[i] === ')' && st.length > 0) {
            st.pop()
        }
    }
    return ans
};