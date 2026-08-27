var lexGreaterPermutation = function (s, target) {
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        cnt[s.charCodeAt(i) - 97]++;
        cnt[target.charCodeAt(i) - 97]--;
    }

    // Try from right to left
    const t = target.split("");
    for (let i = s.length - 1; i >= 0; i--) {
        const b = t[i].charCodeAt(0) - 97;
        cnt[b]++; // Reversal of consumption
        // Check if the prefix can fully match
        if (Math.min(...cnt) < 0) {
            continue;
        }
        // Find the smallest available character larger than b.
        for (let j = b + 1; j < 26; j++) {
            if (cnt[j] > 0) {
                cnt[j]--;
                t[i] = String.fromCharCode(97 + j);
                return t.slice(0, i + 1).join("") + getMinString(cnt);
            }
        }
    }

    return "";
};

// Get the lexicographically smallest string (in ascending order)
function getMinString(cnt) {
    let res = "";
    for (let i = 0; i < 26; i++) {
        res += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return res;
}