/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length
    const cache = new Set()
    function check(s){
        let i = 0 , j = s.length - 1
        if(s === ""){
            return false
        }
        while(i < j){
            if(s[i] != s[j]){
                return false
            }
            i += 1
            j -= 1
        }
        return true
    }
    function memo(i,arr,curr){
        if(i === n){
            if(check(curr)){
                cache.add([...arr,curr])
            }
            return 
        }
        if(check(curr)){
            arr.push(curr)
            memo(i + 1, arr,s[i])
            arr.pop();
        }
        let ntake = memo(i + 1, arr, curr + s[i])
        
    }
    memo(0,[],"")
    return [...cache]
};