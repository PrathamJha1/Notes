class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        mod = 1000000007
        n = len(arr)
        cumm = 0
        ans = 0
        mp = {0:1 , 1:0}
        for i in range(n):
            cumm += arr[i]
            rem = cumm % 2
            if(rem):
                ans = (ans + mp.get(rem - 1,0)) % mod
            else:
                ans = (ans + mp.get(1,0)) % mod
            mp[rem] = mp[rem] +  1
        return ans
                