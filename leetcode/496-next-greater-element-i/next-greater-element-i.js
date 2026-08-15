/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let st = []
    const n = nums2.length
    const m = nums1.length
    const next_greater = Array(n).fill(-1)
    let ans = []
    for(let i = n - 1; i >= 0 ;i--){
        console.log(st)
        while(nums2[st[st.length - 1]] <= nums2[i]){
            st.pop()
        }
        if(st.length > 0 ){
            next_greater[i] = nums2[st[st.length - 1]]
        }
        st.push(i)
    }

    for(let i = 0 ; i < m; i++){
        for(let j = 0; j < n; j++){
            if(nums1[i] == nums2[j]){
                ans.push(next_greater[j])
            }
        }
    }
    return ans

};