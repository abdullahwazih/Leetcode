class Solution:
    def addBinary(self, a: str, b: str) -> str:
        
        lenA = len(a) - 1
        lenB = len(b) - 1

        carry = 0
        
        result = []

        while lenA >= 0 or lenB >= 0 or carry:
            
            total = carry

            if lenA >= 0:

                total += int(a[lenA])
                lenA -= 1

            if lenB >= 0:

                total += int(b[lenB])
                lenB -= 1

            
            result.append(str(total % 2))
            carry = total // 2
            
        return ''.join(result[::-1])

            



