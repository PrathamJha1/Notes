/**
 * @param {number[]} nums
 * @return {number}
 */
var shadowPairs = function(nums) {
    const n = nums.length;
    let st = [];
    let cnt = 0;
    
    // Helper to find how many elements in the sorted stack are strictly smaller than target
    function countSmaller(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    for (let i = 0; i < n; i++) {
        // Only pop elements that are strictly greater than the current element
        while (st.length > 0 && st[st.length - 1] > nums[i]) {
            st.pop();
        }
        
        // Count how many elements in the stack are strictly smaller than nums[i]
        cnt += countSmaller(st, nums[i]);
        
        // Push the current element onto the stack
        st.push(nums[i]);
    }
    
    return cnt;
};