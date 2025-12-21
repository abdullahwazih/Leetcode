class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        
        l, r = 0, len(people) - 1
        boats = 0

        while l <= r:
            if people[l] + people[r] <= limit:
                l += 1   # pair lightest with heaviest
            r -= 1       # heaviest always goes
            boats += 1

        return boats
