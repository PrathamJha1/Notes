/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    function product(n){
        let p = 1
        let s = 0
        while(n){
            p *= n % 10
            s += n % 10
            n = Math.floor(n / 10)
        }
        return [p,s]
    }
    let [p,s] = product(n)
    console.log(n,p,s)
    return n % (p + s) == 0 
};