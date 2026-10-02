class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        s = set()
        def solve(o , c ,st):
            if(o == 0 and c == 0):
                s.add(st)
                return
            if(o):
                solve(o-1,c,st + '(')
            if(c and c > o):
                solve(o,c-1,st + ')')
        solve(n,n,"")
        print(s)
        return list(s)