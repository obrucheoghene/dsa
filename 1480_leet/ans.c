/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* runningSum(int* nums, int numsSize, int* returnSize){
    int i;
    int *result;

    result = malloc(sizeof(int) * numsSize);
    if(!result)
    {
        return (NULL);
    }
    *returnSize = numsSize;   
    result[0] = nums[0];
    for(i = 1; i < numsSize; i++)
    {
        result[i] = nums[i] + result[i - 1];
    }
    return (result);
}