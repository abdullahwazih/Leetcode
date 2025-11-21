class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:

        n = start ^ goal
        cnt = 0
        
        while n != 0:

            if 1 & n == 1:
                cnt += 1
            n = n >> 1
        
        return cnt
        