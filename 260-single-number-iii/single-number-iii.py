class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:

        xor = 0

        for n in nums:

            xor ^= n

        firstSetBit = (xor & xor - 1) ^ xor

        bucketOne = 0
        bucketTwo = 0

        for n in nums:

            if n & firstSetBit:

                bucketOne ^= n
            else:

                bucketTwo ^= n

        return bucketOne, bucketTwo
        
        










        