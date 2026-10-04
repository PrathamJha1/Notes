class Solution:
    def checkValidString(self, s: str) -> bool:
        mi , ma = 0 , 0 
        for i in s:
            if i == '(':
                mi = mi + 1
                ma = ma + 1
            elif i == ')':
                mi = mi - 1
                ma = ma - 1
            else:
                mi = mi - 1
                ma = ma + 1

            if mi < 0 :
                mi = 0
            if ma < 0:
                return False
        return mi == 0