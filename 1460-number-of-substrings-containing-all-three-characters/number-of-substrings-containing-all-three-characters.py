class Solution:
    def numberOfSubstrings(self, s: str) -> int:

        l = 0
        r = 0

        ans = 0

        frq = {}

        while r < len(s):

            frq[s[r]] = frq.get(s[r], 0) + 1

            
            
            
            if len(frq) == 3:
                ans += len(s) - r
                print(l, r, ans)

                while len(frq) == 3:

                    frq[s[l]] -= 1

                    if frq[s[l]] == 0:
                        del frq[s[l]]
                    if len(frq) == 3:
                        ans += len(s) - r 
                        print("print2", l, r, ans)

                    l += 1
            
            r += 1

        return ans
