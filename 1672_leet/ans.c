int maximumWealth(int** accounts, int accountsSize, int* accountsColSize){
    int max = 0;
    int i, j, sum;

    for (i = 0; i < accountsSize; i++)
    {
        sum = 0;
        for (j = 0; j < accountsColSize[i]; j++)
        {
            sum += accounts[i][j];
        }
        if (sum > max)
            max = sum;
    }
    return (max);
}