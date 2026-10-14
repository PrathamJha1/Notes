/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    let ans = ""
    while(sum > 0 && num > 0){
        if(sum < 9){
            ans += String(sum)
            sum = 0
        }
        else{
            ans += '9'
            sum -= 9
        }
            num -= 1
    }
    while(num > 0){
        ans += '0'
        num -= 1
    }
    if(sum > 0){
        return ""
    }
    return ans
};