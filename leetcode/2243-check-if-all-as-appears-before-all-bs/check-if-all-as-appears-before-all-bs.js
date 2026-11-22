/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let f = false , g = false
    let n = s.length
    for(let i = 0; i < n; i++){
        if(s[i] === 'b'){
            f = true
        }
        else{
            if(f){
                return false
            }
        }
    }
    return true
};