/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const st = []
    const n = s.length
    let ans = 0
    for(let i = 0;i < n; i++){
        if(s[i] === ')'){
            if(st.length === 0){
                ans += 1
            }
            else{
                st.pop()
            }
        }
        else{
            st.push('(')
        }
    }
    return ans + st.length
};