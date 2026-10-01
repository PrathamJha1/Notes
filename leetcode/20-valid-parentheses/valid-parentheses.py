class Solution:
    def isValid(self, s: str) -> bool:
        st = []
        mp = {')' : '(' , ']' : '[' , '}':'{' }
        for i in s:
            if i == ')' or i == '}' or i == ']':
                if(st and st[-1] == mp[i]):
                    st.pop()
                else:
                    return False
            else:
                st.append(i)
        return True if len(st) == 0 else False