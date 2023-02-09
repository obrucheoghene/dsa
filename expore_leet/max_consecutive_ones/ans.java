class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
            
            for(int num : nums) {
                if (num == 1){
                    max++;
                }else {
                    max = 0;
                }
            }
        return max;
    }
}