class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> mp = new HashMap<>();
        int []ans =new int[2];
        for(int i=0;i<nums.length;i++){
            int x= mp.getOrDefault(target-nums[i],-1);
            if(x!=-1){
                ans[0]=x;
                ans[1]=i;
                return ans;
            }
            mp.put(nums[i],i);
        }
        return ans;
    }
}