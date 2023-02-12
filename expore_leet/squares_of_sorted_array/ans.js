/**
 * This answer does not pass the test cases
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((num) => num * num).sort().reverse();
};