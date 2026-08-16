/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    let next_smaller = Array(n).fill(n); // FIXED: Initialize with 'n'
    let pre_smaller = Array(n).fill(-1);
    
    let st = [];
    let ans = 0;
    
    // Find Previous Smaller Element
    for(let i = 0; i < n; i++) {
        // FIXED: Added st.length > 0 check
        while(st.length > 0 && heights[st[st.length - 1]] > heights[i]) {
            st.pop();
        }
        if(st.length > 0) {
            pre_smaller[i] = st[st.length - 1];
        }
        st.push(i);
    } 
    
    st = [];
    
    // Find Next Smaller Element
    for(let i = n - 1; i >= 0; i--) {
        // FIXED: Added st.length > 0 check
        while(st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        if(st.length > 0) {
            next_smaller[i] = st[st.length - 1];
        }
        st.push(i);
    }
    
    // Calculate Maximum Area
    for(let i = 0; i < n; i++) {
        // FIXED: The width formula is (Right_Bound - Left_Bound - 1)
        let width = next_smaller[i] - pre_smaller[i] - 1; 
        ans = Math.max(ans, heights[i] * width);
    }
    
    return ans; 
};