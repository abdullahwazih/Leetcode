class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        first_part = [0] * len(nums)
        
        k %= len(nums)
        
        i = len(nums)
        t = k
        while t:
            
            first_part[t - 1] = nums[i - 1]

            t -= 1
            i -= 1

        t2 = k

        while t2 < len(nums):

            first_part[t2] = nums[t2 - k]
            t2  += 1
            
        x = 0

        while x < len(nums):
            nums[x] = first_part[x]
            x +=  1

        #print(first_part)


        