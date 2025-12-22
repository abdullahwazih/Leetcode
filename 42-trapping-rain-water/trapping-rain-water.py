class Solution:
    def trap(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        leftMax = rightMax = 0
        water = 0

        while left <= right:

            #print(left, right, leftMax, rightMax, water)

            if leftMax < rightMax:
                water += max(leftMax - height[left], 0)
                leftMax = max(leftMax, height[left])
                left += 1
            else:
                water += max(rightMax - height[right], 0)
                rightMax = max(rightMax, height[right])
                right -= 1
            #print(water, "______")

        return water
