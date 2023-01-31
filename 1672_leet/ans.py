class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        # return max([reduce((lambda x, y: x + y), account) for account in accounts])
        # return max(map(sum, accounts))
        return max([sum(x) for x in accounts])

# class Solution:
#     def maximumWealth(self, accounts: List[List[int]]) -> int:
#         max = 0
#         for acc in accounts:
#             sum = 0
#             for i in acc:
#                 sum += i
#             else:
#                 max = sum if sum > max else max
#         return max