class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:

        dif = float('inf')
        piv = 0

        for i in range(0, len(arr)):
            
            if abs(arr[i] - x) < dif:
                piv = i
                dif = abs(arr[i] - x)

        l = piv - 1
        r = piv +  1

        ans = []
        ans.append(arr[piv])
        k -= 1

        while k:
            
            if r < len(arr) and l > -1:
                print("Enters", l, r, abs(arr[l] - x), abs(arr[r] - x))

                if abs(arr[l] - x) > abs(arr[r] - x):

                    ans.append(arr[r])
                    print("First Cond", r, arr[r])

                    r += 1

                elif abs(arr[l] - x) < abs(arr[r] - x):

                    ans.append(arr[l])
                    print("Second Cond", l, arr[l])
                    l -= 1
                else:
                    if l > -1:
                        ans.append(arr[l])
                        print("Third Cond", l, arr[l])

                        l -= 1

                    elif r < len(arr):
                        ans.append(arr[r])
                        print("Fourth Cond", r, arr[r])

                        r += 1

            else:
                if l > -1:
                    ans.append(arr[l])
                    print("Third Cond", l, arr[l])

                    l -= 1

                elif r < len(arr):
                    ans.append(arr[r])
                    print("Fourth Cond", r, arr[r])

                    r += 1
            
            k -= 1

            if l < 0 and r >= len(arr):
                break

        ans.sort()

        return ans

        


        