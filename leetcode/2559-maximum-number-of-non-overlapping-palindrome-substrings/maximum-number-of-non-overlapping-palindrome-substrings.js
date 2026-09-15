/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    const memoCache = Array(n).fill(-1);

    // Helper to check if s[l...r] is a palindrome without slicing the string
    function checkPalindrome(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l += 1;
            r -= 1;
        }
        return true;
    }

    function memo(i) {
        // Base case: if we run out of characters, we can't form any more palindromes
        if (i >= n) {
            return 0;
        }

        // Return the cached result if we've already solved this index
        if (memoCache[i] !== -1) {
            return memoCache[i];
        }

        // Option 1: Skip the current character
        let ans = memo(i + 1);

        // Option 2: Try to find a valid palindrome starting at index i
        // The ending index j must be at least i + k - 1 to satisfy the length >= k
        for (let j = i + k - 1; j < n; j++) {
            if (checkPalindrome(i, j)) {
                ans = Math.max(ans, 1 + memo(j + 1));
                
                // Optimization: If we find a valid palindrome, we don't need to look 
                // for longer ones starting at the same index 'i', because a shorter 
                // palindrome leaves more room for future ones.
                break; 
            }
        }

        memoCache[i] = ans;
        return ans;
    }

    return memo(0);
};