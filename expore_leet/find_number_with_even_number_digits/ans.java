class Solution {
    public int findNumbers(int[] nums) {
        int total = 0;
        int sumDigit = 0;
        
        for (int num : nums){
            sumDigit = 0;
            while (num > 0) {
                num /= 10;
                sumDigit++;
            }
            if (sumDigit % 2 == 0)
                total++;
        }
        return total;
    }
}