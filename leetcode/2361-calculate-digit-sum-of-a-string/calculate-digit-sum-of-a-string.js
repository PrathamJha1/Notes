var digitSum = function (s, k) {
    while (s.length > k) {
        let tmp = ""; // The string after each round
        const n = s.length;
        for (let i = 0; i < n; i += k) {
            let val = 0;
            for (let j = i; j < Math.min(i + k, n); ++j) {
                val += parseInt(s[j]);
            }
            tmp += val.toString();
        }
        s = tmp;
    }
    return s;
};