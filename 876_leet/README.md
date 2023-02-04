# 876. Middle of the Linked List

Given the `head` of a singly linked list, *return the middle node of the linked list.*

If there are two middle nodes, return the second middle node.

 

**Example 1:**

![Midlist 1](lc-midlist1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

**Example 2:**

![Midlist 2](lc-midlist2.jpg)

```
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```
 

**Constraints:**
```
    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100
```

## Solution

### Solution in C
```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


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


```

### Solution in Javascript
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var lenght = 0;
    var middle = 0;
    var temp = head;

    while (temp)
    {
        lenght++;
        temp = temp.next;
    }

    middle = Math.floor(lenght / 2);
    temp = head;

    while (middle)
    {
        middle--;
        temp = temp.next;
    }
    
    return temp;
};
```