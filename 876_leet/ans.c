/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
 struct ListNode {
    int val;
     struct ListNode *next;
 };

int lenghtOfList(struct ListNode* head)
{
    struct ListNode* temp = head;
    int count = 0;

    while (temp)
    {
        count += 1;
        temp = temp->next;
    }
    return (count);
}

struct ListNode* middleNode(struct ListNode* head){
    int lenght = 0, middle = 0;
    struct ListNode* temp = head;

    lenght = lenghtOfList(head);
    middle = lenght / 2;

    while(middle > 0)
    {
        temp = temp->next;
        middle -= 1;
    }
    
    return (temp);
}
