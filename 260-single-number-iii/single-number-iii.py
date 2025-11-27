class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:

        ones = 0
        twos = 0
        xor = 0
        nums.sort()

        for n in nums:

            xor ^= n

        ans = 0

        for i in range(0, len(nums), 2):

            if nums[i] != nums[i + 1]:
                ans = nums[i]
                break

        #print(xor, ans)
        return ans, xor ^ ans
        
        










        