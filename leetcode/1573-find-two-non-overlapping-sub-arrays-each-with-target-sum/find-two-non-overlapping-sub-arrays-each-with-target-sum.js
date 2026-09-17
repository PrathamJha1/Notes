/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
    const n = arr.length;
    // minLen[i] = minimum length of a valid target subarray ending at or before index i
    const minLen = new Array(n).fill(Infinity);

    let left = 0;
    let sum = 0;
    let result = Infinity;

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        // Shrink window if the sum exceeds target
        while (sum > target) {
            sum -= arr[left];
            left++;
        }

        // Maintain prefix minLen from the previous index
        if (right > 0) {
            minLen[right] = minLen[right - 1];
        }

        if (sum === target) {
            const currentLen = right - left + 1;

            // If a valid non-overlapping subarray exists prior to 'left', combine them
            if (left > 0 && minLen[left - 1] !== Infinity) {
                result = Math.min(result, currentLen + minLen[left - 1]);
            }

            // Update the minimum length found up to the current index
            minLen[right] = Math.min(minLen[right], currentLen);
        }
    }

    return result === Infinity ? -1 : result;
};