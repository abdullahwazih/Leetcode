class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:

        l  = r = 0

        sum = 0
        ans = len(nums) + 1

        while r < len(nums):
            
            sum += nums[r]

            while sum >= target:

                ans = min(r - l + 1, ans)

                sum -= nums[l]

                l +=  1
            
            r += 1
        
        return 0 if ans == len(nums) + 1 else ans



            

        