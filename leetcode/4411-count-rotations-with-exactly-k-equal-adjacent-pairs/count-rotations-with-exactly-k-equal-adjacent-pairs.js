/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function(s, k) {
    const n = s.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (s[i] === s[(i + 1) % n]) {
                count++;
            }
        }

        const diff = n - count;

        if (k === count) {
            return diff;
        }

        if (k === count - 1) {
            return count;
        }

        return 0;
};